(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},20:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(3),r=a.n(l),c=(a(15),a(1)),u=a(4),i=a(5),o=a(7),m=a(6),p=a(8),k=(a(17),a(20),function(e){var t=e.props.tasks.map(function(e,t){return s.a.createElement("div",{key:t,className:"task"},s.a.createElement("p",{className:"taskNumber"},"Task numer ",t+1," "),s.a.createElement("p",{className:"taskValue"},e))});return s.a.createElement("div",{className:"results"},t)}),d=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={inputValue:"",tasks:[]},a.handleText=function(e){a.setState({inputValue:e.target.value})},a.addTask=function(){var e=Object(c.a)(a.state.tasks);e.push(a.state.inputValue),""!==a.state.inputValue&&a.setState({tasks:e,inputValue:""})},a.removeTask=function(){var e=Object(c.a)(a.state.tasks);e.splice(a.state.tasks.length-1,1),a.setState({tasks:e,inputValue:""})},a.clearTasks=function(){a.setState({tasks:[],inputValue:""})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("h1",{className:"title"},"ToDo App"),s.a.createElement("div",null,s.a.createElement("textarea",{placeholder:"dodaj zadanie",value:this.state.inputValue,onChange:this.handleText}),s.a.createElement("div",null,s.a.createElement("button",{onClick:this.addTask},"Add"),s.a.createElement("button",{onClick:this.removeTask},"Remove"),s.a.createElement("button",{onClick:this.clearTasks},"Clear"))),s.a.createElement(k,{props:this.state}))}}]),t}(n.Component);r.a.render(s.a.createElement(d,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(24)}},[[9,2,1]]]);
//# sourceMappingURL=main.cf4a4cb3.chunk.js.map