import { createReducer, on } from "@ngrx/store";
import { ProductState } from "./product.state";
import { productActionAdd, productActionLoadOnFail, productActionLoadOnSuccess, productActionRemove, productActionUpdate, productUpdateCurrency } from "./product.action";

const initialProductState : ProductState = {
    productList: [
        // { id: 1, name: "kalem", price: 100 },
        // { id: 2, name: "silgi", price: 50 },
    ],
    currency: "tr",
    error: undefined
}

export const productReducer = createReducer<ProductState>(initialProductState,
    on(productActionAdd, (state, action): ProductState => {
        console.log("productActionAdd Original State", state);
        return { ...state, productList: [...state.productList, action.productToAdd] };
    }),
    on(productActionRemove, (state, action): ProductState => {
        console.log("productActionRemove Original State", state);
        return { ...state, productList: state.productList.filter(x => x.id !== action.IdToDelete) };
    }),
    on(productActionUpdate, (state, action): ProductState => {
        console.log("productActionUpdate Original State", state);
        const updatedProductsList = state.productList.map(product => product.id == action.productToUpdate.id ? action.productToUpdate : product)
        return { ...state, productList: updatedProductsList };
    }),
    on(productUpdateCurrency, (state, action): ProductState => {
        console.log("productUpdateCurrency Original State", state);
        return { ...state, currency: action.currencyToUpdate };
    }),
    on(productActionLoadOnSuccess, (state, action): ProductState => {
        return { ...state, productList: action.products };
    }),
    on(productActionLoadOnFail, (state, action): ProductState => {
        return { ...state, error: action.error };
    }),

);