import {Component} from 'angular2/core';

@Component({
  selector: 'my-component',
  template: `
    This is my component by <span [style.color]="inputElement.value === 'yes' ? 'red' : '' ">{{name}}</span> and this is my first very angular 2 component!
    <span [class.is-awesome]="inputElement.value === 'yes'">It's so awesome!</span>
    <br />
    <br />
    Is it awesome?
    <br />
    <input type="text" #inputElement (keyup)="0" />
    <br /><br />
    <button [disabled]="inputElement.value !== 'yes'">Only enabled if 'yes' was entered</button>
  `,
  styleUrls: ['src/css/mycomponent.css']
})
export class MyComponentComponent {
  name = 'G-Man';
}
