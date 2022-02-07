import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoSectionComponent } from './info-section/info-section.component';
import { FormSectionComponent } from './form-section/form-section.component';

@NgModule({
  declarations: [AppComponent, InfoSectionComponent, FormSectionComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
