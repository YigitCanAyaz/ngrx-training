import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductState } from "./product.state";
import { state } from "@angular/animations";

const getProductState = createFeatureSelector<ProductState>("ProductSliceState");

export const getProducts = createSelector(getProductState, state => state.productList);

export const getProductCurrency = createSelector(getProductState, state => state.currency);

export const getProductById = (productId: number) => createSelector(getProductState, (state) => {
    return state.productList.find(x => x.id === productId);
});