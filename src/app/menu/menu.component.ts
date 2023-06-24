import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const navbarLinks = Array.from(document.querySelectorAll('.navbar-nav a'));

    window.addEventListener('scroll', () => {
      const currentPosition = window.pageYOffset;

      for (const link of navbarLinks) {
        const sectionId = link.getAttribute('href');

        if (sectionId && sectionId.startsWith('#')) {
          const section = document.querySelector(sectionId);

          if (section) {
            const rect = section.getBoundingClientRect();
            const top = rect.top + currentPosition - 100;
            const bottom = top + rect.height;

            if (currentPosition >= top && currentPosition <= bottom) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          }
        }
      }
    });
  }

}
