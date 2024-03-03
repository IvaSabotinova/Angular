import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe01', 'Test01 recipe description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQ6Kw3O_4BSqCWge35jHy4zqmi1G_X5t33Sb6swTLTp6REsdFVKIPLK_onn54xLETGr8&usqp=CAU'),
    new Recipe('Test recipe02', 'Test02 recipe description', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
  ];
  constructor() { }
}
