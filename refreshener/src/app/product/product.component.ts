import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() productName: string;
  @Output() productClicked = new EventEmitter()

  constructor(private productService: ProductService){}

  onClicked() {    
   //this.productClicked.emit();
   this.productService.deleteProduct(this.productName)
  }
}
