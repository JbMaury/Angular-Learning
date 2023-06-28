import {Component, OnDestroy, OnInit} from '@angular/core';
import {GestionsDatasService} from "../services/gestions-datas.service";

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.css']
})
export class AffichageComponent implements OnInit, OnDestroy{

  private datasSaisies: string[] =[];
  constructor(private gestionDatas : GestionsDatasService){

  }

  ngOnInit(): void {
    this.gestionDatas
        .emetteurDesSaisies.subscribe((value) => this.datasSaisies = value);
  }

  ngOnDestroy() {
    this.gestionDatas.emetteurDesSaisies.unsubscribe();
  }

  getDataSaisies() : string[] {
    return this.datasSaisies;
  }


}
