let e,t,o,n;function c(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},i={},s=a.parcelRequirebd04;null==s&&((s=function(e){if(e in l)return l[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return l[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},a.parcelRequirebd04=s),s.register;var r=s("1GAPJ");console.log(c(r));const u={changeAction1:document.querySelector('button[data-action = "choose1"]'),valueNum:document.querySelector("#valueNumber"),valueName:document.querySelector("#valueName1"),changeAction2:document.querySelector('button[data-action = "choose2"]'),valueSecondName:document.querySelector("#valueName2"),changeAction3:document.querySelector('button[data-action = "choose3"]'),valueThirdName:document.querySelector("#valueName3"),changeAction4:document.querySelector('button[data-action = "choose4"]'),spanFourthName:document.querySelector("#valueName41"),spanSecFourthName:document.querySelector("#valueName42"),changeAction5:document.querySelector('button[data-action = "choose5"]'),spanFifthName:document.querySelector("#valueName51"),spanSecFifthName:document.querySelector("#valueName52"),spanSixthName:document.querySelector("#valueName61"),spanSecSixththName:document.querySelector("#valueName62"),changeAction7:document.querySelector('button[data-action = "choose7"]'),spanSevenththName:document.querySelector("#valueName71"),spanSecSevensthName:document.querySelector("#valueName72"),firstTitleChoose:document.querySelector('[data-active-color = "define-first-player"]'),secondTitleChoose:document.querySelector('[data-active-color = "define-second-player"]'),thirdTitleChoose:document.querySelector('[data-active-color = "define-third-player"]'),firstTitlePS:document.querySelector('[data-active-color = "define-first-PS"]'),secondTitlePS:document.querySelector('[data-active-color = "define-second-PS"]'),fifthTitlePS:document.querySelector('[data-active-color = "define-fifth-PS"]')};u.changeAction1.addEventListener("click",function(){console.log(d=Math.floor(5*Math.random()+1)),u.valueNum.textContent=d,console.log(h=p(S)),A("Кто же будет первым участником в первой игре турнира?",h,this,u.valueName,u.changeAction2,u.firstTitleChoose,u.secondTitleChoose,"Итак!")},{once:!0}),u.changeAction2.addEventListener("click",function(){C(N,h),g.push(h),console.log(g),console.log(m=p(N));let e=`${h}`;A("Кто же будет вашим первым соперником?",m,this,u.valueSecondName,u.changeAction3,u.secondTitleChoose,u.thirdTitleChoose,e)},{once:!0}),u.changeAction3.addEventListener("click",function(){C(N,m),g.push(m),console.log(g),console.log(f=p(N));let e=`${h} \u{438} ${m}`;A("Кто же составит вам компанию?",f,this,u.valueThirdName,u.changeAction4,u.thirdTitleChoose,u.firstTitlePS,e),C(N,f),g.push(f),console.log(g)},{once:!0}),u.changeAction4.addEventListener("click",function(){alert("Готовы?"),e=p(g),u.spanFourthName.textContent=`${e}`,u.spanSecFourthName.textContent="1, 2, 3",C(g,e),T(u.spanFourthName),T(u.spanSecFourthName),v(this),y(u.changeAction5),x(u.firstTitlePS),q(u.secondTitlePS)},{once:!0}),u.changeAction5.addEventListener("click",function(){alert("Иииии )))"),t=p(g),u.spanFifthName.textContent=`${t}`,u.spanSecFifthName.textContent="1, 2, 4",C(g,t),T(u.spanFifthName),T(u.spanSecFifthName),console.log(o),console.log(o=p(g)),u.spanSixthName.textContent=`${o}`,u.spanSecSixththName.textContent="1, 3, 4",T(u.spanSixthName),T(u.spanSecSixththName),v(this),y(u.changeAction7),x(u.secondTitlePS),q(u.fifthTitlePS)},{once:!0}),u.changeAction7.addEventListener("click",function(){alert("Иииии )))"),n=p(N),u.spanSevenththName.textContent=`${n}`,u.spanSecSevensthName.textContent="2, 3, 4",C(N,n),T(u.spanSevenththName),T(u.spanSecSevensthName),console.log(n),v(this),x(u.fifthTitlePS)},{once:!0});let d=0,h="",m="",f="";const S=["Макс","Вован","Лёша","Саня"],N=[...S];console.log(N);const g=[];function p(e){let t=Math.floor(Math.random()*(e.length-1+1));console.log(t);let o=e.find((e,o)=>o===t);return console.log(o),o}function v(e){e.disabled=!0}function y(e){e.disabled=!1}function q(e){e.classList.add("js-actions3")}function x(e){e.classList.add("js-actions4")}function T(e){e.classList.add("js-actions2")}function C(e,t){console.log(e.find(e=>e===t));let o=e.findIndex(e=>e===t);console.log(o),e.splice(o,1),console.log(e)}function A(e,t,o,n,a,l,i,s){c(r).Report.warning(`${s}`,`${e}`,"Смотрим",()=>{n.textContent=t,function(e){e.classList.add("js-actions")}(n),console.log(o),v(o),y(a),x(l),q(i)})}
//# sourceMappingURL=4-PlayersDraw.396875d9.js.map