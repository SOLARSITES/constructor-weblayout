!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(t){if("string"==typeof t)return e(t,n);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?e(t,n):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var n=function(e,n,i){var a,r=document.createElement(e);if(n&&(a=r.classList).add.apply(a,t(n)),i)for(var o in i)r[o]=i[o];return r};!function(e,i){var a=document.querySelector(".app");if(a.classList.add("body-app"),a.style.color=i.fontColor||"",a.style.backgroundColor=i.backgroundColor||"",i.subColor&&document.documentElement.style.setProperty("--sub-color",i.subColor),i.favicon){var r=i.favicon.lastIndexOf("."),o=i.favicon.substring(r+1),l=n("link",null,{rel:"icon",type:"image/"+("ico"===o?"x-icon":o),href:i.favicon});document.head.append(l)}a.style.backgroundImage=i.background?'url("'.concat(i.background,'")'):"",document.title=i.title,i.header&&a.append(function(e){var i=e.title,a=e.header,r=a.logo,o=a.menu,l=a.social,p=n("header"),d=n("div",["container"]),c=n("div",["header"]);if(r){var s=n("img",["logo"],{src:r,alt:"Логотип: "+i});c.append(s)}if(o){var u=n("button",["menu-button"]),g=n("nav",["menu-list"]),f=o.map((function(t){return n("a",["menu-link"],{href:t.link,textContent:t.title})}));g.append.apply(g,t(f)),c.append(g),u.addEventListener("click",(function(){u.classList.toggle("menu-button-active"),c.classList.toggle("header-active")})),d.append(u)}if(l){var m=n("div",["social"]),v=l.map((function(t){var e=n("a",["social-link"]);return e.append(n("img",[],{src:t.image,alt:t.title})),e.href=t.link,e}));m.append.apply(m,t(v)),c.append(m)}return p.append(d),d.append(c),p}(i)),i.main&&a.append(function(e){var i=e.title,a=e.main,r=a.genre,o=a.rating,l=a.description,p=a.trailer,d=a.slider,c=n("main"),s=n("div",["container"]),u=n("div",["main-content"]),g=n("div",["content"]);if(c.append(s),s.append(u),u.append(g),r){var f=n("span",["genre","animated","fadeInRight"],{textContent:r});g.append(f)}if(o){for(var m=n("div",["rating","animated","fadeInRight"]),v=n("div",["rating-stars"]),b=n("div",["rating-number"],{textContent:"".concat(o,"/10")}),w=0;w<10;w++){var y=n("img",["star"],{alt:w?"":"Рейтинг ".concat(o," из 10"),src:w<o?"./img/star.svg":"./img/star-o.svg"});v.append(y)}m.append(v,b),g.append(m)}if(g.append(n("h1",["main-title","animated","fadeInRight"],{textContent:i})),l&&g.append(n("p",["main-description","animated","fadeInRight"],{textContent:l})),p){var h=n("a",["button","animated","fadeInRight","youtube-modal"],{href:p,textContent:"Смотреть трейлер"}),k=n("a",["play","youtube-modal"],{href:p,ariaLabel:"Смотреть трейлер"}),C=n("img",["play-img"],{src:"./img/play.svg",alt:"",ariaHidden:!0});g.append(h),u.append(k),k.append(C)}if(d){var x=n("div",["series"]),I=n("div",["swiper-container"]),j=n("div",["swiper-wrapper"]),A=n("button",["arrow"]),L=d.map((function(t){var e=n("div",["swiper-slide"]),i=n("figure",["card"]),a=n("img",["card-img"],{src:t.img,alt:((t.subtitle||"")+" "+(t.title||"")).trim()});if(i.append(a),t.title||t.subtitle){var r=n("figcaption",["card-description"]);r.innerHTML="\n          ".concat(t.subtitle?'<p class="card-subtitle">'.concat(t.subtitle,"</p>"):"","\n          ").concat(t.title?'<p class="card-title">'.concat(t.title,"</p>"):"","\n        "),i.append(r)}return e.append(i),e}));j.append.apply(j,t(L)),I.append(j),x.append(I,A),s.append(x),new Swiper(I,{loop:!0,navigation:{nextEl:A},breakpoints:{320:{slidesPerView:1,spaceBetween:20},541:{slidesPerView:2,spaceBetween:40}}})}return c}(i)),i.footer&&a.append(function(e){var i=e.footer,a=i.copyright,r=i.menu,o=n("footer",["footer"]),l=n("div",["container"]),p=n("div",["footer-content"]),d=n("div",["left"]),c=n("div",["right"]);if(a){var s=n("span",["copyright"],{textContent:a});d.append(s)}if(r){var u=n("nav",["footer-menu"]),g=r.map((function(t){return n("a",["footer-link"],{href:t.link,textContent:t.title})}));u.append.apply(u,t(g)),c.append(u)}return o.append(l),l.append(p),p.append(d),p.append(c),o}(i))}(0,{title:"Чёрная Вдова",background:"./widow/background.jpg",favicon:"./widow/favicon.png",fontColor:"#ffffff",backgroundColor:"#141218",subColor:"#9d2929",header:{logo:"./widow/logo.png",social:[{title:"Twitter",link:"https://twitter.com",image:"./widow/social/twitter.svg"},{title:"Instagram",link:"https://instagram.com",image:"./widow/social/instagram.svg"},{title:"Facebook",link:"https://facebook.com",image:"./widow/social/facebook.svg"}],menu:[{title:"Описание",link:"#"},{title:"Трейлер",link:"#"},{title:"Отзывы",link:"#"}]},main:{genre:"2021, фантастика, боевик, приключения",rating:"7",description:"Наташе Романофф предстоит лицом к лицу встретиться со своим прошлым. Чёрной Вдове придется вспомнить о том, что было в её жизни задолго до присоединения к команде Мстителей, и узнать об опасном заговоре, в который оказываются втянуты её старые знакомые — Елена, Алексей (известный как Красный Страж) и Мелина.",trailer:"https://www.youtube.com/watch?v=0k82-pGgryk",slider:[{img:"./widow/slider/01.jpg",title:"",subtitle:""},{img:"./widow/slider/02.jpg",title:"",subtitle:""},{img:"./widow/slider/03.jpg",title:"",subtitle:""},{img:"./widow/slider/04.jpg",title:"",subtitle:""},{img:"./widow/slider/05.jpg",title:"",subtitle:""},{img:"./widow/slider/06.jpg",title:"",subtitle:""}]},footer:{copyright:"© 2021 Black Widow. All right reserved.",menu:[{title:"Privacy Policy",link:"#"},{title:"Terms of Service",link:"#"},{title:"Legal",link:"#"}]}})}();