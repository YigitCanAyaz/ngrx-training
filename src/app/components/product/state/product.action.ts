import { createAction, props } from "@ngrx/store";
import { ProductStateModel } from "./product.state";

export const productActionAdd = createAction("Add Product Action", props<{productToAdd: ProductStateModel}>());
export const productActionUpdate = createAction("Update Product Action", props<{productToUpdate: ProductStateModel}>());
export const productActionRemove = createAction("Remove Product Action", props<{IdToDelete: number}>());
export const productUpdateCurrency = createAction("Product Currency Update Action", props<{currencyToUpdate: string}>());