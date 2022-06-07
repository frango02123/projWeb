import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { FormDialogComponent } from './form-dialog/form-dialog.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    FormDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'pt-br' } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
