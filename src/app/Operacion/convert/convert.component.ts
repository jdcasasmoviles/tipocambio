import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Moneda } from '../../Modelo/Moneda';


@Component({
  selector: 'app-convert',
  templateUrl: './convert.component.html',
  styleUrls: ['./convert.component.css']
})
export class ConvertComponent implements OnInit {
  moneda:Moneda=new Moneda();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  Guardar(){
    this.service.convertMoneda(this.moneda)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }

}
