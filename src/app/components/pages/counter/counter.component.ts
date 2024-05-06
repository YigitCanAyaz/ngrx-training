import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { actionDecreaseCounter, actionIncreaseCounter } from 'src/app/state/app.actions';
import { getCounterSelector, getUserStateModelSelector } from 'src/app/state/app.selectors';
import { CounterState, UserState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy{

  counterSubscription? : Subscription;
  userSubscription? : Subscription;

  constructor(private store : Store<CounterState>, private userStore : Store<UserState>) {
    
  }

  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounterSelector).subscribe(x => {
      console.log("Counter 1", x);
    })

    this.userSubscription = this.userStore.select(getUserStateModelSelector).subscribe(x => {
      console.log("counter", x)
    });
  }

  ngOnDestroy(): void {
    this.counterSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }

  increaseCounter() {
    this.store.dispatch(actionIncreaseCounter())
  }

  decreaseCounter() {
    this.store.dispatch(actionDecreaseCounter())
  }
}
