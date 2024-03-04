import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})
export class CompaniesComponent implements OnInit {

  slides = [
    // {url: 'assets/coworkers/Abhishek.png',name: 'Abhishek Pawaskar' , title: 'Senior Co-worker at Tata Consultancy Services', review: "Goonja is really a good software developer she always have out of the box thinking with creativity."},
    {url: 'assets/coworkers/Nikita.png', name: 'Nikita Ahluwalia' ,title: 'Managed me directly at Tata Consultancy Services', review: "I had the pleasure of working with Goonja for 2 years as a frontend developer. Throughout our time together, I was consistently impressed by her dedication, enthusiasm, and eagerness to learn.Goonja is a quick learner and picked up new technologies and concepts with ease. She demonstrated a solid understanding of HTML, CSS, and JavaScript, which translated into delivering high-quality code and contributing effectively to our projects.Moreover, her collaborative nature and positive attitude made her a valuable asset to our team. She was always willing to help and share ideas, which fostered a great working environment.I have no doubt that Goonja will continue to grow at anything she puts her mind to and bring valuable contributions to any team. I highly recommend her and wish her all the best in her future endeavors."},
    {url: 'assets/coworkers/Alberto.png', name: 'Alberto Mejia' ,title: 'Client of Tata Consultancy Services from Veolia in Canada', review: "Goonja is a highly professional IT developer with extensive knowledge and experience in designing and developing Front End - UI solutions. I strongly recommend Goonja for any IT project that requires a high level of achievement."}
  ];

  // projects = [
  //   {languageName: 'Kotlin', projectName: 'Dice Roll', src: 'https://www.youtube.com/embed/uaUfEcrgm-s?start=210&end=360', gitHub: 'https://github.com/gona04/DiceRollingApp/tree/main'},
  //   {languageName: 'Android', projectName: "ToDo list app", src: "https://www.youtube.com/embed/bfCgem1TEaA?start=3&end=290", gitHub: "https://github.com/gona04/TodoList"},
  //   {languageName: 'DBA', projectName: 'Local Library', src: "https://www.youtube.com/embed/-a1dzoOIVHw", gitHub: "https://github.com/gona04/dba_project"},
  //   {languageName: 'iOS App', projectName: "Number Guesser Job", src: "https://www.youtube.com/embed/yVgt_I7Zwwc", gitHub: "https://github.com/gona04/Number-Guesser-App"}
  // ]
  constructor() { }

  ngOnInit(): void {
  }

}
