import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReglesMetiersService {

  constructor() { }

  public isEven(nombre : number) : boolean {
    return nombre ? nombre%2 == 0 : false;
  }
}
