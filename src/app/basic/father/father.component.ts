import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  public client?: Client; // declaracion de la variable cliente

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * @description Metodo para cargar el cliente
   */
  onSetClient( name: string ){
    this.client = { id: 1, name }
  }

}
