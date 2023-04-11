import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Client } from '../interfaces';

@Component({
  selector: 'app-father-son',
  templateUrl: './father-son.component.html',
  styleUrls: ['./father-son.component.scss']
})
export class FatherSonComponent implements OnInit {

  // Capturar el valor del padre con @Input
  @Input() client?: Client

  // emitir evento
  @Output() onDeleteClient = new EventEmitter();

  // emitir objeto
  @Output() onClientUpdated = new EventEmitter<Client>();

  constructor() { }

  ngOnInit(): void {
  }


  /**
   * @description Metodo para disparar el evento
   */
  onDelete(){
    this.client = undefined; // eliminar el cliente
    this.onDeleteClient.emit(); // indicarle al padre que se elimino el cliente
  }


  /**
   * @description Metodo para realizar el cambio del id al cliente
   * @param id
   */
  onChangeId(id: number){
    if(!this.client) return; // validacion si el cliente no existe que no haga nada es

    // si el cliente existe
    // this.client.id = newId; // no usar ya que actualiza  tanto padre como hijo ya que pasa pro referencia

    this.client = { ...this.client, id}; // romper la referencia por medio del spread de ese cliente

    // emision del evento
    this.onClientUpdated.emit({...this.client});

  }

}
