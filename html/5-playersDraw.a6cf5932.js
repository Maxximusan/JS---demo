let e,t,o,n,c;var a,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},i={},s=u.parcelRequirebd04;null==s&&((s=function(e){if(e in l)return l[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return l[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},u.parcelRequirebd04=s),s.register,console.log((a=s("1GAPJ"))&&a.__esModule?a.default:a);const r={changeAction1:document.querySelector('button[data-action = "choose1"]'),valueNum:document.querySelector("#valueNumber"),valueName:document.querySelector("#valueName1"),changeAction2:document.querySelector('button[data-action = "choose2"]'),valueSecondName:document.querySelector("#valueName2"),changeAction3:document.querySelector('button[data-action = "choose3"]'),valueThirdName:document.querySelector("#valueName3"),changeAction4:document.querySelector('button[data-action = "choose4"]'),spanFourthName:document.querySelector("#valueName41"),spanSecFourthName:document.querySelector("#valueName42"),changeAction5:document.querySelector('button[data-action = "choose5"]'),spanFifthName:document.querySelector("#valueName51"),spanSecFifthName:document.querySelector("#valueName52"),spanSixthName:document.querySelector("#valueName61"),spanSecSixththName:document.querySelector("#valueName62"),changeAction7:document.querySelector('button[data-action = "choose7"]'),spanSevenththName:document.querySelector("#valueName71"),spanSecSevensthName:document.querySelector("#valueName72"),spanEighthName:document.querySelector("#valueName81"),spanSecEighththName:document.querySelector("#valueName82"),firstTitleChoose:document.querySelector('[data-active-color = "define-first-player"]'),secondTitleChoose:document.querySelector('[data-active-color = "define-second-player"]'),thirdTitleChoose:document.querySelector('[data-active-color = "define-third-player"]'),firstTitlePS:document.querySelector('[data-active-color = "define-first-PS"]'),secondTitlePS:document.querySelector('[data-active-color = "define-second-PS"]'),fifthTitlePS:document.querySelector('[data-active-color = "define-fifth-PS"]'),changeAction9:document.querySelector('button[data-action = "choose9"]'),schreludeList:document.querySelector(".schreludeList"),optionalDraw:document.querySelector('button[data-action = "show"]'),mainDraw:document.querySelector("#mainDraw"),showOptionalDraw:document.querySelector("#optionalDraw")};r.changeAction1.addEventListener("click",function(){console.log(d=Math.floor(5*Math.random()+1)),r.valueNum.textContent=d,alert(`\u041A\u0442\u043E \u0436\u0435 \u0431\u0443\u0434\u0435\u0442 \u043F\u0435\u0440\u0432\u044B\u043C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u043C \u0432 \u043F\u0435\u0440\u0432\u043E\u0439 \u0438\u0433\u0440\u0435 \u0442\u0443\u0440\u043D\u0438\u0440\u0430?`),console.log(h=v(f)),r.valueName.textContent=h,C(r.valueName),console.log(this),console.log(r.changeAction1),y(this),q(r.changeAction2),x(r.firstTitleChoose),A(r.secondTitleChoose)},{once:!0}),r.changeAction2.addEventListener("click",function(){T(N,h),g.push(h),console.log(g),alert(`${h}, \u{43A}\u{442}\u{43E} \u{436}\u{435} \u{431}\u{443}\u{434}\u{435}\u{442} \u{432}\u{430}\u{448}\u{438}\u{43C} \u{43F}\u{435}\u{440}\u{432}\u{44B}\u{43C} \u{441}\u{43E}\u{43F}\u{435}\u{440}\u{43D}\u{438}\u{43A}\u{43E}\u{43C}?`),console.log(m=v(N)),r.valueSecondName.textContent=m,C(r.valueSecondName),y(this),q(r.changeAction3),x(r.secondTitleChoose),A(r.thirdTitleChoose)},{once:!0}),r.changeAction3.addEventListener("click",function(){T(N,m),g.push(m),console.log(g),alert(`${h} \u{438} ${m}, \u{43A}\u{442}\u{43E} \u{436}\u{435} \u{441}\u{43E}\u{441}\u{442}\u{430}\u{432}\u{438}\u{442} \u{432}\u{430}\u{43C} \u{43A}\u{43E}\u{43C}\u{43F}\u{430}\u{43D}\u{438}\u{44E}?`),console.log(S=v(N)),r.valueThirdName.textContent=S,C(r.valueThirdName),y(this),q(r.changeAction4),x(r.thirdTitleChoose),A(r.firstTitlePS),T(N,S),g.push(S),console.log(g)},{once:!0}),r.changeAction4.addEventListener("click",function(){alert("Готовы?"),e=v(g),r.spanFourthName.textContent=`${e}`,r.spanSecFourthName.textContent="1, 2, 3",T(g,e),E(r.spanFourthName),E(r.spanSecFourthName),y(this),q(r.changeAction5),x(r.firstTitlePS),A(r.secondTitlePS)},{once:!0}),r.changeAction5.addEventListener("click",function(){alert("Иииии )))"),t=v(g),r.spanFifthName.textContent=`${t}`,r.spanSecFifthName.textContent="1, 2, 5",T(g,t),E(r.spanFifthName),E(r.spanSecFifthName),console.log(o),console.log(o=v(g)),r.spanSixthName.textContent=`${o}`,r.spanSecSixththName.textContent="1, 4, 5",E(r.spanSixthName),E(r.spanSecSixththName),y(this),q(r.changeAction7),x(r.secondTitlePS),A(r.fifthTitlePS)},{once:!0}),r.changeAction7.addEventListener("click",function(){alert("Иииии )))"),n=v(N),r.spanSevenththName.textContent=`${n}`,r.spanSecSevensthName.textContent="2, 3, 4",T(N,n),E(r.spanSevenththName),E(r.spanSecSevensthName),console.log(n),console.log(c=v(N)),r.spanEighthName.textContent=`${c}`,r.spanSecEighththName.textContent="3, 4, 5",E(r.spanEighthName),E(r.spanSecEighththName),y(this),x(r.fifthTitlePS)},{once:!0}),r.changeAction9.addEventListener("click",function(){(function(e){let t=e.length;for(;0!=t;){let o=Math.floor(Math.random()*t);t--,[e[t],e[o]]=[e[o],e[t]]}})(p),y(r.changeAction9),r.schreludeList.insertAdjacentHTML("beforeend",p.map(e=>(console.log(e),` 
        <li class="schreludeItem"> <p class="itemColor">${e} </p></li>
        `)).join(""))},{once:!0}),r.optionalDraw.addEventListener("click",function(){(function(e){e.classList.remove("hidden")})(r.showOptionalDraw),function(e){e.classList.add("hidden")}(r.mainDraw)},{once:!0});let d=0,h="",m="",S="";const f=["Макс","Вован","Игорь","Лёша","Саня"],N=[...f];console.log(N);const g=[],p=[];function v(e){let t=Math.floor(Math.random()*(e.length-1+1));console.log(t);let o=e.find((e,o)=>o===t);return console.log(o),o}function y(e){e.disabled=!0}function q(e){e.disabled=!1}function C(e){e.classList.add("js-actions")}function A(e){e.classList.add("js-actions3")}function x(e){e.classList.add("js-actions4")}function E(e){e.classList.add("js-actions2")}function T(e,t){console.log(e.find(e=>e===t));let o=e.findIndex(e=>e===t);console.log(o),e.splice(o,1),console.log(e)}
//# sourceMappingURL=5-playersDraw.a6cf5932.js.map
