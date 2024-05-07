import { AppState } from "src/app/state/app.state";

export interface ProductState extends AppState {
    productList: ProductStateModel[];
    currency: string;
}

export interface ProductStateModel {
    id: number;
    name: string;
    price: number;
}