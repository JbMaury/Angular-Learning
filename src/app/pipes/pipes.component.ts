import { Component } from '@angular/core';


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  // ATTRIBUTS
  dateJour : Date = new Date();
  monAnniversaire : Date = new Date('1984-03-01');
  identite : string = "joachim maury";
  caseState : string = 'lower';

  // METHODES
  toggleCase() :void {
    switch(this.caseState){
      case 'lower' : this.caseState = 'upper';
        break;
      case 'upper' : this.caseState = 'title';
        break;
      case 'title' : this.caseState = 'lower';
    }
  }

}
