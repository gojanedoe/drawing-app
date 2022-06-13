(this["webpackJsonpdrawing-app"]=this["webpackJsonpdrawing-app"]||[]).push([[0],{40:function(e,t,r){},41:function(e,t,r){},51:function(e,t,r){"use strict";r.r(t);r(35);var a=r(14),c=r(0),n=r.n(c),i=r(11),s=r.n(i),o=(r(40),r(4)),l=r(5),u=(r(41),r.p+"static/media/menu-icon.47389104.svg"),j=r(1),d=function(){return Object(j.jsxs)("header",{children:[Object(j.jsx)(a.b,{className:"site-title",to:"/",children:"Draw This!"}),Object(j.jsx)("div",{className:"button-container",children:Object(j.jsx)("button",{className:"menuButton",children:Object(j.jsx)("img",{src:u,alt:"Open menu"})})})]})},b=function(e){var t=e.selectedCategory,r=e.setSelectedCategory,a=Object(l.e)(),c=!1,n=function(e){r(e.target.value)};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==t&&(c=!0),c?a.push("/app"):alert("Please select a subject category.")},children:[Object(j.jsxs)("label",{className:"btn btn-light",children:[Object(j.jsx)("input",{type:"radio",value:"Featured_pictures_of_people",name:"category",checked:"Featured_pictures_of_people"===t,onChange:n}),Object(j.jsx)("span",{children:"People"})]}),Object(j.jsxs)("label",{className:"btn btn-light",children:[Object(j.jsx)("input",{type:"radio",value:"Featured_pictures_of_architecture",name:"category",checked:"Featured_pictures_of_architecture"===t,onChange:n}),Object(j.jsx)("span",{children:"Architecture"})]}),Object(j.jsxs)("label",{className:"btn btn-light",children:[Object(j.jsx)("input",{type:"radio",value:"Featured_pictures_of_landscapes",name:"category",checked:"Featured_pictures_of_landscapes"===t,onChange:n}),Object(j.jsx)("span",{children:"Landscapes"})]}),Object(j.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Start"})]})},h=function(e){var t=e.selectedCategory,r=e.setSelectedCategory;return Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("main",{children:[Object(j.jsx)("h1",{children:"Welcome"}),Object(j.jsx)("p",{children:"Draw This! is an image reference generator for artists."}),Object(j.jsx)("p",{children:'Choose the subject you\'d like to draw below, and click "Start" to begin.'}),Object(j.jsx)(b,{selectedCategory:t,setSelectedCategory:r})]})})},m=function(e){var t=e.currentPhoto;return Object(j.jsx)("div",{className:"photo-container",children:Object(j.jsx)("img",{src:t.imageUrl,className:"photo",alt:t.imageDesc})})},p=r.p+"static/media/info.fe92df14.svg",g=r(20),O=r(57),f=function(e){var t=e.photos,r=e.currentIndex,a=Object(c.useRef)(null),n=Object(j.jsx)(g.a,{style:{color:"black"},children:Object(j.jsxs)(g.a.Body,{ref:a,children:[Object(j.jsx)("span",{className:"credit-title",children:"Credit: "}),t[r].attribution,Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"credit-title",children:"License: "}),Object(j.jsx)("a",{href:t[r].licenseUrl,target:"_blank",rel:"noreferrer",children:t[r].license}),Object(j.jsx)("br",{}),Object(j.jsx)("span",{className:"credit-title",children:"Source: "}),Object(j.jsx)("a",{href:t[r].wikiUrl,target:"_blank",rel:"noreferrer",children:"Wikimedia Commons"})]})});return Object(j.jsx)(O.a,{trigger:"click",placement:"top",overlay:n,children:Object(j.jsx)("button",{className:"infoButton",children:Object(j.jsx)("img",{src:p,alt:"The letter 'i' in a circle","aria-label":"Open image information"})})})},x=function(e){var t=e.timerIsRunning,r=e.timerSeconds,a=e.setTimerSeconds,n=e.handleNextPhoto,i=e.resetTimer;return Object(c.useEffect)((function(){var e=null;return t&&0!==r?e=setInterval((function(){a((function(e){return e-1}))}),1e3):t&&r<=0?(n("Next"),i()):t||0===r||clearInterval(e),function(){return clearInterval(e)}}),[t,r]),Object(j.jsxs)("div",{className:"Timer",children:[":",r]})},v=r.p+"static/media/right-arrow.94137a21.svg",y=r.p+"static/media/left-arrow.a99bd7b1.svg",N=r.p+"static/media/play-icon.5529aa1c.svg",w=r.p+"static/media/pause-icon.61e888f4.svg",C=function(e){var t=e.handleNextPhoto,r=e.photos,a=e.currentIndex,n=Object(c.useState)(!1),i=Object(o.a)(n,2),s=i[0],l=i[1],u=Object(c.useState)(15),d=Object(o.a)(u,2),b=d[0],h=d[1],m=function(){l((function(e){return!e}))},p=function(){h(15)};return Object(j.jsxs)("footer",{children:[Object(j.jsx)(f,{photos:r,currentIndex:a}),Object(j.jsxs)("div",{className:"button-container vertical",children:[Object(j.jsx)(x,{timerIsRunning:s,setTimerIsRunning:l,timerSeconds:b,setTimerSeconds:h,initialTime:15,handleNextPhoto:t,resetTimer:p}),Object(j.jsxs)("div",{className:"button-container",children:[Object(j.jsx)("button",{className:"arrowButton",children:Object(j.jsx)("img",{src:y,alt:"Left arrow","aria-label":"Go to previous image",onClick:function(){t("Back"),p()}})}),Object(j.jsx)("button",{className:"playButton",children:s?Object(j.jsx)("img",{src:w,alt:"Pause icon","aria-label":"Pause timer",onClick:m}):Object(j.jsx)("img",{src:N,alt:"Play icon","aria-label":"Start timer",onClick:m})}),Object(j.jsx)("button",{className:"arrowButton",children:Object(j.jsx)("img",{src:v,alt:"Right arrow","aria-label":"Go to next image",onClick:function(){t("Next"),p()}})})]})]})]})};function k(e,t,r){return fetch(e).then((function(e){return e.json()})).then((function(e){var a=Object.values(e.query.pages).map((function(e){var t=e.imageinfo[0],r=t.extmetadata,a=null;r.hasOwnProperty("ImageDescription")&&(a=r.ImageDescription.value.replace(/<[^>]*>?/gm,""));var c="Not available";r.hasOwnProperty("Author")?c=r.Author.value:r.hasOwnProperty("Artist")?c=r.Artist.value:r.hasOwnProperty("Attribution")&&(c=r.Attribution.value),c=c.replace(/<[^>]*>?/gm,"");var n=null;r.hasOwnProperty("Credit")&&(n=(n=r.Credit.value).replace(/<[^>]*>?/gm,""));var i=null;return i=!(!r.hasOwnProperty("Copyrighted")||"True"!==r.Copyrighted.value),r.hasOwnProperty("LicenseUrl"),{imageUrl:t.url,imageDesc:a,wikiUrl:t.descriptionshorturl,license:r.LicenseShortName.value,licenseUrl:r.hasOwnProperty("LicenseUrl")?r.LicenseUrl.value:null,attribution:c,credit:n,copyrighted:i,allMetadata:r}}));t((function(e){return function(e){for(var t=e,r=t.length-1;r>0;r--){var a=Math.floor(Math.random()*(r+1)),c=[t[a],t[r]];t[r]=c[0],t[a]=c[1]}return t}(e.concat(a))})),r(!0)}))}var _=function(e){var t=e.selectedCategory,r=Object(c.useState)([]),a=Object(o.a)(r,2),n=a[0],i=a[1],s=Object(c.useState)(!1),l=Object(o.a)(s,2),u=l[0],d=l[1],b=Object(c.useState)(0),h=Object(o.a)(b,2),p=h[0],g=h[1];Object(c.useEffect)((function(){var e="https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:Featured_pictures_of_landscapes&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata|size&format=json&origin=*";""!==t&&(e="https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtype=file&gcmtitle=Category:"+t+"&prop=imageinfo&gcmlimit=50&iiprop=url|extmetadata|size&format=json&origin=*"),u||k(e,i,d).catch((function(e){return console.error("Fetch error:",e)}))}),[]),Object(c.useEffect)((function(){u&&O(p)}),[u,p]);var O=function(e){var t=new Image;e>=n.length-1?t.src=n[0].imageUrl:t.src=n[e+1].imageUrl};return void 0!==n&&0!==n.length&&u?Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(m,{currentPhoto:n[p]}),Object(j.jsx)(C,{handleNextPhoto:function(e){switch(e){case"Next":g((function(e){return(e+1)%n.length}));break;case"Back":g((function(e){return 0===e?0:e-1}))}},photos:n,currentIndex:p})]}):Object(j.jsx)("div",{className:"App loading-container",children:Object(j.jsx)("p",{className:"loading-text",children:"Fetching images"})})},S=function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),r=t[0],a=t[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(d,{}),Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsx)(h,{selectedCategory:r,setSelectedCategory:a})}),Object(j.jsx)(l.a,{path:"/app",children:Object(j.jsx)(_,{selectedCategory:r})})]})},P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,58)).then((function(t){var r=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;r(e),a(e),c(e),n(e),i(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(a.a,{basename:"/drawing-app",children:Object(j.jsx)(S,{})})}),document.getElementById("root")),P()}},[[51,1,2]]]);
//# sourceMappingURL=main.3b1a6b39.chunk.js.map