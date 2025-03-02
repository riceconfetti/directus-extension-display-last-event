import{defineInterface as t}from"@directus/extensions-sdk";import{ref as e,openBlock as r,createElementBlock as n,toDisplayString as s}from"vue";"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function i(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var u={exports:{}},a=i(u.exports=function(){var t=1e3,e=6e4,r=36e5,n="millisecond",s="second",i="minute",u="hour",a="day",o="week",c="month",f="quarter",d="year",h="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},p=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},v={s:p,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+p(n,2,"0")+":"+p(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,c),i=r-s<0,u=e.clone().add(n+(i?-1:1),c);return+(-(n+(r-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:c,y:d,w:o,d:a,D:h,h:u,m:i,s:s,ms:n,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},M="en",g={};g[M]=m;var D="$isDayjsObject",w=function(t){return t instanceof _||!(!t||!t[D])},S=function t(e,r,n){var s;if(!e)return M;if("string"==typeof e){var i=e.toLowerCase();g[i]&&(s=i),r&&(g[i]=r,s=i);var u=e.split("-");if(!s&&u.length>1)return t(u[0])}else{var a=e.name;g[a]=e,s=a}return!n&&s&&(M=s),s||!n&&M},b=function(t,e){if(w(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new _(r)},O=v;O.l=S,O.i=w,O.w=function(t,e){return b(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function m(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[D]=!0}var p=m.prototype;return p.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match($);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},p.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},p.$utils=function(){return O},p.isValid=function(){return!(this.$d.toString()===l)},p.isSame=function(t,e){var r=b(t);return this.startOf(e)<=r&&r<=this.endOf(e)},p.isAfter=function(t,e){return b(t)<this.startOf(e)},p.isBefore=function(t,e){return this.endOf(e)<b(t)},p.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},p.unix=function(){return Math.floor(this.valueOf()/1e3)},p.valueOf=function(){return this.$d.getTime()},p.startOf=function(t,e){var r=this,n=!!O.u(e)||e,f=O.p(t),l=function(t,e){var s=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return n?s:s.endOf(a)},$=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},y=this.$W,m=this.$M,p=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case d:return n?l(1,0):l(31,11);case c:return n?l(1,m):l(0,m+1);case o:var M=this.$locale().weekStart||0,g=(y<M?y+7:y)-M;return l(n?p-g:p+(6-g),m);case a:case h:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case i:return $(v+"Seconds",2);case s:return $(v+"Milliseconds",3);default:return this.clone()}},p.endOf=function(t){return this.startOf(t,!1)},p.$set=function(t,e){var r,o=O.p(t),f="set"+(this.$u?"UTC":""),l=(r={},r[a]=f+"Date",r[h]=f+"Date",r[c]=f+"Month",r[d]=f+"FullYear",r[u]=f+"Hours",r[i]=f+"Minutes",r[s]=f+"Seconds",r[n]=f+"Milliseconds",r)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===d){var y=this.clone().set(h,1);y.$d[l]($),y.init(),this.$d=y.set(h,Math.min(this.$D,y.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},p.set=function(t,e){return this.clone().$set(t,e)},p.get=function(t){return this[O.p(t)]()},p.add=function(n,f){var h,l=this;n=Number(n);var $=O.p(f),y=function(t){var e=b(l);return O.w(e.date(e.date()+Math.round(t*n)),l)};if($===c)return this.set(c,this.$M+n);if($===d)return this.set(d,this.$y+n);if($===a)return y(1);if($===o)return y(7);var m=(h={},h[i]=e,h[u]=r,h[s]=t,h)[$]||1,p=this.$d.getTime()+n*m;return O.w(p,this)},p.subtract=function(t,e){return this.add(-1*t,e)},p.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||l;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=O.z(this),i=this.$H,u=this.$m,a=this.$M,o=r.weekdays,c=r.months,f=r.meridiem,d=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},h=function(t){return O.s(i%12||12,t,"0")},$=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace(y,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return a+1;case"MM":return O.s(a+1,2,"0");case"MMM":return d(r.monthsShort,a,c,3);case"MMMM":return d(c,a);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(r.weekdaysMin,e.$W,o,2);case"ddd":return d(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return O.s(i,2,"0");case"h":return h(1);case"hh":return h(2);case"a":return $(i,u,!0);case"A":return $(i,u,!1);case"m":return String(u);case"mm":return O.s(u,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},p.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},p.diff=function(n,h,l){var $,y=this,m=O.p(h),p=b(n),v=(p.utcOffset()-this.utcOffset())*e,M=this-p,g=function(){return O.m(y,p)};switch(m){case d:$=g()/12;break;case c:$=g();break;case f:$=g()/3;break;case o:$=(M-v)/6048e5;break;case a:$=(M-v)/864e5;break;case u:$=M/r;break;case i:$=M/e;break;case s:$=M/t;break;default:$=M}return l?$:O.a($)},p.daysInMonth=function(){return this.endOf(c).$D},p.$locale=function(){return g[this.$L]},p.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},p.clone=function(){return O.w(this.$d,this)},p.toDate=function(){return new Date(this.valueOf())},p.toJSON=function(){return this.isValid()?this.toISOString():null},p.toISOString=function(){return this.$d.toISOString()},p.toString=function(){return this.$d.toUTCString()},m}(),T=_.prototype;return b.prototype=T,[["$ms",n],["$s",s],["$m",i],["$H",u],["$W",a],["$M",c],["$y",d],["$D",h]].forEach((function(t){T[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),b.extend=function(t,e){return t.$i||(t(e,_,b),t.$i=!0),b},b.locale=S,b.isDayjs=w,b.unix=function(t){return b(1e3*t)},b.en=g[M],b.Ls=g,b.p={},b}()),o={exports:{}},c=i(o.exports=function(t,e,r){t=t||{};var n=e.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function i(t,e,r,s){return n.fromToBase(t,e,r,s)}r.en.relativeTime=s,n.fromToBase=function(e,n,i,u,a){for(var o,c,f,d=i.$locale().relativeTime||s,h=t.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],l=h.length,$=0;$<l;$+=1){var y=h[$];y.d&&(o=u?r(e).diff(i,y.d,!0):i.diff(e,y.d,!0));var m=(t.rounding||Math.round)(Math.abs(o));if(f=o>0,m<=y.r||!y.r){m<=1&&$>0&&(y=h[$-1]);var p=d[y.l];a&&(m=a(""+m)),c="string"==typeof p?p.replace("%d",m):p(m,n,y.l,f);break}}if(n)return c;var v=f?d.future:d.past;return"function"==typeof v?v(c):v.replace("%s",c)},n.to=function(t,e){return i(t,e,this,!0)},n.from=function(t,e){return i(t,e,this)};var u=function(t){return t.$u?r.utc():r()};n.toNow=function(t){return this.to(u(this),t)},n.fromNow=function(t){return this.from(u(this),t)}}),f=(t,e)=>{const r=t.__vccOpts||t;for(const[t,n]of e)r[t]=n;return r};a.extend(c);var d=t({id:"dailydrip-directus-extension-display-last-event",name:"Display Last Event",icon:"box",description:"Displays days since last occuring event",component:f({props:{value:{type:String,default:null}},setup(){e(""),this.value.length>0&&this.value}},[["render",function(t,e,i,u,a,o){return r(),n("div",null,s(t.lastEvent),1)}],["__file","display.vue"]]),options:null,types:["alias"],localTypes:["m2m"],fields:()=>["*"]});export{d as default};
