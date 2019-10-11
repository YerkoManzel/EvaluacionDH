import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonsModule} from './buttons/buttons.module';
import {TestButtonsComponent} from './buttons/test-buttons/test-buttons.component';
import {ButtonComponent} from './buttons/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TestButtonsComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
