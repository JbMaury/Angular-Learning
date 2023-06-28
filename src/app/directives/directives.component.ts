import {Component} from '@angular/core';



@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  // ATTRIBUTS
  isTrue : boolean = false;
  informations : string[] = [
    'L\'état qui engendre la règle est différent de celui que la règle engendre.',
    'Qui ne croit en lui-même, ment toujours.'
  ];
  jour: string = 'vendredi';
  variableDynamique: number = 0;
  classesAUtiliser :any = {};
  isModified : boolean = false;

  // METHODES
  toggleView() : void {
    this.isTrue = !this.isTrue;
  }
  changeDay() :void {
    let randNum = Math.floor(Math.random()*11);
    if(randNum !== 10) {
      if (this.jour === 'vendredi') {
        this.jour = 'lundi';
      } else {
        this.jour = 'vendredi';
      }
    }else {
      this.jour = '???';
    }
  }
  changerClasses() {
    this.classesAUtiliser =
      {
        normal : !this.isModified,
        modified: this.isModified
      }
  }
  toggleModification() : void {
    this.isModified = !this.isModified;
    this.changerClasses();
  }
}
