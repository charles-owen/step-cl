<template>
    <div class="cl-step-statuses">
        <table class="small" v-if="results !== null">
            <tr>
                <th>Section</th><th>Looked</th><th>Accessed</th><th>Status</th>
            </tr>
            <tr>
                <td>Look</td>
                <td>{{look('look')}}</td>
                <td>{{access('look')}}</td>
                <td>&nbsp;</td>
            </tr>
            <tr v-for="section in assignment.sections">
                <td>{{section.name}}</td>
                <td>{{look(section.tag)}}</td>
                <td>{{access(section.tag)}}</td>
                <td><span v-html="status(section.tag)"></span></td>
            </tr>
        </table>
    </div>
</template>

<script>
    const ConsoleComponentBase = Site.ConsoleComponentBase;

    const DONE = 'D';		    // Section is completed

    /**
     * Status of a step assignment for a given user.
     * /cl/console/step/status/:assigntag/:memberid
     * @constructor StepUserStatusVue
     */
    export default {
        extends: ConsoleComponentBase,
        props: ['memberid', 'assigntag'],
        data: function() {
            return {
                results: null,
                assignment: null,
                stepUser: null
            }
        },
        created() {
            const member = this.$store.state.user.user.member;
            let query = {
                semester: member.semester,
                section: member.section
            };

            this.section = this.$store.getters['course/section'](member.semester, member.section);
            this.assignment = this.section.getAssignment(this.assigntag);
            this.$parent.setTitle(': ' + this.assignment.shortname + ' Status');

        },
        mounted() {
            this.addNav2Link('Exit', 4, '/cl/console/step/status/' + this.assigntag);

            this.$site.api.get('/api/step/statuses/' + this.memberid + '/' + this.assigntag, {})
                .then((response) => {
                    if(!response.hasError()) {
                        this.stepUser = response.getData('user').attributes;
                        this.results = response.getData('step-member-statuses').attributes;

                        this.$parent.setTitle(': ' + this.stepUser.name + ' ' + this.assignment.shortname + ' Status');
                    } else {
                        this.$site.toast(this, response);
                    }

                })
                .catch((error) => {
                    console.log(error);
                    this.$site.toast(this, error);
                });

        },
        methods: {
            look(sectionTag) {
                const s = this.results[sectionTag];
                if (s === undefined) {
                    // No look
                    return '';
                }

                return this.time(s.look);
            },
            access(sectionTag) {
                const s = this.results[sectionTag];
                if (s === undefined) {
                    // No look
                    return '';
                }

                return this.time(s.access);
            },
            status(sectionTag) {
                const s = this.results[sectionTag];
                if (s === undefined) {
                    // No look
                    return '';
                }

                if(s.status === DONE) {
                    return `<img src="${this.root}/vendor/cl/site/img/check16.png">`;
                }
            },
            time(t) {
                return this.$site.TimeFormatter.absoluteUNIX(t, 'short');
            },
        }
    }

</script>