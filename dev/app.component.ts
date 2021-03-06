import {Component} from 'angular2/core';
import {MyComponentComponent} from './my-component.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Here comes my own component!</p>
        <my-component></my-component>

    `,
    directives:[MyComponentComponent]
})
export class AppComponent {

}
