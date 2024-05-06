import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { actionIncreaseCounter, actionDecreaseCounter } from 'src/app/state/app.actions';
import { getCounterSelector } from 'src/app/state/app.selectors';
import { CounterState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit, OnDestroy{

  counterSubscription? : Subscription;

  constructor(private store : Store<CounterState>) {
    
  }

  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounterSelector).subscribe(x => {
      console.log("Counter 2", x);
    })
  }

  ngOnDestroy(): void {
    this.counterSubscription?.unsubscribe();
  }

  increaseCounter() {
    this.store.dispatch(actionIncreaseCounter())
  }

  decreaseCounter() {
    this.store.dispatch(actionDecreaseCounter())
  }
}