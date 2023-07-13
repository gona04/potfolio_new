import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface imageNeeds {
  icon_address: string,
  workLink: string, 
  alt_text: string,
  class_name: string
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  displayloop:imageNeeds[] = []

  constructor(router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(event => {
        console.log(event);
        let newEvent:any = event

        if(newEvent.url == "/it_work") {
          this.displayloop = [];
          this.displayloop.push({alt_text: "linkedin", icon_address: "../../assets/icons/linkedin.svg", workLink: "https://in.linkedin.com/in/goonja-gandhi-66a64526", class_name: "linkedin-styling"})
          this.displayloop.push({alt_text: "github_link", icon_address: "../../assets/icons/github.svg", workLink:"https://github.com/gona04", class_name: "github-styling"})
        } else if( newEvent.url == "/music_work" ) {
          this.displayloop = [];
          this.displayloop.push({alt_text:"IDBM link", icon_address: "../../assets/icons/imdb.svg", workLink:"https://www.imdb.com/name/nm9123904/", class_name:"imdb-styling"})
          this.displayloop.push({alt_text: "Sound Cloud", icon_address: "../../assets/icons/soundcloud.svg", workLink:"https://soundcloud.com/goonja-gandhi", class_name:"soundcloud-styling"})
          this.displayloop.push({alt_text: "Youtube Link", icon_address: "../../assets/icons/youtube-gray.svg", workLink: "https://www.youtube.com/@goonjagandhi4090", class_name: "youtube-styling"})
        }
      });
  }

  ngOnInit(): void {
  }

}
