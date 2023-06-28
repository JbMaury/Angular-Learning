import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {GestionPersonnesService} from "../services/gestion-personnes.service";
import {Personne} from "../models/personne";

@Component({
  selector: 'app-saisie-personne',
  templateUrl: './saisie-personne.component.html',
  styleUrls: ['./saisie-personne.component.css']
})
export class SaisiePersonneComponent {
  // @ts-ignore
  angularForm: FormGroup;
  nom : string = '';
  prenom: string = '';

  constructor(private formBuilder: FormBuilder,
              private gestionPersonnes: GestionPersonnesService) {
    this.creerFormulaire();
  }

  private creerFormulaire() {
    this.angularForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  nomInvalide() {
    return this.champInvalide('nom');
  }

  prenomInvalide() {
    return this.champInvalide('prenom');
  }

  onEnregistrer() {
    if(!this.problemeValidation()) {
      // @ts-ignore
      this.gestionPersonnes.ajouter(new Personne(this.angularForm.controls.nom.value, this.angularForm.controls.prenom.value));
      this.angularForm.reset();
    }
  }

  problemeValidation() {
    return this.angularForm.pristine || this.angularForm.invalid;

  }

  private champInvalide(champ: string) {
    return this.angularForm.controls[champ].invalid &&
      (this.angularForm.controls[champ].dirty ||
       this.angularForm.controls[champ].touched);
  }
}
