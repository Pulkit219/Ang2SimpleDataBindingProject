import { Component } from 'angular2/core';

@Component({
    selector: "shopping-list",
    template:`<h1>hello word from shopping</h1>
    <ul>
       <li 
       *ngFor = "#shoppingListItem of shoppingListItems"
       (click)="onItemClicked(shoppingListItem)"
       >{{shoppingListItem.name}}</li>
    
    </ul>
    <input type="text" [(ngModel)]= "selectedItem.name" #shoppingListItem>
    <br>
    <button (click) ="addItem(shoppingListItem)">add item </button>
    <button (click) ="removeItem()">remove item </button>`,
})

export class ShoppingListcomponent{

    public shoppingListItems = [{name:"milk"}, {name:"apple"}, {name:"banana"}];
    public selectedItem = {name:""};

onItemClicked(shoppingListItem){
this.selectedItem = shoppingListItem;
}
addItem(shoppingListItem){
this.shoppingListItems.push({name: shoppingListItem.value});
}
removeItem(){
this.shoppingListItems.shift();
}
}