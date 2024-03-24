import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService{
    private ingredients: Ingredient[] = [
        new Ingredient('Apples',5),
        new Ingredient('Tomatoes',10),
        new Ingredient('Cucumbers',15),
      ];

      allIngredients = new EventEmitter<Ingredient[]>();

      addIngredient(newIngredient: Ingredient){
        this.ingredients.push(newIngredient); 
        this.allIngredients.emit(this.ingredients.slice());   
      }

      getIngredients(){
        return this.ingredients.slice();
      }

      addIngredients(ingredients: Ingredient[]){
        this.ingredients.push(...ingredients);
        this.allIngredients.emit(this.ingredients.slice());
      }
      
}