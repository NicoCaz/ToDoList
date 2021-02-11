import { Component } from '@angular/core';
import {Tarea} from './models/tarea.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDoList';

  listaTareas:Tarea[];

  constructor(){
    this.listaTareas=[];
  }

  onTareaCreada($event:any){
    this.listaTareas.push($event);
    console.log(this.listaTareas);

  }
}
