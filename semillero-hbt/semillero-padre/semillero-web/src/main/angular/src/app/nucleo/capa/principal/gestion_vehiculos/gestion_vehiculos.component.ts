import { Component, OnInit } from '@angular/core';
import { VehiculoDTO } from './modelo/vehiculoDTO';

@Component({
  selector: 'app-gestion_vehiculos',
  templateUrl: './gestion_vehiculos.component.html'
})
export class GestionVehiculosComponent implements OnInit {
  public vehiculo:VehiculoDTO;
  
  constructor() { }

  ngOnInit() {
  	this.vehiculo = { marca: 'Renault', placa: 'CSA837', linea: '', modelo:'', color:''   };
  }

}
