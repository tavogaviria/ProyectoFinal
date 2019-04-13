import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { AbstractService } from '../template.service';
import { VehiculoDTO } from '../../capa/principal/gestion_vehiculos/modelo/vehiculoDTO';
import { PersonaServicioDTO } from '../../capa/principal/gestion_vehiculos/modelo/personaServicioDTO';

@Injectable({
  providedIn: 'root'
})
export class ConsultaVehiculosService extends AbstractService {
	
  public vehiculo: VehiculoDTO;
  public listaVehiculoDTO: VehiculoDTO[];
  
  /**
   * Constructor
   */
  constructor(injector: Injector) {
    super(injector);
  }

 public consultarPersonas(tipoID: string, numID: string):  Observable<PersonaServicioDTO[]> {
 	return this.get<PersonaServicioDTO[]>("/semillero-servicios", "/ConsultasRest/consultarPersonas",
	{
        "tipoID":tipoID, 
        "numID":numID,
      });
 }
 
 //Cambiar rest
 public consultarListaVehiculos() : Observable<VehiculoDTO> { 
  	return this.get<VehiculoDTO>("/semillero-servicios", "/ConsultasRest/consultarVehiculos");
 }
  
  public consultarVehiculo(placa: string) : Observable<VehiculoDTO> { 
	  return this.get<VehiculoDTO>("/semillero-servicios", "/ConsultasRest/consultarVehiculo",
	      {
	        "placa":placa
	      });
  }

  //** nos permite hacer la consulta de los vehiculos que pertenecen a una linea */
  public consultarVehiculosPorLinea(linea: string) : Observable<VehiculoDTO> { 
	  return this.get<VehiculoDTO>("/semillero-servicios", "/ConsultasRest/consultarVehiculoPorLinea",
	      {
	        "linea":linea
	      });
  }

  //** nos permite hacer la consulta de los vehiculos que pertenecen a una marca */
  public consultarVehiculosPorMarca(marca: string) : Observable<VehiculoDTO> { 
	  return this.get<VehiculoDTO>("/semillero-servicios", "/ConsultasRest/consultarVehiculoPorMarca",
	      {
	        "marca":marca
	      });
  }

}
