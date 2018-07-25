/**
 * @file
 * The definition of a step section
 */

export let StepSection = function() {

}

// Must match values in StepSection.php
StepSection.SECTION = 'S';    ///< Indicates this section is a regular section
StepSection.TASK = 'T';		///< Indicates this section is a task
StepSection.QUIZ = 'Q';		///< Indicates this section is a quiz
StepSection.VIDEO = 'V';		///< Indicates this section is a video

StepSection.flag = function(assignTag, sectionTag, status, callback) {
    let params = {status: status};
    Site.api.post(`/api/step/status/${assignTag}/${sectionTag}`, params)
        .then((response) => {
            if (!response.hasError()) {
                callback();
            } else {
                Site.toast(this, response);
            }

        })
        .catch((error) => {
            Site.toast(this, error);
        });
}