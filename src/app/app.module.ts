import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Operacion/listar/listar.component';
import { ConvertComponent } from './Operacion/convert/convert.component';
import{HttpClientModule}from '@angular/common/http';
import{FormsModule}from '@angular/forms';
import{ServiceService}from '../app/Service/service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    ConvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
