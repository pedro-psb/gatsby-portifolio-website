"use strict";(self.webpackChunkmantine_gatsby_blog_template=self.webpackChunkmantine_gatsby_blog_template||[]).push([[223],{8223:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return v},swapPlaceholderImage:function(){return m}});var o,r=n(5861),a=n(4687),i=n.n(a),c=n(3723),l=n(7294),u=n(7762),s=(n(2369),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,g=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function b(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function f(e,t,n,o,r,a){var i=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),l=n.has(t);function u(e){var t=this;this.removeEventListener("load",u);var n=e.currentTarget,o=new Image;o.src=n.currentSrc,o.decode?o.decode().then((function(){b(t,c),null==r||r({wasCached:l})})).catch((function(e){b(t,c),null==a||a(e)})):(b(this,c),null==r||r({wasCached:l}))}return i.addEventListener("load",u),null==o||o({wasCached:l}),Array.from(i.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),i.complete&&u.call(i,{currentTarget:i}),function(){i&&i.removeEventListener("load",u)}}function m(e,t,a,l,u,g,b){if(!(0,c.h)()){var m,v,h,p=(j=function(){m=f(e,t,a,u,g,b)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=s.get(e.target))||t(),s.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return s.set(e,j),o.observe(e),function(){o&&e&&(s.delete(e),o.unobserve(e))}}):function(){return j(),function(){}}),w=p(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(v=l.objectFit)?v:"cover",e.dataset.objectPosition=""+(null!=(h=l.objectPosition)?h:"50% 50%"),(y=(0,r.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(231).then(n.t.bind(n,7231,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})(e)),function(){m&&m(),w()}}var y,j;return f(e,t,a,u,g,b)}function v(e){var t=e.image,n=e.loading,o=void 0===n?"lazy":n,r=e.isLoading,a=e.isLoaded,i=e.imgClassName,s=e.imgStyle,d=void 0===s?{}:s,b=e.objectPosition,f=e.backgroundColor,m=e.objectFit,v=void 0===m?"cover":m,h=(0,c._)(e,g),p=t.width,w=t.height,y=t.layout,j=t.images,k=t.placeholder,C=t.backgroundColor;return d=(0,c.a)({objectFit:v,objectPosition:b,backgroundColor:f},d),(0,u.renderToStaticMarkup)(l.createElement(c.L,{layout:y,width:p,height:w},l.createElement(c.P,(0,c.a)({},(0,c.g)(k,a,y,p,w,C,v,b))),l.createElement(c.M,(0,c.a)({},h,{width:p,height:w,className:i},(0,c.b)(r,a,j,o,d)))))}}}]);
//# sourceMappingURL=223-fbef1e3b2fedf518a31b.js.map