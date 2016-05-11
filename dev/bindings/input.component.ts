import {Component, EventEmitter} from 'angular2/core';


 @Component({
   selector: 'my-input',
   template: `
        <h1>Your details, please </h1>
        <div>
            <label>Your Name</label>
            <input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
        </div>
        <div>
            <label>Your Age</label>
            <input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
        </div>
        <br>
        <div>Filled out: {{isFilled ? 'Yes' : 'No'}}</div>
        <div>Valid: {{isValid ? 'Yes' : 'No'}}</div>
        <br>
        <button [disabled]="!isValid">Submit</button>

   `,
   outputs: ['submitted']

 })

 export class InputComponent {
    myself = {name: '', age: ''};
    isFilled = false;
    isValid = false;
    submitted = new EventEmitter<{name: string, age: string}>();

    onKeyup() {
        if (this.myself.name != '' && this.myself.age != '') {
          this.isFilled = true;
        } else {
          this.isFilled = false;
        }
        if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
          this.isValid = true;
        } else {
          this.isValid = false;
        }
    }

    onSubmit() {
        this.submitted.emit(this.myself);
    }
 }
