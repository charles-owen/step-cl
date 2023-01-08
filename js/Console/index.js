import {StepConsole} from './StepConsole'

//
// Install the console components
//

if(Site.Console && !Site.Console.Step) {
	StepConsole.setup(Site.console);
}
