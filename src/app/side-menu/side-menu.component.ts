import {Component, ElementRef, inject, ViewChild, AfterViewInit, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MatSidenav} from "@angular/material/sidenav";
import {Router, NavigationEnd} from "@angular/router";
import core from 'highlight.js/lib/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent{
  title :string = 'Angular Beginner Learning';
  private breakpointObserver = inject(BreakpointObserver);
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  // @ts-ignore
  @ViewChild('drawer') drawer: MatSidenav;
  // @ts-ignore
  @ViewChild('toolbar') toolbar: ElementRef;
  closeDrawer() {
    if (this.drawer && this.drawer.mode === 'over') {
      this.drawer.close();
    }
  }
}
