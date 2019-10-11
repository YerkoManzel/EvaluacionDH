import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestButtonsComponent } from './test-buttons/test-buttons.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [TestButtonsComponent, ButtonComponent],
  imports: [
    CommonModule
  ]
})
export class ButtonsModule { }
