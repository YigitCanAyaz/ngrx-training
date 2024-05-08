import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductState, ProductStateModel } from '../state/product.state';
import { getProductsSelector } from '../state/product.selector';
import { productActionAdd, productActionRemove, productActionUpdate, productUpdateCurrency } from '../state/product.action';

@Component({
  selector: 'app-product-a',
  templateUrl: './product-a.component.html',
  styleUrls: ['./product-a.component.css']
})
export class ProductAComponent implements OnInit {
  productList: ProductStateModel[] = [];
  constructor(private productStore: Store<ProductState>) {

  }
  ngOnInit(): void {
    this.productStore.select(getProductsSelector).subscribe(x => {
      this.productList = x;
    });
  }

  addProduct() {
    const randomProductId = Math.floor(Math.random() * 1000);
    const newProduct : ProductStateModel = {id: randomProductId, name: `kalem ${randomProductId}`, price: randomProductId * 200}
    this.productStore.dispatch(productActionAdd({productToAdd: newProduct}));
  }

  updateCurrency(currency : any) {
    this.productStore.dispatch(productUpdateCurrency({currencyToUpdate: currency}));
  }

  updateProduct(id : any) {
    console.log(id);
    const productToUpdate : ProductStateModel = {id : id, name: "defter", price: 200};

    this.productStore.dispatch(productActionUpdate({productToUpdate: productToUpdate}));
  }

  removeProduct(id : any) {
    this.productStore.dispatch(productActionRemove({IdToDelete: id}));
  }
}
