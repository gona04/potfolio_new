import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItWorkComponent } from './it-work/it-work.component';
import { MusicWorkComponent } from './music-work/music-work.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: "", redirectTo: "web_application_development_work", pathMatch:"full"},
  {path: "web_application_development_work", component: ItWorkComponent},
  {path:"music_direction_song_writing_work", component:MusicWorkComponent},
  {path: "about", component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
