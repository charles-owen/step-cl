<?php
/**
 * @file
 * This class represents the presentation of the sections of the step main page
 */

namespace CL\Step;


/**
 * This class represents the presentation of the sections of the step main page
 */
class StepPageSections {
	/**
	 * StepPageSections constructor.
	 * Set the default values for the appearance.
	 */
	public function __construct($view) {
		$this->view = $view;

		$this->title = 'The Assignment Sections';

		$this->begin = <<<HTML
<p>These are the sections of the assignment. Click on each to go to the 
section. For your convenience, a check mark will appear when you indicate that a 
section is done. Some of the sections are very short.</p>
<p>A link is available at the bottom of the page that allows you to view 
the assignment in one page. This is useful for searching purposes, though 
some functions may be limited.</p>
HTML;


		$this->end = '';
	}
	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * appearance | Appearance | The installed Appearance object.
	 * autoback | bool | Page supports autoback
	 * root | string | Root path for this site (with no trailing /)
	 * site | Site | The Site object
	 * title | string | The site title
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {


			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * begin | string | Content for the beginning of the sections list
	 * end | string | Content for the end of the sections list.
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'begin':
				$this->begin = $value;
				break;

			case 'end':
				$this->end = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}
	}

	/**
	 * Present the assignment section.
	 * @return string HTML
	 */
	public function present() {
		$step = $this->view->step;

		$data = $step->data();
		$data['sectionsTitle'] = $this->title;
		$data['sectionsBegin'] = $this->begin;
		$data['sectionsEnd'] = $this->end;

		// Collect up all page icons
		$icons = [];
		foreach($step->sectionsInOrder as $section) {
			$icons[$section->type] = $section->icon();
		}

		// Appearance map all of these
		$data['icons'] = [];
		$root = $this->view->site->root;

		foreach($icons as $key => $icon) {
			if($key === StepSection::SECTION && $step->iconurl !== null) {
				$data['icons'][$key] = [
					'file' => $step->iconurl,
					'alt' => $step->iconalt !== null ? $step->iconalt : $icon['alt']
				];
			} else {
				$data['icons'][$key] = [
					'file' => $root . $this->view->appearance->image($icon['tag'], $icon['file']),
					'alt' => $icon['alt']
				];
			}
		}

		$this->view->addJSON('cl-step-page', json_encode($data));

		return '<div class="cl-step-sections"></div>';
	}

	private $view;
	private $title;
	private $begin;
	private $end;
}