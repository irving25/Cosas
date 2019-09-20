import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

    nombrePersona:string = "irving";
    apellidoPersona:string = "guzman";
    edad:number = 22;
   
    getEdad():number{
      return this.edad;
    }

  ngOnInit() {
  }

}
