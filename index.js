import {StepFactory} from './js/Step/StepFactory';
import {StepConsole} from './js/Console/StepConsole'

const Step = StepFactory.create(Site.Site);
export {Step};

//
// Install the console components
//


if(Site.Site.console !== undefined) {
	StepConsole.setup(Site.Site.console);
}
