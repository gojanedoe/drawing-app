(this["webpackJsonpdrawing-app"]=this["webpackJsonpdrawing-app"]||[]).push([[0],{40:function(e,t,r){},41:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);r(35);var n=r(14),c=r(0),a=r.n(c),i=r(11),s=r.n(i),o=(r(40),r(4)),l=r(5),u=(r(41),r.p+"static/media/menu-icon.47389104.svg"),j=r(1),d=function(){return Object(j.jsxs)("header",{children:[Object(j.jsx)(n.b,{className:"site-title",to:"/",children:"Draw This!"}),Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{className:"menuButton",children:Object(j.jsx)("img",{src:u,alt:"Open menu"})})})]})},b=function(e){var t=e.selectedCategory,r=e.setSelectedCategory,n=Object(l.e)(),c=!1,a=function(e){console.log(e.target.value),r(e.target.value)};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log("selected category: ",t),""!==t&&(c=!0),c?n.push("/app"):alert("Please select a subject category.")},children:[Object(j.jsxs)("label",{className:"btn btn-light",children:[Object(j.jsx)("input",{type:"radio",value:"Featured_pictures_of_people",name:"category",checked:"Featured_pictures_of_people"===t,onChange:a}),Object(j.jsx)("span",{children:"People"})]}),Object(j.jsxs)("label",{className:"btn btn-light",children:[Object(j.jsx)("input",{type:"radio",value:"Featured_pictures_of_architecture",name:"category",checked:"Featured_pictures_of_architecture"===t,onChange:a}),Object(j.jsx)("span",{children:"Architecture"})]}),Object(j.jsxs)("label",{className:"btn btn-light",children:[Object(j.jsx)("input",{type:"radio",value:"Featured_pictures_of_landscapes",name:"category",checked:"Featured_pictures_of_landscapes"===t,onChange:a}),Object(j.jsx)("span",{children:"Landscapes"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Start"})]})},h=function(e){var t=e.selectedCategory,r=e.setSelectedCategory;return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("main",{children:[Object(j.jsx)("h1",{children:"Welcome"}),Object(j.jsx)("p",{children:"Draw This! is an image reference generator for artists."}),Object(j.jsx)("p",{children:'Choose the subject you\'d like to draw below, and click "Start" to begin.'}),Object(j.jsx)(b,{selectedCategory:t,setSelectedCategory:r})]})})},g=function(e){var t=e.currentPhoto;return Object(j.jsx)("div",{className:"photo-container",children:Object(j.jsx)("img",{src:t.imageUrl,className:"photo",alt:t.imageDesc})})},p=r.p+"static/media/info.fe92df14.svg",m=r(20),O=r(57),f=function(e){var t=e.photos,r=e.currentIndex,n=Object(c.useRef)(null),a=Object(j.jsx)(m.a,{style:{color:"black"},children:Object(j.jsxs)(m.a.Body,{ref:n,children:[Object(j.jsx)("span",{className:"credit-title",children:"Credit: "}),t[r].attribution,Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"credit-title",children:"License: "}),Object(j.jsx)("a",{href:t[r].licenseUrl,target:"_blank",rel:"noreferrer",children:t[r].license}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"credit-title",children:"Source: "}),Object(j.jsx)("a",{href:t[r].wikiUrl,target:"_blank",rel:"noreferrer",children:"Wikimedia Commons"})]})});return Object(j.jsx)(O.a,{trigger:"click",placement:"top",overlay:a,children:Object(j.jsx)("button",{className:"infoButton",children:Object(j.jsx)("img",{src:p,alt:"The letter 'i' in a circle","aria-label":"Open image information"})})})},x=function(e){var t=e.timerIsRunning,r=e.timerSeconds,n=e.setTimerSeconds,a=e.handleNextPhoto,i=e.resetTimer;return Object(c.useEffect)((function(){var e=null;return t&&0!==r?e=setInterval((function(){n((function(e){return e-1}))}),1e3):t&&r<=0?(a("Next"),i()):t||0===r||clearInterval(e),function(){return clearInterval(e)}}),[t,r]),Object(j.jsxs)("div",{className:"Timer",children:[":",r]})},v=r.p+"static/media/right-arrow.94137a21.svg",y=r.p+"static/media/left-arrow.a99bd7b1.svg",N=r.p+"static/media/play-icon.5529aa1c.svg",w=r.p+"static/media/pause-icon.61e888f4.svg",C=function(e){var t=e.handleNextPhoto,r=e.photos,n=e.currentIndex,a=Object(c.useState)(!1),i=Object(o.a)(a,2),s=i[0],l=i[1],u=Object(c.useState)(15),d=Object(o.a)(u,2),b=d[0],h=d[1],g=function(){l((function(e){return!e}))},p=function(){h(15)};return Object(j.jsxs)("footer",{children:[Object(j.jsx)(f,{photos:r,currentIndex:n}),Object(j.jsxs)("div",{className:"button-container vertical",children:[Object(j.jsx)(x,{timerIsRunning:s,setTimerIsRunning:l,timerSeconds:b,setTimerSeconds:h,initialTime:15,handleNextPhoto:t,resetTimer:p}),Object(j.jsxs)("div",{className:"button-container",children:[Object(j.jsx)("button",{className:"arrowButton",children:Object(j.jsx)("img",{src:y,alt:"Left arrow","aria-label":"Go to previous image",onClick:function(){t("Back"),p()}})}),Object(j.jsx)("button",{className:"playButton",children:s?Object(j.jsx)("img",{src:w,alt:"Pause icon","aria-label":"Pause timer",onClick:g}):Object(j.jsx)("img",{src:N,alt:"Play icon","aria-label":"Start timer",onClick:g})}),Object(j.jsx)("button",{className:"arrowButton",children:Object(j.jsx)("img",{src:v,alt:"Right arrow","aria-label":"Go to next image",onClick:function(){t("Next"),p()}})})]})]})]})};function k(e,t,r){return fetch(e).then((function(e){return e.json()})).then((function(e){console.log(e);var n=Object.values(e.query.pages).map((function(e){var t=e.imageinfo[0],r=t.extmetadata,n=null;r.hasOwnProperty("ImageDescription")&&(n=r.ImageDescription.value.replace(/<[^>]*>?/gm,""));var c="Not available";r.hasOwnProperty("Author")?(console.log("Has Author prop"),c=r.Author.value):r.hasOwnProperty("Artist")?(console.log("Has Artist prop"),c=r.Artist.value):r.hasOwnProperty("Attribution")&&(console.log("Has Attribution prop"),c=r.Attribution.value),c=c.replace(/<[^>]*>?/gm,"");var a=null;r.hasOwnProperty("Credit")&&(a=(a=r.Credit.value).replace(/<[^>]*>?/gm,""));var i=null;return r.hasOwnProperty("Copyrighted")&&"True"===r.Copyrighted.value?i=!0:(console.log("No 'True' in Copyrighted, instead was given: ",r.Copyrighted.value),i=!1),r.hasOwnProperty("LicenseUrl")||console.log("No license Url, instead, here is whole image info \n",t),{imageUrl:t.url,imageDesc:n,wikiUrl:t.descriptionshorturl,license:r.LicenseShortName.value,licenseUrl:r.hasOwnProperty("LicenseUrl")?r.LicenseUrl.value:null,attribution:c,credit:a,copyrighted:i,allMetadata:r}}));t((function(e){return function(e){for(var t=e,r=t.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),c=[t[n],t[r]];t[r]=c[0],t[n]=c[1]}return t}(e.concat(n))})),r(!0)}))}var _=function(e){var t=e.selectedCategory,r=Object(c.useState)([]),n=Object(o.a)(r,2),a=n[0],i=n[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),u=l[0],d=l[1],b=Object(c.useState)(0),h=Object(o.a)(b,2),p=h[0],m=h[1];Object(c.useEffect)((function(){var e="https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata|size&format=json&origin=*";""!==t&&(e="https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:"+t+"&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata|size&format=json&origin=*"),u||k(e,i,d).catch((function(e){return console.error("Fetch error:",e)}))}),[]),Object(c.useEffect)((function(){u&&O(p)}),[u,p]);var O=function(e){console.log("loading image ",p+1);var t=new Image;e>=a.length-1?t.src=a[0].imageUrl:t.src=a[e+1].imageUrl};return void 0!==a&&0!==a.length&&u?Object(j.jsxs)("div",{className:"App",children:[console.log(a[p]),Object(j.jsx)(g,{currentPhoto:a[p]}),Object(j.jsx)(C,{handleNextPhoto:function(e){switch(e){case"Next":m((function(e){return(e+1)%a.length})),console.log("going to next photo");break;case"Back":m((function(e){return 0===e?0:e-1})),console.log("going to last photo")}console.log("Last index: ",p)},photos:a,currentIndex:p})]}):Object(j.jsx)("div",{className:"App loading-container",children:Object(j.jsx)("p",{className:"loading-text",children:"Fetching images"})})},S=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),r=t[0],n=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsx)(h,{selectedCategory:r,setSelectedCategory:n})}),Object(j.jsx)(l.a,{path:"/app",children:Object(j.jsx)(_,{selectedCategory:r})})]})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,58)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;r(e),n(e),c(e),a(e),i(e)}))};s.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(n.a,{children:Object(j.jsx)(S,{})})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.f8499e6e.chunk.js.map