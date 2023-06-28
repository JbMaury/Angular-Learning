import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  // ATTRIBUTS
  title: string = "Angular Beginner Project";
  valeurInput : string = 'une valeur venant du composant';
  info : string = '';
  zoneSaisie : string ='Saisissez votre nom';
  // METHODES
  onclickButton() :void {
    if(this.info == ''){
      this.info = 'Une information très intéressante';
    }else {
      this.info = '';
    }
  }
}
