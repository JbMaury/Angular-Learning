import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EnTeteComponent } from './en-tete/en-tete.component';
import { PiedDePageComponent } from './pied-de-page/pied-de-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SaisieComponent } from './saisie/saisie.component';
import { AffichageComponent } from './affichage/affichage.component';
import { SaisiePersonneComponent } from './saisie-personne/saisie-personne.component';
import { AffichagePersonnesComponent } from './affichage-personnes/affichage-personnes.component';
import {RouterModule, Routes} from "@angular/router";
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './servicesComp/services.component';
import {MatCardModule} from "@angular/material/card";
import {HighlighServiceService} from "./services/highligh-service.service";


const appRoutes : Routes = [
  {path : 'binding', component : BindingComponent},
  {path: 'directives', component : DirectivesComponent},
  {path: 'pipes', component : PipesComponent},
  {path: 'services', component : ServicesComponent},
  {path : '', component : BindingComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EnTeteComponent,
    PiedDePageComponent,
    SideMenuComponent,
    SaisieComponent,
    AffichageComponent,
    SaisiePersonneComponent,
    AffichagePersonnesComponent,
    BindingComponent,
    DirectivesComponent,
    PipesComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
  ],
  providers: [HighlighServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
