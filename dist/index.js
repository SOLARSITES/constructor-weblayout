!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}var n=function(t,n,i){var a,r=document.createElement(t);if(n&&(a=r.classList).add.apply(a,e(n)),i)for(var o in i)r[o]=i[o];return r};!function(t,i){var a=document.querySelector(".app");if(a.classList.add("body-app"),a.style.color=i.fontColor||"",a.style.backgroundColor=i.backgroundColor||"",i.subColor&&document.documentElement.style.setProperty("--sub-color",i.subColor),i.favicon){var r=i.favicon.lastIndexOf("."),o=i.favicon.substring(r+1),p=n("link",null,{rel:"icon",type:"image/"+("ico"===o?"x-icon":o),href:i.favicon});document.head.append(p)}a.style.backgroundImage=i.background?'url("'.concat(i.background,'")'):"",document.title=i.title,i.header&&a.append(function(t){var i=t.title,a=t.header,r=a.logo,o=a.menu,p=a.social,l=n("header"),c=n("div",["container"]),d=n("div",["header"]);if(r){var s=n("img",["logo"],{src:r,alt:"Логотип: "+i});d.append(s)}if(o){var u=n("button",["menu-button"]),f=n("nav",["menu-list"]),g=o.map((function(e){return n("a",["menu-link"],{href:e.link,textContent:e.title})}));f.append.apply(f,e(g)),d.append(f),u.addEventListener("click",(function(){u.classList.toggle("menu-button-active"),d.classList.toggle("header-active")})),c.append(u)}if(p){var m=n("div",["social"]),v=p.map((function(e){var t=n("a",["social-link"]);return t.append(n("img",[],{src:e.image,alt:e.title})),t.href=e.link,t}));m.append.apply(m,e(v)),d.append(m)}return l.append(c),c.append(d),l}(i)),i.main&&a.append(function(t){var i=t.title,a=t.main,r=a.genre,o=a.rating,p=a.description,l=a.trailer,c=a.slider,d=n("main"),s=n("div",["container"]),u=n("div",["main-content"]),f=n("div",["content"]);if(d.append(s),s.append(u),u.append(f),r){var g=n("span",["genre","animated","fadeInRight"],{textContent:r});f.append(g)}if(o){for(var m=n("div",["rating","animated","fadeInRight"]),v=n("div",["rating-stars"]),b=n("div",["rating-number"],{textContent:"".concat(o,"/10")}),h=0;h<10;h++){var y=n("img",["star"],{alt:h?"":"Рейтинг ".concat(o," из 10"),src:h<o?"./img/star.svg":"./img/star-o.svg"});v.append(y)}m.append(v,b),f.append(m)}if(f.append(n("h1",["main-title","animated","fadeInRight"],{textContent:i})),p&&f.append(n("p",["main-description","animated","fadeInRight"],{textContent:p})),l){var w=n("a",["button","animated","fadeInRight","youtube-modal"],{href:l,textContent:"Смотреть трейлер"}),k=n("a",["play","youtube-modal"],{href:l,ariaLabel:"Смотреть трейлер"}),C=n("img",["play-img"],{src:"./img/play.svg",alt:"",ariaHidden:!0});f.append(w),u.append(k),k.append(C)}if(c){var x=n("div",["series"]),I=n("div",["swiper-container"]),L=n("div",["swiper-wrapper"]),j=n("button",["arrow"]),A=c.map((function(e){var t=n("div",["swiper-slide"]),i=n("figure",["card"]),a=n("img",["card-img"],{src:e.img,alt:((e.subtitle||"")+" "+(e.title||"")).trim()});if(i.append(a),e.title||e.subtitle){var r=n("figcaption",["card-description"]);r.innerHTML="\n          ".concat(e.subtitle?'<p class="card-subtitle">'.concat(e.subtitle,"</p>"):"","\n          ").concat(e.title?'<p class="card-title">'.concat(e.title,"</p>"):"","\n        "),i.append(r)}return t.append(i),t}));L.append.apply(L,e(A)),I.append(L),x.append(I,j),s.append(x),new Swiper(I,{loop:!0,navigation:{nextEl:j},breakpoints:{320:{slidesPerView:1,spaceBetween:20},541:{slidesPerView:2,spaceBetween:40}}})}return d}(i)),i.footer&&a.append(function(t){var i=t.footer,a=i.copyright,r=i.menu,o=n("footer",["footer"]),p=n("div",["container"]),l=n("div",["footer-content"]),c=n("div",["left"]),d=n("div",["right"]);if(a){var s=n("span",["copyright"],{textContent:a});c.append(s)}if(r){var u=n("nav",['footer-menu"']),f=r.map((function(e){return n("a",["footer-link"],{href:e.link,textContent:e.title})}));u.append.apply(u,e(f)),d.append(u)}return o.append(p),p.append(l),l.append(c),l.append(d),o}(i))}(0,{title:"Ведьмак",background:"./witcher/background.jpg",favicon:"./favicon.ico",fontColor:"#ffffff",backgroundColor:"#141218",subColor:"#9d2929",header:{logo:"./witcher/logo.png",social:[{title:"Twitter",link:"https://twitter.com",image:"./witcher/social/twitter.svg"},{title:"Instagram",link:"https://instagram.com",image:"./witcher/social/instagram.svg"},{title:"Facebook",link:"https://facebook.com",image:"./witcher/social/facebook.svg"}],menu:[{title:"Описание",link:"#"},{title:"Трейлер",link:"#"},{title:"Отзывы",link:"#"}]},main:{genre:"2019, фэнтези",rating:"8",description:"Ведьмак Геральт, мутант и убийца чудовищ, на своей верной лошади по кличке Плотва путешествует по Континенту. За тугой мешочек чеканных монет этот мужчина избавит вас от всякой настырной нечисти — хоть от чудищ болотных, оборотней и даже заколдованных принцесс.",trailer:"https://www.youtube.com/watch?v=P0oJqfLzZzQ",slider:[{img:"./witcher/series/series-1.jpg",title:"Начало конца",subtitle:"Серия №1"},{img:"./witcher/series/series-2.jpg",title:"Четыре марки",subtitle:"Серия №2"},{img:"./witcher/series/series-3.jpg",title:"Предательская луна",subtitle:"Серия №3"},{img:"./witcher/series/series-4.jpg",title:"Банкеты, ублюдки и похороны",subtitle:"Серия №4"}]},footer:{copyright:"© 2020 The Witcher. All right reserved.",menu:[{title:"Privacy Policy",link:"#"},{title:"Terms of Service",link:"#"},{title:"Legal",link:"#"}]}})}();