import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { isDevMode } from '@angular/core';
import {enableProdMode} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tipocambio';
  
  constructor(private router:Router){
    console.log(isDevMode());
  
  }

  Listar(){
    this.router.navigate(["listar"]);
  }
  Convertir(){
    this.router.navigate(["convert"]);
  }
}
