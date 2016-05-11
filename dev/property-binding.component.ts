import {Component} from 'angular2/core';

@Component({
  selector: 'my-property-binding',
  template: `
      <h2>This is the child component.</h2>
      <p>Welcome {{name}}! you are {{age}} years old!</p>
  `,
  inputs: ['name:myName', 'age:myAge']
})

export class PropertyBindingComponent{
    name = '';
    age = 20;
}
