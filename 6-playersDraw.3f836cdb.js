function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequirebd04;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var l=Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,o){n[e]=o},o.parcelRequirebd04=i),i.register;var l=i("1GAPJ");console.log(e(l));const c={changeAction1:document.querySelector('button[data-action = "choose1"]'),changeAction4:document.querySelector('button[data-action = "choose4"]'),firstTitleChoose:document.querySelector('[data-active-color = "define-first-player"]'),firstTitlePS:document.querySelector('[data-active-color = "define-first-PS"]'),schreludeList:document.querySelector(".schreludeList"),uniqueNumberList:document.querySelector(".uniqueNumberList")};c.changeAction1.addEventListener("click",function(){console.log(r),u("Кто же и какой игровой номер получит?",r,c.uniqueNumberList,this,c.changeAction4,c.firstTitleChoose,c.firstTitlePS)},{once:!0}),c.changeAction4.addEventListener("click",function(){console.log(s),u("Давайте же посмотрим на расписание игр!",s,c.schreludeList,this,null,c.firstTitlePS,null)},{once:!0});const r=["Макс","Вован","Игорь","Лёша","Саня","Роман"];console.log(r);const s=["1, 2, 3  и  4, 5, 6","1, 2, 5  и  3, 4, 6","1, 3, 4  и  2, 5, 6","1, 5, 6  и  2, 3, 4","1, 4, 6  и  2, 3, 5","1, 2, 4  и  3, 5, 6","1, 3, 5  и  2, 4, 6","1, 3, 6  и  2, 4, 5","1, 2, 6  и  3, 4, 5","1, 4, 5  и  2, 3, 6"];function u(o,t,n,i,c,r,s){e(l).Report.warning("ИТАК",`${o}`,"Смотрим",()=>{var e,o,l,u,a,d;e=t,o=n,l=i,u=c,a=r,d=s,!function(e){let o=e.length;for(;0!=o;){let t=Math.floor(Math.random()*o);o--,[e[o],e[t]]=[e[t],e[o]]}}(e),console.log(e),o.insertAdjacentHTML("beforeend",e.map(e=>(console.log(e),` 
        <li class="schreludeItem"> <p class="itemColor">${e} </p></li>
        `)).join("")),l.disabled=!0,null!==u&&(u.disabled=!1),function(e){e.classList.add("js-actions4")}(a),null!==d&&d.classList.add("js-actions3")})}
//# sourceMappingURL=6-playersDraw.3f836cdb.js.map
