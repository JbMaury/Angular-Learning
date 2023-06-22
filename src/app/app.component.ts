import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'Angular Beginner Learning';
  valeurInput : string = 'une valeur venant du composant';
  info :string = '';
  zoneSaisie: any = "Saisissez votre nom";
  isTrue: boolean = false;
  isModified : boolean = false;
  informations: string[] = [
    'L\'état qui engendre la règle est différent de celui que la règle engendre.',
    'Qui ne croit en lui-même, ment toujours.'
  ];
  jour : string ='vendredi';
  variableDynamique : number = 0;
  classesAUtiliser :any = {};
  dateJour : Date = new Date();
  monAnniversaire : Date = new Date('1984-03-01');
  identite : string = 'joachim maury'
  caseState : string = 'lower';
  toggleCase() {
    switch(this.caseState){
      case 'lower' : this.caseState = 'upper';
      break;
      case 'upper' : this.caseState = 'title';
      break;
      case 'title' : this.caseState = 'lower';
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
  onclickButton() :void {
    if(this.info == ''){
      this.info = 'Une information très intéressante';
    }else {
      this.info = '';
    }
    console.log('clic sur le bouton');
  }
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
}
