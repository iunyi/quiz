(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{24:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r=t(1),a=t(0),c=t.n(a),i=t(15),s=t.n(i),o=(t(24),t(10)),u=t(3),l=t.n(u),h=t(8),b=t(2),p=t(4),d=t(5);function j(){var n=Object(p.a)(["\n    transition: all 0.3s ease;\n    display: flex;\n    justify-content: center;\n\n    :hover {\n        opacity: 0.8;\n    }\n\n    button {\n        cursor: pointer;\n        user.select: none;\n        min-width: 250px;\n        width: 50%;\n        line-height: 40px;\n        margin: 5px 0;\n        background: ",";\n        border: none;\n        border-radius: 8px;\n    }\n"]);return j=function(){return n},n}function x(){var n=Object(p.a)(["\n    max-with: 1200px;\n\n    .number {\n        height: 10vh;\n        min-height: 30px;\n        color: #7D87A1;\n        margin: 0 40px;\n    }\n\n    .question {\n        height: 10vh;\n        min-height: 80px;\n        min-width: 250px;\n        font-weight: 700;\n        margin: 0 40px;\n    }\n\n    .answer {\n        height: 40vh;\n        min-height: 220px;\n    }\n"]);return x=function(){return n},n}var g,f=d.b.div(x()),m=d.b.div(j(),(function(n){var e=n.correct,t=n.userClicked;return e?"#44BBA4":!e&&t?"#C76B84":"white"})),v=function(n){var e=n.question,t=n.answers,a=n.handleClick,c=n.userAnswer,i=n.questionNumber,s=n.totalQuestions,o=t.map((function(n,e){return Object(r.jsx)(m,{className:"button-wrapper",correct:(null===c||void 0===c?void 0:c.correct_answer)===n,userClicked:(null===c||void 0===c?void 0:c.answer)===n,children:Object(r.jsx)("button",{onClick:a,disabled:!!c,value:n,children:Object(r.jsx)("span",{dangerouslySetInnerHTML:{__html:n}})})},e)}));return Object(r.jsxs)(f,{children:[Object(r.jsxs)("p",{className:"number",children:["Question: ",i,"/",s]}),Object(r.jsx)("p",{className:"question",dangerouslySetInnerHTML:{__html:e}}),Object(r.jsx)("div",{className:"answer",children:o})]})},O=t(13),w=function(n){for(var e=n.length-1;e>0;e--){var t=Math.floor(Math.random()*(e+1)),r=n[e];n[e]=n[t],n[t]=r}return n};!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(g||(g={}));var k=function(){var n=Object(h.a)(l.a.mark((function n(e,t){var r,a;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="https://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(t,"&type=multiple"),n.next=3,fetch(r);case 3:return n.next=5,n.sent.json();case 5:return a=n.sent,n.abrupt("return",a.results.map((function(n){return Object(O.a)(Object(O.a)({},n),{},{answers:w([].concat(Object(o.a)(n.incorrect_answers),[n.correct_answer]))})})));case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();function y(){var n=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 40px;\n\n    .title {\n        height: 10vh; \n        min-height: 30px;   \n    }\n\n    .score {\n        min-height: 30px;   \n    }\n\n    .next-wrapper {\n        height: 10vh;  \n        min-height: 120px;  \n    }\n\n    .start, .next {\n        cursor: pointer;\n        border: none;\n        border-radius: 8px;\n        height: 40px;\n        margin: 20px 0;\n        padding: 0 40px;\n        color: white;\n        background-color: #565F76;\n    }\n"]);return y=function(){return n},n}function N(){var n=Object(p.a)(["\n    html {\n        height: 100%;\n    }\n\n    body {\n        --stripe: #FFF7EB;\n        --bg: #DEE1E3;\n        background: linear-gradient(135deg, var(--bg) 25%, transparent 25%) -50px 0,\n          linear-gradient(225deg, var(--bg) 25%, transparent 25%) -50px 0,\n          linear-gradient(315deg, var(--bg) 25%, transparent 25%),\n          linear-gradient(45deg, var(--bg) 25%, transparent 25%);\n        background-size: 100px 100px;\n        background-color: var(--stripe);\n        height: 100vh;\n        display: flex;\n        justify-content: center;\n    }\n\n    * {\n        box-sizing: border-box;\n        margin: 0;\n        font-family: 'Roboto', sans-serif;\n        color: #565F76;\n    }\n      \n"]);return N=function(){return n},n}var S=Object(d.a)(N()),q=d.b.div(y());var _=function(){var n=Object(a.useState)(!1),e=Object(b.a)(n,2),t=e[0],c=e[1],i=Object(a.useState)([]),s=Object(b.a)(i,2),u=s[0],p=s[1],d=Object(a.useState)(0),j=Object(b.a)(d,2),x=j[0],f=j[1],m=Object(a.useState)([]),O=Object(b.a)(m,2),w=O[0],y=O[1],N=Object(a.useState)(0),_=Object(b.a)(N,2),C=_[0],E=_[1],A=Object(a.useState)(!0),M=Object(b.a)(A,2),F=M[0],z=M[1],B=function(){var n=Object(h.a)(l.a.mark((function n(){var e;return l.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c(!0),z(!1),n.next=4,k(10,g.EASY);case 4:e=n.sent,p(e),E(0),y([]),f(0),c(!1);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(S,{}),Object(r.jsxs)(q,{children:[Object(r.jsx)("h1",{className:"title",children:"Quiz"}),F||10===w.length?Object(r.jsx)("button",{className:"start",onClick:B,children:"Start"}):null,!F&&!t&&Object(r.jsxs)("p",{className:"score",children:["Score: ",C]}),t&&Object(r.jsx)("p",{children:Object(r.jsx)("i",{className:"fas fa-spinner fa-pulse"})}),!t&&!F&&Object(r.jsx)(v,{questionNumber:x+1,totalQuestions:10,question:u[x].question,answers:u[x].answers,userAnswer:w?w[x]:void 0,handleClick:function(n){if(!F){var e=n.currentTarget.value,t=u[x].correct_answer===e;t&&E((function(n){return n+1}));var r={question:u[x].question,answer:e,correct:t,correct_answer:u[x].correct_answer};y((function(n){return[].concat(Object(o.a)(n),[r])}))}}}),F||t||w.length!==x+1||9===x?null:Object(r.jsx)("div",{className:"next-wrapper",children:Object(r.jsx)("button",{className:"next",onClick:function(){var n=x+1;10===n?z(!0):f(n)},children:"Next question"})})]})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(_,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.603c98cd.chunk.js.map