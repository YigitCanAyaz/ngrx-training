import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer, userReducer } from './state/app.reducers';
import { CounterComponent } from './components/pages/counter/counter.component';
import { Counter2Component } from './components/pages/counter2/counter2.component';
import { ProductModule } from './components/product/product.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    Counter2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductModule,
    StoreModule.forRoot({"counterStoreSlice": counterReducer, "userStoreSlice": userReducer}, {}),
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
