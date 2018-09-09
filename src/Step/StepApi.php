<?php
/**
 * @file
 * API Resource for /api/step
 */
namespace CL\Step;

use CL\Site\Api\JsonAPI;
use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Api\APIException;
use CL\Course\Member;
use CL\Course\SectionStatus;

/**
 * API Resource for /api/step
 */
class StepApi extends \CL\Users\Api\Resource {
	/**
	 * StepApi constructor.
	 */
	public function __construct() {
		parent::__construct();
	}

	/**
	 * Dispatch the API routing.
	 * @param Site $site The Site object
	 * @param Server $server The Server object
	 * @param array $params Parameters from the router
	 * @param array $properties Properties extracted from the route
	 * @param int $time Current time
	 * @return JsonAPI response
	 * @throws APIException If an error occurs.
	 */
	public function dispatch(Site $site, Server $server, array $params, array $properties, $time) {
		if(count($params) < 1) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		switch($params[0]) {
			case 'status':
				return $this->status($site, $server, $params, $time);

			case 'statuses':
				return $this->statuses($site, $params);
		}

		throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
	}

	private function statuses(Site $site, array $params) {
		$user = $this->isUser($site, Member::STAFF);

		if(count($params) < 2) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$statusTable = new SectionStatus($site->db);
		$statuses = $statusTable->get_statuses_assignment($user->member->semester,
			$user->member->sectionId, $params[1]);

		$json = new JsonAPI();
		$json->addData('step-statuses', 0, $statuses);
		return $json;
	}


	private function status(Site $site, Server $server, array $params, $time) {
		$user = $this->isUser($site, Member::STUDENT);
		$member = $user->member;

		if(count($params) < 3) {
			throw new APIException("Invalid API Path", APIException::INVALID_API_PATH);
		}

		$sectionStatus = new SectionStatus($site->db);

		$post = $server->post;
		if(!Server::ensureKeys($post, ['status']) || !$sectionStatus->validStatus($post['status'])) {
			throw new APIException("Invalid API Usage", APIException::INVALID_API_USAGE);
		}

		$status = $post['status'];

		$section = $site->course->get_section($member->semester, $member->sectionId);
		if($section === null) {
			throw new APIException("Course section does not exist");
		}

		$assignTag = $params[1];
		$sectionTag = $params[2];

		$assignment = $section->get_assignment($assignTag);
		if($assignment === null) {
			throw new APIException("Assignment does not exist");
		}

		$assignment->load();
		$stepSection = $assignment->get_section($sectionTag);
		if($stepSection === null) {
			throw new APIException("Assignment section does not exist");
		}

		$sectionStatus->set($user, $assignTag, $sectionTag, $status, $time);

		return new JsonAPI();
	}

}