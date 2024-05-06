import { createReducer, on } from "@ngrx/store";
import { AppState, CounterState } from "./app.state";
import { actionDecreaseCounter, actionIncreaseCounter } from "./app.actions";

export const counterReducer = createReducer<CounterState>({ Counter: 0 },
    on(actionIncreaseCounter, (state): CounterState => {
        return { ...state, Counter: state.Counter + 1 };
    }),
    on(actionDecreaseCounter, (state): CounterState => {
        return { ...state, Counter: state.Counter - 1 };
    })
);
