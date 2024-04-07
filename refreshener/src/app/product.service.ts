import { Subject } from "rxjs";

export class ProductService {
    products = ['Furniture', 'Computer', 'Food', 'Beverage'];
    productsUpdated = new Subject();

    addProduct(productName: string) {
        this.products.push(productName);
        this.productsUpdated.next(this.products);
    }

    getProducts() {
        return [...this.products];
    }

    deleteProduct(product: string) {
        this.products = this.products.filter(x => x !== product);
        this.productsUpdated.next(this.products);
    }
}