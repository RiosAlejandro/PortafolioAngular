import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/interfaces/proyectos.interface';
import { ProyectosService } from '../../services/proyectos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  proyectos: Proyectos[] = [];

  constructor( private ProyectosService: ProyectosService ) { }

  ngOnInit(): void {
    this.getProyectos()
  }

  getProyectos(): void{
      this.ProyectosService.getProyectos()
                              .subscribe(proyectos => this.proyectos = proyectos );
  }

}
