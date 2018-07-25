<?php
/**
 * @file
 * Plugin class for the Step assignment Subsystem
 */

namespace CL\Step;

use CL\Site\Site;
use CL\Site\System\Server;
use CL\Site\Router;

/**
 * Plugin class for the Step assignment Subsystem
 */
class StepPlugin extends \CL\Site\Plugin {
	/**
	 * A tag that represents this plugin
	 * @return string A tag like 'course', 'users', etc.
	 */
	public function tag() {return 'step';}

	/**
	 * Return an array of tags indicating what plugins this one is dependent on.
	 * @return array of tags this plugin is dependent on
	 */
	public function depends() {return ['course'];}

	/**
	 * Install the plugin
	 * @param Site $site The Site configuration object
	 */
	public function install(Site $site) {
		$this->site = $site;
	}

	/**
	 * Amend existing object
	 * The Router is amended with routes for the login page
	 * and for the user API.
	 * @param $object Object to amend.
	 */
	public function amend($object) {
		if($object instanceof Router) {
			$router = $object;
			$router->addRoute(['step', 'section', ':step', ':section'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$view = new StepSectionView($site, $server, $properties, $time);
				return $view->whole();
			});

			$router->addRoute(['api', 'step', '*'], function(Site $site, Server $server, array $params, array $properties, $time) {
				$resource = new StepApi();
				return $resource->apiDispatch($site, $server, $params, $properties, $time);
			});
		}
	}

	private $site = null;
}