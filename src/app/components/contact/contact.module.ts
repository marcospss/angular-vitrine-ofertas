import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';

import { ContactRoutingModule } from './contact-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule
  ],
  declarations: [FormComponent]
})
export class ContactModule { }
