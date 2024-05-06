export interface AppState {
    
}

export interface CounterState extends AppState {
    Counter: number
}

export interface UserState extends AppState {
    userStateModel: UserState;
}

export interface UserStateModel {
    userId:number;
    userName: string;
    userEmail: string;
}