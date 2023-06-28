import {Inject, Injectable} from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import core from 'highlight.js/lib/core';

@Injectable({
  providedIn: 'root'
})
export class HighlighServiceService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  highlightAll(){
      core.highlightAll();
  }
}
