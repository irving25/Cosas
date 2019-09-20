import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent  {

  agregarPersona=false;
  agregarPersonaStatus="No se ha agregado nada";
  tituloPersona = "Hola";

  constructor() { 
      setTimeout(
        () => {
        this.agregarPersona = true;
      }
      ,1000);

    }

    onCrearPersona(){
      this.agregarPersonaStatus="persona agregada";
    }
    onModificarPersona(event: Event){
      this.tituloPersona = (<HTMLInputElement>event.target).value;
    }

}
