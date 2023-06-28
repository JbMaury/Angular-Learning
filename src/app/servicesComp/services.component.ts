import { Component } from '@angular/core';
import {ReglesMetiersService} from "../services/regles-metiers.service";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {
  // ATTRIBUTS
  nombres : number[] = [1, 3, 4, 8, 11, 15, 16, 23];

  // CONSTRUCTEUR
  constructor(private reglesMetiersServices : ReglesMetiersService){

  }

  // METHODES
  getClasses(nombre : number) {
    const isEven = this.reglesMetiersServices.isEven(nombre);
    return {'vert' : isEven, 'rouge' : !isEven };
  }

}
