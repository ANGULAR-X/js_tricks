(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{173:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h2",{attrs:{id:"mutationobserver"}},[t._v("MutationObserver")]),t._v(" "),s("p",[t._v("Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。")]),t._v(" "),s("p",[t._v("DOM 的变动会触发 Mutation Observer 事件，但与事件不同的是，Mutation Observer 是异步触发，也就是说，Mutation Observer 事件会在所有的 DOM 操作完成后才触发一次。")]),t._v(" "),s("h3",{attrs:{id:"实例"}},[t._v("实例")]),t._v(" "),s("p",[t._v("回调函数接受两个参数，一个是变动的数组，一个是观察器实例")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" observer "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("MutationObserver")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutations"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" observer"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  mutations"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("forEach")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("function")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("log")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mutation"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"方法"}},[t._v("方法")]),t._v(" "),s("h4",{attrs:{id:"_1-observe"}},[t._v("1. observe")]),t._v(" "),s("p",[s("code",[t._v("observe")]),t._v("方法用来启动监听，它接受两个参数")]),t._v(" "),s("p",[t._v("第一个是需要观察的节点")]),t._v(" "),s("p",[t._v("第二个是配置对象，配置项的前三项必须至少设置一项，否则会报错")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" container "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("querySelector")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v("'.container'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nobserver"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("observe")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  childList"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 子节点的变动（指新增，删除或者更改）")]),t._v("\n  attributes"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 属性的变动")]),t._v("\n  characterData"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token boolean"}},[t._v("true")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 节点内容或节点文本的变动")]),t._v("\n  subtree"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 是否将该观察器应用于该节点的所有后代节点")]),t._v("\n  attributeOldValue"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 观察attributes变动时，是否需要记录变动前的属性值")]),t._v("\n  characterDataOldValue"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token boolean"}},[t._v("false")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 表示观察characterData变动时，是否需要记录变动前的值")]),t._v("\n  attributeFilter"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{attrs:{class:"token comment"}},[t._v("// 表示需要观察的特定属性,如 ['class','src']")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"_2-disconnect"}},[t._v("2.disconnect")]),t._v(" "),s("p",[s("code",[t._v("disconnect()")]),t._v("方法用来停止观察")]),t._v(" "),s("h4",{attrs:{id:"_3-takerecords"}},[t._v("3. takeRecords")]),t._v(" "),s("p",[s("code",[t._v("takeRecords()")]),t._v("方法用来清除变动记录，即不再处理未处理的变动。该方法返回变动记录的数组。")]),t._v(" "),s("h3",{attrs:{id:"mutationrecord"}},[t._v("MutationRecord")]),t._v(" "),s("p",[t._v("DOM 每次发生变化，就会生成一条变动记录（MutationRecord 实例）。该实例包含了与变动相关的所有信息。Mutation Observer 返回的第一个参数就是一个个MutationRecord实例所组成的数组。")]),t._v(" "),s("p",[s("code",[t._v("MutationRecord")]),t._v("中包含的信息")]),t._v(" "),s("ul",[s("li",[t._v("type：观察的变动类型（attribute、characterData或者childList）。")]),t._v(" "),s("li",[t._v("target：发生变动的DOM节点。")]),t._v(" "),s("li",[t._v("addedNodes：新增的DOM节点。")]),t._v(" "),s("li",[t._v("removedNodes：删除的DOM节点。")]),t._v(" "),s("li",[t._v("previousSibling：前一个同级节点，如果没有则返回null。")]),t._v(" "),s("li",[t._v("nextSibling：下一个同级节点，如果没有则返回null。")]),t._v(" "),s("li",[t._v("attributeName：发生变动的属性。如果设置了attributeFilter，则只返回预先指定的属性。")]),t._v(" "),s("li",[t._v("oldValue：变动前的值。这个属性只对attribute和characterData变动有效，如果发生childList变动，则返回null。")])])])}],!1,null,null,null);e.options.__file="mutationObserver.md";a.default=e.exports}}]);