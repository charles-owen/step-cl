<?php
/**
 * @file
 * Base class for both the all and single section views of step sections.
 */

namespace CL\Step;

use CL\Site\Site;
use CL\Site\System\Server;

/** Base class for both the all and and single section views of step sections */
abstract class StepSectionsView extends StepView {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param string $assignTag Tag for the assignment to view
	 * @param Server|null $server Optional dependency injection of Server
	 * @param int $time Time we are viewing or null for time()	 */
	public function __construct(Site $site, $assignTag, Server $server = null, $time=null) {
		parent::__construct($site, $assignTag, $server, $time);

    }
	
	/**
     * Present the appropriate page content for a submission
	 * @param string $tag Submission tag
     */
	public function present_submission($tag) {
		$html = '';
		
		$submission = $this->step->get_grading()->get_submission($tag);
		if($submission === null) {
			return <<<HTML
<p class="centerbox comp center">Submission $tag does not exist.</p>
HTML;
		}

		$view = $submission->create_view();
		$html .= $view->present();
		
		return $html;
	}

}
