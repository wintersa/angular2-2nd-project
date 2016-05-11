import {Component, EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core'

@Component({
  selector: 'my-property-binding',
  template: `
      <h2>This is the child component.</h2>
      <p>Welcome {{name}}! you are {{age}} years old!</p>
      <h4>My Hobbies are:</h4>
      <input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
  `,
  inputs: ['name:myName', 'age:myAge'],
  outputs: ['hobbiesChanged']
})

export class PropertyBindingComponent{
    name = '';
    @Input('myAge') age = 20;
    hobbiesChanged = new EventEmitter<string>();

    onHobbiesChanged(hobbies: string) {
        this.hobbiesChanged.emit(hobbies);
    }
}
