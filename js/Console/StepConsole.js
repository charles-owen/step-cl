/**
 * @file
 * Step system console components
 */

import StepStatusVue from './StepStatus.vue';
import StepUserStatusVue from './StepUserStatus.vue';

export let StepConsole = function() {
}

StepConsole.setup = function(Console) {

	Console.components.addRoute(
		{route: '/step/status/:assigntag', component: StepStatusVue, props: true}
	);

	Console.components.addRoute(
		{route: '/step/status/:assigntag/:memberid', component: StepUserStatusVue, props: true}
	);

	Console.course.assignmentLink('step', 'status', '/step/status/:assigntag');
}

