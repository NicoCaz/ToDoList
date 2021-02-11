import { Component, OnInit,Input } from '@angular/core';
import {Tarea} from '../../models/tarea.model';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() listaTareas:Tarea[];

  constructor() { 
    this.listaTareas=[];
  }

  ngOnInit(): void {
  }


 
  onClick(tarea:Tarea){
    tarea.completo=!tarea.completo;
  }
  onClickBorrar(indice:any){
    this.listaTareas.splice(indice,1);
  }

}
