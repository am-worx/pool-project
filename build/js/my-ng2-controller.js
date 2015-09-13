// class Shape {
//     constructor (id, x, y) {
//         this.id = id
//         this.move(x, y)
//     }
//     move (x, y) {
//         this.x = x
//         this.y = 123456
//     }
// }

'use strict';

var AppComponent = ng.Component({
  selector: 'my-app'
}).View({
  template: '<h1 id="output">My First Angular 2 App</h1>'
}).Class({
  constructor: function constructor() {}
});