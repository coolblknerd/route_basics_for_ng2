import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LuxuryComponent } from './luxury.component';

@NgModule({
  imports: [
    CommonModule, // <-- required for feature modules
    RouterModule.forChild([
      {path: 'luxury', component: LuxuryComponent}
    ])
  ],
  declarations: [LuxuryComponent]
})
export class LuxuryModule { }
