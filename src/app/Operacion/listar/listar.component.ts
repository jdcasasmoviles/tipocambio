import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { Cambio } from '../../Modelo/Cambio';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  cambios: Cambio[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getCambios()
      .subscribe(data => {
        this.cambios = data;
      });
  }

}
