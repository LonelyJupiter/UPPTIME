function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function s(e){e.forEach(n)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let a;function c(e,t){return a||(a=document.createElement("a")),a.href=t,e===a.href}function l(e,n,r,s){return e[1]&&s?t(r.ctx.slice(),e[1](s(n))):r.ctx}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function f(e){return null==e?"":e}let d,h,m=!1;function p(e,t,n,r){for(;e<t;){const s=e+(t-e>>1);n(s)<=r?e=s+1:t=s}return e}function g(e,t){if(m){for(!function(e){if(e.hydrate_init)return;e.hydrate_init=!0;let t=e.childNodes;if("HEAD"===e.nodeName){const e=[];for(let n=0;n<t.length;n++){const r=t[n];void 0!==r.claim_order&&e.push(r)}t=e}const n=new Int32Array(t.length+1),r=new Int32Array(t.length);n[0]=-1;let s=0;for(let e=0;e<t.length;e++){const o=t[e].claim_order,i=(s>0&&t[n[s]].claim_order<=o?s+1:p(1,s,(e=>t[n[e]].claim_order),o))-1;r[e]=n[i]+1;const a=i+1;n[a]=e,s=Math.max(a,s)}const o=[],i=[];let a=t.length-1;for(let e=n[s]+1;0!=e;e=r[e-1]){for(o.push(t[e-1]);a>=e;a--)i.push(t[a]);a--}for(;a>=0;a--)i.push(t[a]);o.reverse(),i.sort(((e,t)=>e.claim_order-t.claim_order));for(let t=0,n=0;t<i.length;t++){for(;n<o.length&&i[t].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;e.insertBefore(i[t],r)}}(e),(void 0===e.actual_end_child||null!==e.actual_end_child&&e.actual_end_child.parentNode!==e)&&(e.actual_end_child=e.firstChild);null!==e.actual_end_child&&void 0===e.actual_end_child.claim_order;)e.actual_end_child=e.actual_end_child.nextSibling;t!==e.actual_end_child?void 0===t.claim_order&&t.parentNode===e||e.insertBefore(t,e.actual_end_child):e.actual_end_child=t.nextSibling}else t.parentNode===e&&null===t.nextSibling||e.appendChild(t)}function b(e,t,n){e.insertBefore(t,n||null)}function v(e,t,n){m&&!n?g(e,t):t.parentNode===e&&t.nextSibling==n||e.insertBefore(t,n||null)}function $(e){e.parentNode.removeChild(e)}function _(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function y(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function E(e){return document.createTextNode(e)}function x(){return E(" ")}function S(){return E("")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function A(e){return function(t){return t.preventDefault(),e.call(this,t)}}function P(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function N(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:P(e,r,t[r])}function I(e){return Array.from(e.childNodes)}function L(e){void 0===e.claim_info&&(e.claim_info={last_index:0,total_claimed:0})}function R(e,t,n,r,s=!1){L(e);const o=(()=>{for(let r=e.claim_info.last_index;r<e.length;r++){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s||(e.claim_info.last_index=r),o}}for(let r=e.claim_info.last_index-1;r>=0;r--){const o=e[r];if(t(o)){const t=n(o);return void 0===t?e.splice(r,1):e[r]=t,s?void 0===t&&e.claim_info.last_index--:e.claim_info.last_index=r,o}}return r()})();return o.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1,o}function k(e,t,n,r){return R(e,(e=>e.nodeName===t),(e=>{const t=[];for(let r=0;r<e.attributes.length;r++){const s=e.attributes[r];n[s.name]||t.push(s.name)}t.forEach((t=>e.removeAttribute(t)))}),(()=>r(t)))}function C(e,t,n){return k(e,t,n,w)}function O(e,t,n){return k(e,t,n,y)}function H(e,t){return R(e,(e=>3===e.nodeType),(e=>{const n=""+t;if(e.data.startsWith(n)){if(e.data.length!==n.length)return e.splitText(n.length)}else e.data=n}),(()=>E(t)),!0)}function U(e){return H(e," ")}function j(e,t,n){for(let r=n;r<e.length;r+=1){const n=e[r];if(8===n.nodeType&&n.textContent.trim()===t)return r}return e.length}function M(e,t){const n=j(e,"HTML_TAG_START",0),r=j(e,"HTML_TAG_END",n);if(n===r)return new K(void 0,t);L(e);const s=e.splice(n,r-n+1);$(s[0]),$(s[s.length-1]);const o=s.slice(1,s.length-1);for(const t of o)t.claim_order=e.claim_info.total_claimed,e.claim_info.total_claimed+=1;return new K(o,t)}function D(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function G(e,t){e.value=null==t?"":t}function q(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function B(){if(void 0===d){d=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(e){d=!0}}return d}function z(e,t){"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=B();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(e=>{e.source===n.contentWindow&&t()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",t)}),function(e,t){e.appendChild(t)}(e,n),()=>{(r||s&&n.contentWindow)&&s(),$(n)}}function J(e,t=document.body){return Array.from(t.querySelectorAll(e))}class K extends class{constructor(e=!1){this.is_svg=!1,this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,t,n=null){this.e||(this.is_svg?this.e=y(t.nodeName):this.e=w(t.nodeName),this.t=t,this.c(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)b(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach($)}}{constructor(e,t=!1){super(t),this.e=this.n=null,this.l=e}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let t=0;t<this.n.length;t+=1)v(this.t,this.n[t],e)}}function V(e){h=e}function W(){if(!h)throw new Error("Function called outside component initialization");return h}function F(e){W().$$.on_mount.push(e)}function Y(e){W().$$.after_update.push(e)}function X(e){W().$$.on_destroy.push(e)}const Q=[],Z=[],ee=[],te=[],ne=Promise.resolve();let re=!1;function se(e){ee.push(e)}const oe=new Set;let ie=0;function ae(){const e=h;do{for(;ie<Q.length;){const e=Q[ie];ie++,V(e),ce(e.$$)}for(V(null),Q.length=0,ie=0;Z.length;)Z.pop()();for(let e=0;e<ee.length;e+=1){const t=ee[e];oe.has(t)||(oe.add(t),t())}ee.length=0}while(Q.length);for(;te.length;)te.pop()();re=!1,oe.clear(),V(e)}function ce(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}const le=new Set;let ue;function fe(){ue={r:0,c:[],p:ue}}function de(){ue.r||s(ue.c),ue=ue.p}function he(e,t){e&&e.i&&(le.delete(e),e.i(t))}function me(e,t,n,r){if(e&&e.o){if(le.has(e))return;le.add(e),ue.c.push((()=>{le.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function pe(e,t){const n={},r={},s={$$scope:1};let o=e.length;for(;o--;){const i=e[o],a=t[o];if(a){for(const e in i)e in a||(r[e]=1);for(const e in a)s[e]||(n[e]=a[e],s[e]=1);e[o]=a}else for(const e in i)s[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function ge(e){return"object"==typeof e&&null!==e?e:{}}function be(e){e&&e.c()}function ve(e,t){e&&e.l(t)}function $e(e,t,r,i){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(t,r),i||se((()=>{const t=c.map(n).filter(o);l?l.push(...t):s(t),e.$$.on_mount=[]})),u.forEach(se)}function _e(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function we(e,t){-1===e.$$.dirty[0]&&(Q.push(e),re||(re=!0,ne.then(ae)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ye(t,n,o,i,a,c,l,u=[-1]){const f=h;V(t);const d=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(d.root);let p=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&a(d.ctx[e],d.ctx[e]=s)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](s),p&&we(t,e)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!i&&i(d.ctx),n.target){if(n.hydrate){m=!0;const e=I(n.target);d.fragment&&d.fragment.l(e),e.forEach($)}else d.fragment&&d.fragment.c();n.intro&&he(t.$$.fragment),$e(t,n.target,n.anchor,n.customElement),m=!1,ae()}V(f)}class Ee{$destroy(){_e(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const xe=[];function Se(t,n=e){let r;const s=new Set;function o(e){if(i(t,e)&&(t=e,r)){const e=!xe.length;for(const e of s)e[1](),xe.push(e,t);if(e){for(let e=0;e<xe.length;e+=2)xe[e][0](xe[e+1]);xe.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(i,a=e){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||e),i(t),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const Te={};var Ae={owner:"LonelyJupiter",repo:"UPPTIME",sites:[{name:"la",url:"$LA"},{name:"jp",url:"$JP"},{name:"jpvir",url:"$JPVIR"},{name:"sg",url:"$SG"},{name:"hk1",url:"$HK1"},{name:"hk2",url:"$HK2"},{name:"cac",url:"$CAC",expectedStatusCodes:[403]},{name:"kr",url:"$KR"},{name:"eu1",url:"$EU1"},{name:"eu2",url:"$EU2"},{name:"eu3",url:"$EU3"}],assignees:["LonelyJupiter"],"status-website":{cname:"www.skrr.eu.org",name:"全球服务器在线状态",theme:"dark"},path:"https://www.skrr.eu.org",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentViewOnGitHub:"View and Subscribe on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceeded",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function Pe(e,t,n){const r=e.slice();return r[1]=t[n],r}function Ne(t){let n,r,s,o=Ae["status-website"]&&!Ae["status-website"].hideNavLogo&&function(t){let n,r;return{c(){n=w("img"),this.h()},l(e){n=C(e,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){P(n,"alt",""),c(n.src,r=Ae["status-website"].logoUrl)||P(n,"src",r),P(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}(),i=Ae["status-website"]&&!Ae["status-website"].hideNavTitle&&function(t){let n,r,s=Ae["status-website"].name+"";return{c(){n=w("div"),r=E(s)},l(e){n=C(e,"DIV",{});var t=I(n);r=H(t,s),t.forEach($)},m(e,t){v(e,n,t),g(n,r)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=x(),i&&i.c(),this.h()},l(e){n=C(e,"DIV",{});var t=I(n);r=C(t,"A",{href:!0,class:!0});var a=I(r);o&&o.l(a),s=U(a),i&&i.l(a),a.forEach($),t.forEach($),this.h()},h(){P(r,"href",Ae["status-website"].logoHref||Ae.path),P(r,"class","logo svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(e,t){Ae["status-website"]&&!Ae["status-website"].hideNavLogo&&o.p(e,t),Ae["status-website"]&&!Ae["status-website"].hideNavTitle&&i.p(e,t)},d(e){e&&$(n),o&&o.d(),i&&i.d()}}}function Ie(e){let t,n,r,s,o,i=e[1].title+"";return{c(){t=w("li"),n=w("a"),r=E(i),o=x(),this.h()},l(e){t=C(e,"LI",{});var s=I(t);n=C(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=I(n);r=H(a,i),a.forEach($),o=U(s),s.forEach($),this.h()},h(){P(n,"aria-current",s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0),P(n,"href",e[1].href.replace("$OWNER",Ae.owner).replace("$REPO",Ae.repo)),P(n,"target",e[1].target||"_self"),P(n,"class","svelte-a08hsz")},m(e,s){v(e,t,s),g(t,n),g(n,r),g(t,o)},p(e,t){1&t&&s!==(s=e[0]===("/"===e[1].href?void 0:e[1].href)?"page":void 0)&&P(n,"aria-current",s)},d(e){e&&$(t)}}}function Le(t){let n,r,s,o,i,a=Ae["status-website"]&&Ae["status-website"].logoUrl&&Ne(),c=Ae["status-website"]&&Ae["status-website"].navbar&&function(e){let t,n=Ae["status-website"].navbar,r=[];for(let t=0;t<n.length;t+=1)r[t]=Ie(Pe(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(1&s){let o;for(n=Ae["status-website"].navbar,o=0;o<n.length;o+=1){const i=Pe(e,n,o);r[o]?r[o].p(i,s):(r[o]=Ie(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),l=Ae["status-website"]&&Ae["status-website"].navbarGitHub&&!Ae["status-website"].navbar&&function(t){let n,r,s,o=Ae.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=E(o),this.h()},l(e){n=C(e,"LI",{});var t=I(n);r=C(t,"A",{href:!0,class:!0});var i=I(r);s=H(i,o),i.forEach($),t.forEach($),this.h()},h(){P(r,"href",`https://github.com/${Ae.owner}/${Ae.repo}`),P(r,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),g(r,s)},p:e,d(e){e&&$(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=x(),o=w("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(e){n=C(e,"NAV",{class:!0});var t=I(n);r=C(t,"DIV",{class:!0});var u=I(r);a&&a.l(u),s=U(u),o=C(u,"UL",{class:!0});var f=I(o);c&&c.l(f),i=U(f),l&&l.l(f),f.forEach($),u.forEach($),t.forEach($),this.h()},h(){P(o,"class","svelte-a08hsz"),P(r,"class","container svelte-a08hsz"),P(n,"class","svelte-a08hsz")},m(e,t){v(e,n,t),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(e,[t]){Ae["status-website"]&&Ae["status-website"].logoUrl&&a.p(e,t),Ae["status-website"]&&Ae["status-website"].navbar&&c.p(e,t),Ae["status-website"]&&Ae["status-website"].navbarGitHub&&!Ae["status-website"].navbar&&l.p(e,t)},i:e,o:e,d(e){e&&$(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function Re(e,t,n){let{segment:r}=t;return e.$$set=e=>{"segment"in e&&n(0,r=e.segment)},[r]}class ke extends Ee{constructor(e){super(),ye(this,e,Re,Le,i,{segment:0})}}var Ce={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Oe(e){return e.replace(RegExp("^"+(e.match(/^(\t| )+/)||"")[0],"gm"),"")}function He(e){return(e+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ue(e,t){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=t||{},f=0;function d(e){var t=Ce[e[1]||""],n=c[c.length-1]==e;return t?t[1]?(n?c.pop():c.push(e),t[0|n]):t[0]:e}function h(){for(var e="";c.length;)e+=d(c[c.length-1]);return e}for(e=e.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(e,t,n){return u[t.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(e);)r=e.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Oe(He(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Ue(Oe(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+He(s[8])+'" alt="'+He(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+He(s[11]||u[r.toLowerCase()])+'">'),n=h()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Ue(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+He(s[16])+"</code>":(s[17]||s[1])&&(n=d(s[17]||"--"))),l+=r,l+=n;return(l+e.substring(f)+h()).replace(/^\n+|\n+$/g,"")}function je(e,t,n){const r=e.slice();return r[3]=t[n],r}function Me(e,t,n){const r=e.slice();return r[3]=t[n],r}function De(e,t,n){const r=e.slice();return r[8]=t[n],r}function Ge(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",`${Ae.path}/themes/${(Ae["status-website"]||{}).theme||"light"}.css`)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function qe(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0}),this.h()},h(){P(n,"rel","stylesheet"),P(n,"href",(Ae["status-website"]||{}).themeUrl)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Be(t){let n,r;return{c(){n=w("script"),this.h()},l(e){n=C(e,"SCRIPT",{src:!0}),I(n).forEach($),this.h()},h(){c(n.src,r=t[8].src)||P(n,"src",r),n.async=!!t[8].async,n.defer=!!t[8].async},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function ze(t){let n;return{c(){n=w("link"),this.h()},l(e){n=C(e,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){P(n,"rel",t[3].rel),P(n,"href",t[3].href),P(n,"media",t[3].media)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Je(t){let n;return{c(){n=w("meta"),this.h()},l(e){n=C(e,"META",{name:!0,content:!0}),this.h()},h(){P(n,"name",t[3].name),P(n,"content",t[3].content)},m(e,t){v(e,n,t)},p:e,d(e){e&&$(n)}}}function Ke(t){let n,r,s,o,i,a,c,u,f,d,h,m,p,b,y,E,T,A,N=Ue(Ae.i18n.footer.replace(/\$REPO/,`https://github.com/${Ae.owner}/${Ae.repo}`))+"",L=(Ae["status-website"]||{}).customHeadHtml&&function(t){let n,r,s=(Ae["status-website"]||{}).customHeadHtml+"";return{c(){n=new K(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}();let R=((Ae["status-website"]||{}).themeUrl?qe:Ge)(t),k=(Ae["status-website"]||{}).scripts&&function(e){let t,n=(Ae["status-website"]||{}).scripts,r=[];for(let t=0;t<n.length;t+=1)r[t]=Be(De(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Ae["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=De(e,n,o);r[o]?r[o].p(i,s):(r[o]=Be(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),O=(Ae["status-website"]||{}).links&&function(e){let t,n=(Ae["status-website"]||{}).links,r=[];for(let t=0;t<n.length;t+=1)r[t]=ze(Me(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Ae["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Me(e,n,o);r[o]?r[o].p(i,s):(r[o]=ze(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),H=(Ae["status-website"]||{}).metaTags&&function(e){let t,n=(Ae["status-website"]||{}).metaTags,r=[];for(let t=0;t<n.length;t+=1)r[t]=Je(je(e,n,t));return{c(){for(let e=0;e<r.length;e+=1)r[e].c();t=S()},l(e){for(let t=0;t<r.length;t+=1)r[t].l(e);t=S()},m(e,n){for(let t=0;t<r.length;t+=1)r[t].m(e,n);v(e,t,n)},p(e,s){if(0&s){let o;for(n=(Ae["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=je(e,n,o);r[o]?r[o].p(i,s):(r[o]=Je(i),r[o].c(),r[o].m(t.parentNode,t))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(e){_(r,e),e&&$(t)}}}(t),j=Ae["status-website"].css&&function(t){let n,r,s=`<style>${Ae["status-website"].css}</style>`;return{c(){n=new K(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}(),D=Ae["status-website"].js&&function(t){let n,r,s=`<script>${Ae["status-website"].js}<\/script>`;return{c(){n=new K(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}(),G=(Ae["status-website"]||{}).customBodyHtml&&function(t){let n,r,s=(Ae["status-website"]||{}).customBodyHtml+"";return{c(){n=new K(!1),r=S(),this.h()},l(e){n=M(e,!1),r=S(),this.h()},h(){n.a=r},m(e,t){n.m(s,e,t),v(e,r,t)},p:e,d(e){e&&$(r),e&&n.d()}}}();m=new ke({props:{segment:t[0]}});const q=t[2].default,B=function(e,t,n,r){if(e){const s=l(e,t,n,r);return e[0](s)}}(q,t,t[1],null);return{c(){L&&L.c(),n=S(),R.c(),r=w("link"),s=w("link"),o=w("link"),k&&k.c(),i=S(),O&&O.c(),a=S(),H&&H.c(),c=S(),j&&j.c(),u=S(),D&&D.c(),f=S(),d=x(),G&&G.c(),h=x(),be(m.$$.fragment),p=x(),b=w("main"),B&&B.c(),y=x(),E=w("footer"),T=w("p"),this.h()},l(e){const t=J('[data-svelte="svelte-ri9y7q"]',document.head);L&&L.l(t),n=S(),R.l(t),r=C(t,"LINK",{rel:!0,href:!0}),s=C(t,"LINK",{rel:!0,type:!0,href:!0}),o=C(t,"LINK",{rel:!0,type:!0,href:!0}),k&&k.l(t),i=S(),O&&O.l(t),a=S(),H&&H.l(t),c=S(),j&&j.l(t),u=S(),D&&D.l(t),f=S(),t.forEach($),d=U(e),G&&G.l(e),h=U(e),ve(m.$$.fragment,e),p=U(e),b=C(e,"MAIN",{class:!0});var l=I(b);B&&B.l(l),l.forEach($),y=U(e),E=C(e,"FOOTER",{class:!0});var g=I(E);T=C(g,"P",{}),I(T).forEach($),g.forEach($),this.h()},h(){P(r,"rel","stylesheet"),P(r,"href",`${Ae.path}/global.css`),P(s,"rel","icon"),P(s,"type","image/svg"),P(s,"href",(Ae["status-website"]||{}).faviconSvg||(Ae["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),P(o,"rel","icon"),P(o,"type","image/png"),P(o,"href",(Ae["status-website"]||{}).favicon||"/logo-192.png"),P(b,"class","container"),P(E,"class","svelte-jbr799")},m(e,t){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),k&&k.m(document.head,null),g(document.head,i),O&&O.m(document.head,null),g(document.head,a),H&&H.m(document.head,null),g(document.head,c),j&&j.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),v(e,d,t),G&&G.m(e,t),v(e,h,t),$e(m,e,t),v(e,p,t),v(e,b,t),B&&B.m(b,null),v(e,y,t),v(e,E,t),g(E,T),T.innerHTML=N,A=!0},p(e,[t]){(Ae["status-website"]||{}).customHeadHtml&&L.p(e,t),R.p(e,t),(Ae["status-website"]||{}).scripts&&k.p(e,t),(Ae["status-website"]||{}).links&&O.p(e,t),(Ae["status-website"]||{}).metaTags&&H.p(e,t),Ae["status-website"].css&&j.p(e,t),Ae["status-website"].js&&D.p(e,t),(Ae["status-website"]||{}).customBodyHtml&&G.p(e,t);const n={};1&t&&(n.segment=e[0]),m.$set(n),B&&B.p&&(!A||2&t)&&function(e,t,n,r,s,o){if(s){const i=l(t,n,r,o);e.p(i,s)}}(B,q,e,e[1],A?function(e,t,n,r){if(e[2]&&r){const s=e[2](r(n));if(void 0===t.dirty)return s;if("object"==typeof s){const e=[],n=Math.max(t.dirty.length,s.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|s[r];return e}return t.dirty|s}return t.dirty}(q,e[1],t,null):function(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}(e[1]),null)},i(e){A||(he(m.$$.fragment,e),he(B,e),A=!0)},o(e){me(m.$$.fragment,e),me(B,e),A=!1},d(e){L&&L.d(e),$(n),R.d(e),$(r),$(s),$(o),k&&k.d(e),$(i),O&&O.d(e),$(a),H&&H.d(e),$(c),j&&j.d(e),$(u),D&&D.d(e),$(f),e&&$(d),G&&G.d(e),e&&$(h),_e(m,e),e&&$(p),e&&$(b),B&&B.d(e),e&&$(y),e&&$(E)}}}function Ve(e,t,n){let{$$slots:r={},$$scope:s}=t,{segment:o}=t;return e.$$set=e=>{"segment"in e&&n(0,o=e.segment),"$$scope"in e&&n(1,s=e.$$scope)},[o,s,r]}class We extends Ee{constructor(e){super(),ye(this,e,Ve,Ke,i,{segment:0})}}function Fe(e){let t,n,r=e[1].stack+"";return{c(){t=w("pre"),n=E(r)},l(e){t=C(e,"PRE",{});var s=I(t);n=H(s,r),s.forEach($)},m(e,r){v(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&D(n,r)},d(e){e&&$(t)}}}function Ye(t){let n,r,s,o,i,a,c,l,u,f=t[1].message+"";document.title=n=t[0];let d=t[2]&&t[1].stack&&Fe(t);return{c(){r=x(),s=w("h1"),o=E(t[0]),i=x(),a=w("p"),c=E(f),l=x(),d&&d.c(),u=S(),this.h()},l(e){J('[data-svelte="svelte-1moakz"]',document.head).forEach($),r=U(e),s=C(e,"H1",{class:!0});var n=I(s);o=H(n,t[0]),n.forEach($),i=U(e),a=C(e,"P",{class:!0});var h=I(a);c=H(h,f),h.forEach($),l=U(e),d&&d.l(e),u=S(),this.h()},h(){P(s,"class","svelte-17w3omn"),P(a,"class","svelte-17w3omn")},m(e,t){v(e,r,t),v(e,s,t),g(s,o),v(e,i,t),v(e,a,t),g(a,c),v(e,l,t),d&&d.m(e,t),v(e,u,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),1&t&&D(o,e[0]),2&t&&f!==(f=e[1].message+"")&&D(c,f),e[2]&&e[1].stack?d?d.p(e,t):(d=Fe(e),d.c(),d.m(u.parentNode,u)):d&&(d.d(1),d=null)},i:e,o:e,d(e){e&&$(r),e&&$(s),e&&$(i),e&&$(a),e&&$(l),d&&d.d(e),e&&$(u)}}}function Xe(e,t,n){let{status:r}=t,{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,r=e.status),"error"in e&&n(1,s=e.error)},[r,s,false]}class Qe extends Ee{constructor(e){super(),ye(this,e,Xe,Ye,i,{status:0,error:1})}}function Ze(e){let n,r,s;const o=[e[4].props];var i=e[4].component;function a(e){let n={};for(let e=0;e<o.length;e+=1)n=t(n,o[e]);return{props:n}}return i&&(n=new i(a())),{c(){n&&be(n.$$.fragment),r=S()},l(e){n&&ve(n.$$.fragment,e),r=S()},m(e,t){n&&$e(n,e,t),v(e,r,t),s=!0},p(e,t){const s=16&t?pe(o,[ge(e[4].props)]):{};if(i!==(i=e[4].component)){if(n){fe();const e=n;me(e.$$.fragment,1,0,(()=>{_e(e,1)})),de()}i?(n=new i(a()),be(n.$$.fragment),he(n.$$.fragment,1),$e(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(e){s||(n&&he(n.$$.fragment,e),s=!0)},o(e){n&&me(n.$$.fragment,e),s=!1},d(e){e&&$(r),n&&_e(n,e)}}}function et(e){let t,n;return t=new Qe({props:{error:e[0],status:e[1]}}),{c(){be(t.$$.fragment)},l(e){ve(t.$$.fragment,e)},m(e,r){$e(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(he(t.$$.fragment,e),n=!0)},o(e){me(t.$$.fragment,e),n=!1},d(e){_e(t,e)}}}function tt(e){let t,n,r,s;const o=[et,Ze],i=[];function a(e,t){return e[0]?0:1}return t=a(e),n=i[t]=o[t](e),{c(){n.c(),r=S()},l(e){n.l(e),r=S()},m(e,n){i[t].m(e,n),v(e,r,n),s=!0},p(e,s){let c=t;t=a(e),t===c?i[t].p(e,s):(fe(),me(i[c],1,1,(()=>{i[c]=null})),de(),n=i[t],n?n.p(e,s):(n=i[t]=o[t](e),n.c()),he(n,1),n.m(r.parentNode,r))},i(e){s||(he(n),s=!0)},o(e){me(n),s=!1},d(e){i[t].d(e),e&&$(r)}}}function nt(e){let n,r;const s=[{segment:e[2][0]},e[3].props];let o={$$slots:{default:[tt]},$$scope:{ctx:e}};for(let e=0;e<s.length;e+=1)o=t(o,s[e]);return n=new We({props:o}),{c(){be(n.$$.fragment)},l(e){ve(n.$$.fragment,e)},m(e,t){$e(n,e,t),r=!0},p(e,[t]){const r=12&t?pe(s,[4&t&&{segment:e[2][0]},8&t&&ge(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(he(n.$$.fragment,e),r=!0)},o(e){me(n.$$.fragment,e),r=!1},d(e){_e(n,e)}}}function rt(e,t,n){let{stores:r}=t,{error:s}=t,{status:o}=t,{segments:i}=t,{level0:a}=t,{level1:c=null}=t,{notify:l}=t;var u,f;return Y(l),u=Te,f=r,W().$$.context.set(u,f),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,s=e.error),"status"in e&&n(1,o=e.status),"segments"in e&&n(2,i=e.segments),"level0"in e&&n(3,a=e.level0),"level1"in e&&n(4,c=e.level1),"notify"in e&&n(6,l=e.notify)},[s,o,i,a,c,r,l]}class st extends Ee{constructor(e){super(),ye(this,e,rt,nt,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ot=[],it=[{js:()=>Promise.all([import("./index.74ab13d5.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.a2a4d89c.js"),__inject_styles(["client-d6959ee0.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.838f3469.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./_number_.991b87be.js"),__inject_styles(["client-d6959ee0.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(e){return e[0]}))},{js:()=>Promise.all([import("./error.0f6479ba.js"),__inject_styles(["client-d6959ee0.css","error-64ad0d96.css"])]).then((function(e){return e[0]}))}],at=(ct=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:e=>({number:ct(e[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:e=>({number:ct(e[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ct;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function lt(e,t,n,r){return new(n||(n=Promise))((function(s,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function a(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,a)}c((r=r.apply(e,t||[])).next())}))}function ut(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}let ft,dt=1;const ht="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},mt={};let pt,gt;function bt(e){const t=Object.create(null);return e.length?(e=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(e).entries()]:e.slice(1).split("&").map((e=>{const[,t,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));return[t,n]})))(e).reduce(((e,[t,n])=>("string"==typeof e[t]&&(e[t]=[e[t]]),"object"==typeof e[t]?e[t].push(n):e[t]=n,e)),t):t}function vt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(pt))return null;let t=e.pathname.slice(pt.length);if(""===t&&(t="/"),!ot.some((e=>e.test(t))))for(let n=0;n<at.length;n+=1){const r=at[n],s=r.pattern.exec(t);if(s){const n=bt(e.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:t,query:n,params:i};return{href:e.href,route:r,match:s,page:a}}}}function $t(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;if(e.defaultPrevented)return;const t=ut(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=vt(s);if(o){yt(o,null,t.hasAttribute("sapper:noscroll"),s.hash),e.preventDefault(),ht.pushState({id:ft},"",s.href)}}function _t(){return{x:pageXOffset,y:pageYOffset}}function wt(e){if(mt[ft]=_t(),e.state){const t=vt(new URL(location.href));t?yt(t,e.state.id):location.href=location.href}else!function(e){dt=e}(dt+1),function(e){ft=e}(dt),ht.replaceState({id:ft},"",location.href)}function yt(e,t,n,r){return lt(this,void 0,void 0,(function*(){const s=!!t;if(s)ft=t;else{const e=_t();mt[ft]=e,ft=t=++dt,mt[ft]=n?e:{x:0,y:0}}if(yield gt(e),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let e,n=mt[t];r&&(e=document.getElementById(r.slice(1)),e&&(n={x:0,y:e.getBoundingClientRect().top+scrollY})),mt[ft]=n,n&&(s||e)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Et(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}let xt,St=null;function Tt(e){const t=ut(e.target);t&&t.hasAttribute("sapper:prefetch")&&function(e){const t=vt(new URL(e,Et(document)));if(t)St&&e===St.href||(St={href:e,promise:Bt(t)}),St.promise}(t.href)}function At(e){clearTimeout(xt),xt=setTimeout((()=>{Tt(e)}),20)}function Pt(e,t={noscroll:!1,replaceState:!1}){const n=vt(new URL(e,Et(document)));if(n){const r=yt(n,null,t.noscroll);return ht[t.replaceState?"replaceState":"pushState"]({id:ft},"",e),r}return location.href=e,new Promise((()=>{}))}const Nt="undefined"!=typeof __SAPPER__&&__SAPPER__;let It,Lt,Rt,kt=!1,Ct=[],Ot="{}";const Ht={page:function(e){const t=Se(e);let n=!0;return{notify:function(){n=!0,t.update((e=>e))},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe((t=>{(void 0===r||n&&t!==r)&&e(r=t)}))}}}({}),preloading:Se(null),session:Se(Nt&&Nt.session)};let Ut,jt,Mt;function Dt(e,t){const{error:n}=e;return Object.assign({error:n},t)}function Gt(e){return lt(this,void 0,void 0,(function*(){It&&Ht.preloading.set(!0);const t=function(e){return St&&St.href===e.href?St.promise:Bt(e)}(e),n=Lt={},r=yield t,{redirect:s}=r;if(n===Lt)if(s)yield Pt(s.location,{replaceState:!0});else{const{props:t,branch:n}=r;yield qt(n,t,Dt(t,e.page))}}))}function qt(e,t,n){return lt(this,void 0,void 0,(function*(){Ht.page.set(n),Ht.preloading.set(!1),It?It.$set(t):(t.stores={page:{subscribe:Ht.page.subscribe},preloading:{subscribe:Ht.preloading.subscribe},session:Ht.session},t.level0={props:yield Rt},t.notify=Ht.page.notify,It=new st({target:Mt,props:t,hydrate:!0})),Ct=e,Ot=JSON.stringify(n.query),kt=!0,jt=!1}))}function Bt(e){return lt(this,void 0,void 0,(function*(){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(s&&(s.statusCode!==e||s.location!==t))throw new Error("Conflicting redirects");s={statusCode:e,location:t}},error:(e,t)=>{o.error="string"==typeof t?new Error(t):t,o.status=e}};if(!Rt){const e=()=>({});Rt=Nt.preloaded[0]||e.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Ut)}let a,c=1;try{const s=JSON.stringify(n.query),l=t.pattern.exec(n.path);let u=!1;a=yield Promise.all(t.parts.map(((t,a)=>lt(this,void 0,void 0,(function*(){const f=r[a];if(function(e,t,n,r){if(r!==Ot)return!0;const s=Ct[e];return!!s&&(t!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!t)return{segment:f};const d=c++;let h;if(jt||u||!Ct[a]||Ct[a].part!==t.i){u=!1;const{default:r,preload:s}=yield it[t.i].js();let o;o=kt||!Nt.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},Ut):{}:Nt.preloaded[a+1],h={component:r,props:o,segment:f,match:l,part:t.i}}else h=Ct[a];return o[`level${d}`]=h})))))}catch(e){o.error=e,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var zt,Jt,Kt;Ht.session.subscribe((e=>lt(void 0,void 0,void 0,(function*(){if(Ut=e,!kt)return;jt=!0;const t=vt(new URL(location.href)),n=Lt={},{redirect:r,props:s,branch:o}=yield Bt(t);n===Lt&&(r?yield Pt(r.location,{replaceState:!0}):yield qt(o,s,Dt(s,t.page)))})))),zt={target:document.querySelector("#sapper")},Jt=zt.target,Mt=Jt,Kt=Nt.baseUrl,pt=Kt,gt=Gt,"scrollRestoration"in ht&&(ht.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ht.scrollRestoration="auto"})),addEventListener("load",(()=>{ht.scrollRestoration="manual"})),addEventListener("click",$t),addEventListener("popstate",wt),addEventListener("touchstart",Tt),addEventListener("mousemove",At),Nt.error?Promise.resolve().then((()=>function(){const{host:e,pathname:t,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Nt;Rt||(Rt=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:Rt},level1:{props:{status:o,error:i},component:Qe},segments:s},c=bt(n);qt([],a,{host:e,path:t,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:e,href:t}=location;ht.replaceState({id:dt},"",t);const n=vt(new URL(location.href));if(n)return yt(n,dt,!0,e)}));export{D as A,T as B,s as C,Z as D,M as E,c as F,f as G,K as H,q as I,J,Ue as K,y as L,O as M,Pt as N,G as O,A as P,t as Q,N as R,Ee as S,pe as T,Y as U,X as V,u as W,ge as X,se as Y,z as Z,x as a,C as b,U as c,I as d,w as e,$ as f,P as g,v as h,ye as i,fe as j,de as k,he as l,E as m,H as n,F as o,g as p,e as q,Ae as r,i as s,me as t,S as u,_ as v,be as w,ve as x,$e as y,_e as z};

import __inject_styles from './inject_styles.803b7e80.js';