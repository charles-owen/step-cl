import {StepFactory} from './StepFactory.js';

// Use the factory to create the Users object
let Step = global.Step !== undefined ?
    Step :
    StepFactory.create(Site);

export {Step};
export default Step;
