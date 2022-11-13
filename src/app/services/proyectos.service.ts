import { Injectable } from '@angular/core';
import { Proyectos } from '../interfaces/proyectos.interface';
import { PROYECTOS } from '../services/mock.proyectos';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  constructor() { }

  getProyectos(): Observable<Proyectos[]> {
    const proyectos = of(PROYECTOS);
    return proyectos;
  }

}
