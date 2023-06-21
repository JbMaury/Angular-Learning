import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title :string = 'demo-angular';
  valeurInput : string = 'une valeur venant du composant';
  info :string = '';
  zoneSaisie: any = "Saisissez votre nom";
  isTrue: boolean = false;
  informations: string[] = [
    'Vive les pommes de terre',
    'J\'adore  les patates'
  ];
  jour : string ='vendredi';
  classesAAppliquer = {
    'red' : this.informations.length <= 2,
    'green': this.informations.length > 2
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
    if(this.jour ==='vendredi') {
      this.jour = 'lundi';
    }else {
      this.jour = 'vendredi';
    }
  }
}
