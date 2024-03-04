import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sectionIds: string[] = ['about', 'projects', 'companies'];

  constructor(private elementRef: ElementRef,private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.scrollToElement('about');
    }, 100); 
   }

  @HostListener('window:scroll', [])
  onScroll() {
    this.setActiveLink();
  }

  scrollToElement(elementId: string): void {
    const currentUrl = this.router.url;
    console.log(currentUrl)
    if(currentUrl == '/music') {
      this.router.navigate(['/'])
      setTimeout(() => {
        const element = document.getElementById(elementId);
        console.log(element);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
      }, 100)
    }
    const element = document.getElementById(elementId);
    console.log(element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }

  private setActiveLink(): void {
    const activeLinkId = this.getActiveSectionId();
    if (activeLinkId) {
      this.sectionIds.forEach(sectionId => {
        const link = this.elementRef.nativeElement.querySelector(`[href="#${sectionId}"]`);
        if (link) {
          if (sectionId === activeLinkId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        }
      });
    }
  }

  private getActiveSectionId(): string | null {
    const buffer = 50;
    const scrollPosition = window.scrollY + buffer;
    for (let i = 0; i < this.sectionIds.length; i++) {
      const sectionId = this.sectionIds[i];
      const section = document.getElementById(sectionId);
      if (section) {
        const sectionTop = section.offsetTop - buffer;
        const sectionBottom = sectionTop + section.offsetHeight + buffer * -1;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          return sectionId;
        }
      }
    }
    return null;
  }
  

  isSectionActive(sectionId: string): boolean {
    const activeLinkId = this.getActiveSectionId();
    return activeLinkId === sectionId;
  }

}
