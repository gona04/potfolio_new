import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItWorkComponent } from './it-work/it-work.component';
import { MusicWorkComponent } from './music-work/music-work.component';

const routes: Routes = [
  {path: "", redirectTo: "it_work", pathMatch:"full"},
  {path: "it_work", component: ItWorkComponent},
  {path:"music_work", component:MusicWorkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
