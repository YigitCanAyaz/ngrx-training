import { createAction, props } from "@ngrx/store";
import { UserState, UserStateModel } from "./app.state";

export const actionIncreaseCounter = createAction("Increase Counter");
export const actionDecreaseCounter = createAction("Decrease Counter");

export const actionUpdateUserStateModel = createAction("action update user StateModel", props<{user: UserStateModel}>());