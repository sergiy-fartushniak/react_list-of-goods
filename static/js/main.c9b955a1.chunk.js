(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var s=n(0),a=n.n(s),r=n(2),o=n.n(r),l=n(5),c=n(3),i=n(4),u=n(7),b=n(6),h=(n(13),function(t){var e=t.goods;return a.a.createElement("ul",{className:"list"},e.map((function(t){return a.a.createElement("li",{className:"item",key:t},t)})))}),m=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],p=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={goods:m,isVisible:!1,sortBy:null,isReversed:!1},t.showGoodsList=function(){t.setState({isVisible:!0})},t.sortAlphabetically=function(){t.setState({sortBy:"alphabetically"})},t.sortByLength=function(){t.setState({sortBy:"length"})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.reset=function(){t.setState({sortBy:null,isReversed:!1})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state,e=t.goods,n=t.sortBy,s=t.isReversed,r=t.isVisible,o=Object(l.a)(e);return o.sort((function(t,e){switch(n){case"alphabetically":return e.localeCompare(t);case"length":return e.length-t.length;default:return 0}})),s&&o.reverse(),r?a.a.createElement("div",{className:"App"},a.a.createElement(h,{goods:o}),a.a.createElement("button",{type:"button",className:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),a.a.createElement("button",{type:"button",className:"button",onClick:this.reset},"Reset"),a.a.createElement("button",{type:"button",className:"button",onClick:this.sortByLength},"Sort by length"),a.a.createElement("button",{type:"button",className:"button",onClick:this.reverse},"Reverse")):a.a.createElement("button",{type:"button",onClick:this.showGoodsList,className:"startButton"},"Start")}}]),n}(a.a.PureComponent);o.a.render(a.a.createElement(p,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.c9b955a1.chunk.js.map