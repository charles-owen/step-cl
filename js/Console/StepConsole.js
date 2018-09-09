/**
 * @file
 * Step system console components
 */

import StepStatusVue from './StepStatus.vue';

export let StepConsole = function() {
}

StepConsole.setup = function(Console) {

	Console.components.addRoute(
		{route: '/step/status/:assigntag', component: StepStatusVue, props: true}
	);

	Console.course.assignmentLink('step', 'status', '/step/status/:assigntag');
}

