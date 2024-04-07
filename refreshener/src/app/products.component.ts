import { NgIf } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormControl, NgForm } from "@angular/forms";
import { Subscription } from "rxjs";

import { ProductService } from "./product.service";

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    // styleUrl: './product.component.css'
})
export class ProductsComponent implements OnInit, OnDestroy {
    productName = 'A book';
    isDisabled = true;
    // products = ['Furniture', 'Computer', 'Food', 'Beverage'];
    products = [];
    private productsSubscription: Subscription

    constructor(private productService: ProductService) {

        setTimeout(() => {
            this.productName = 'A notebook';
            this.isDisabled = false;
        }, 3000)
    }

    ngOnInit(): void {
        this.products = this.productService.getProducts();
        this.productsSubscription = this.productService.productsUpdated.subscribe(() => {
            this.products = this.productService.getProducts();
        });

    }

    onAddProduct(form: NgForm) {
        if (form.valid) {
            console.log(form);
            //  this.products.push(form.value.productName);
            this.productService.addProduct(form.value.productName);
            console.log(this.products);

        }
    }

    // onRemoveProduct(product: string) {
    //    this.products = this.products.filter(x => x !== product);
    // }

    ngOnDestroy(): void {
        this.productsSubscription.unsubscribe();
    }

}