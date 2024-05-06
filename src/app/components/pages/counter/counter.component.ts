import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { actionDecreaseCounter, actionIncreaseCounter } from 'src/app/state/app.actions';
import { getCounterSelector } from 'src/app/state/app.selectors';
import { CounterState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnDestroy{

  counterSubscription? : Subscription;

  constructor(private store : Store<CounterState>) {
    
  }

  ngOnInit(): void {
    this.counterSubscription = this.store.select(getCounterSelector).subscribe(x => {
      console.log("Counter 1", x);
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
