import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import  {MatDialogModule } from '@angular/material/dialog';
import { EditComponent } from './dialog2/edit.component'
import {ToastrModule} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    EditComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      progressBar: true,
      closeButton: true,
      preventDuplicates: true

    }),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }