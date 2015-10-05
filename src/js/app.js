// var AppComponent = ng
//     .Component({
//       selector: 'my-app'
//     })
//     .View({
//       template: '<h1 id="output">My First Angular 2 App</h1>'
//     })
//     .Class({
//       constructor: function () { }
//     });

// console.log('normal');

// ES5


function DisplayComponent() {
  this.myName = "Alice";
}
DisplayComponent.annotations = [
  new ng.ComponentAnnotation({
    selector: "my-app"
  }),
  new ng.ViewAnnotation({
    template:
       '<p>My name: {{ myName }}</p>'
  })
];

document.addEventListener('DOMContentLoaded', function() {
  ng.bootstrap(DisplayComponent);
});