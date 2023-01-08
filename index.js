import {StepFactory} from './js/Step/StepFactory';

if(!Site.Step) {
	Site.Step = StepFactory.create(Site.Site);
}