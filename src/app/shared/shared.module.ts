import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule // Needed for links in the footer
  ],
  exports: [
    FooterComponent // Exporting it makes it visible to other modules
  ]
})
export class SharedModule { }