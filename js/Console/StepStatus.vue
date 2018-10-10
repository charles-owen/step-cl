<template>
  <div class="cl-step-statuses">
    <div ref="container">
      <membersfetcher :fetching="results === null">
        <template slot-scope="fetcher">
          <table class="tiny" v-if="results !== null">
            <tr class="vertical">
              <th class="cl-fixed-xy">User</th>
              <th class="cl-fixed-xy">Name</th>
              <th class="cl-fixed-y small"><div>Looked</div></th>
              <th class="cl-fixed-y small" v-for="section in assignment.sections"><div>{{section.name}}</div></th>
            </tr>
            <tbody>
              <tr v-for="user in fetcher.users">
                <td class="cl-fixed-x" >{{user.userId}}</td>
                <td class="cl-fixed-x cl-step-status-name">{{user.name}}</td>
                <td :class="looked(user, 'look') ? '' : 'cl-step-nolook'" :title="title(user, 'Looked')"><span v-html="status(user, 'look')"></span></td>
                <td v-for="section in assignment.sections" :class="looked(user, section.tag) ? '' : 'cl-step-nolook'" :title="title(user, section.name)">
                  <span v-html="status(user, section.tag)"></span></td>
              </tr>
                <td class="cl-fixed-x" >&nbsp;</td>
                <td class="cl-fixed-x cl-step-status-name">&nbsp;</td>
                <td>{{looksTotal('look', fetcher.users)}}</td>
                <td v-for="section in assignment.sections">{{sectionTotal(section.tag, fetcher.users)}}</td>
              <tr>

              </tr>
            </tbody>
          </table>
        </template>
      </membersfetcher>
    </div>
  </div>
</template>

<script>
	import ConsoleComponentBase from 'console-cl/js/ConsoleComponentBase.vue';
	import MembersFetcherComponent from 'course-cl/js/Console/Members/MembersFetcherComponent.vue';
  const NOTVISITED = 'N'; // Section has not been visited by the user
  const VISITED = 'V';	  // Section has been visited, but is not yet done
  const DONE = 'D';		    // Section is completed

    export default {
	      extends: ConsoleComponentBase,
        props: ['assigntag'],
        data: function() {
            return {
                results: null,
                assignment: null
            }
        },
        methods: {
        	status(user, sectionTag) {
        		const s = this.results[user.member.id];
        		if(s === undefined || s[sectionTag] === undefined) {
        			// No look
        			return '';
            }

            const t = s[sectionTag];

        		if(t.status === DONE) {
        			return `<img src="${this.root}/vendor/cl/site/img/check16.png">`;
            }

            return '';
          },
	        sectionTotal(sectionTag, users) {
            let cnt = 0;
            for(let user of users) {
	            const s = this.results[user.member.id];
	            if(s === undefined || s[sectionTag] === undefined) {
		            // No look
		            continue;
	            }

	            const t = s[sectionTag];

	            if(t.status === DONE) {
		            cnt++;
	            }
            }

		        return cnt;
	        },
          looked(user, sectionTag) {
	          const s = this.results[user.member.id];
	          if(s === undefined || s[sectionTag] === undefined) {
		          // No look
		          return false;
	          }

	          const t = s[sectionTag];

	          return t.status !== NOTVISITED;
          },
          looksTotal(sectionTag, users) {
        		let cnt = 0;
        		for(let user of users) {
              const s = this.results[user.member.id];
              if(s === undefined || s[sectionTag] === undefined) {
                // No look
                continue;
              }

              const t = s[sectionTag];

              if(t.status !== NOTVISITED) {
              	cnt++;
              }
            }

            return cnt;
          },
          title(user, sectionName) {
        		return user.name + '/' + sectionName;
          },
          freezer() {
        		const div = this.$refs.container;
        		console.log(div);
        		const row1 = div.querySelector('tr.vertical');
        		console.log(row1);
	          div.addEventListener('scroll', (event) => {
	            const xs = div.querySelectorAll('.cl-fixed-x');
	            for(let i=0; i<xs.length; i++) {
		            const el = xs[i];
		            el.style.transform = 'translate(' + div.scrollLeft + 'px, 0)';
	            }

	            const ys = div.querySelectorAll('.cl-fixed-y');
	            for(let i=0; i<ys.length; i++) {
		            const el = ys[i];
		            el.style.transform = 'translate(0, ' + div.scrollTop + 'px)';
	            }

	            const xys = div.querySelectorAll('.cl-fixed-xy');
	            for(let i=0; i<xys.length; i++) {
		            const el = xys[i];
		            el.style.transform = 'translate(' + div.scrollLeft + 'px, ' + div.scrollTop + 'px)';
	            }
            });
          }
        },
        components: {
            'membersfetcher': MembersFetcherComponent
        },
        created() {
	        const member = this.$store.state.user.user.member;
	        let query = {
		        semester: member.semester,
		        section: member.section
	        };

	        this.section = this.$store.getters['course/section'](member.semester, member.section);
	        this.assignment = this.section.getAssignment(this.assigntag);
	        console.log(this.assignment);
	        this.$parent.setTitle(': ' + this.assignment.shortname + ' Status');

        },
        mounted() {
            this.$site.api.get('/api/step/statuses/' + this.assigntag, {})
                .then((response) => {
                    if(!response.hasError()) {
                    	this.results = response.getData('step-statuses').attributes;

	                    setTimeout(() => {
	                      this.freezer();
                      }, 500);

                    } else {
	                    this.$site.toast(this, response);
                    }

                })
                .catch((error) => {
                	console.log(error);
	                this.$site.toast(this, error);
                });
        }
    }
</script>

<style lang="scss">
  div.cl-step-statuses {
    padding: 0.5em;
    position: relative;

    >div {
      height: 800px;
      overflow: scroll;

    }

    table {
      position: relative;
      z-index: 0;
      margin: 0 auto;
      padding: 0;
    }

    tbody {
      position: relative;
      z-index: -100;
    }

    th.cl-fixed-xy {
      position: relative;
      z-index: 20;
    }

    td.cl-fixed-x {
      position: relative;
      z-index: 0;
    }

    th.cl-fixed-y {
      position: relative;
      z-index: 10;
    }
  }

  td.cl-step-nolook {
    background: #ccffff;
  }

  td.cl-step-status-name {
    white-space: nowrap;
  }
</style>