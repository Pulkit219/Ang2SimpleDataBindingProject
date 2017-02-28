import {Component} from 'angular2/core';
import {ShoppingListcomponent} from './shoppingList.component';


@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 </h1>
        <p>Hello World!!!!!!!</p>
        <shopping-list></shopping-list>
    `,
    directives:[ShoppingListcomponent]
})
export class AppComponent {

}