import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicWorkComponent } from './music-work/music-work.component';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", pathMatch:"full", component: HomeComponent},
  {path:"music", component:MusicWorkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{ scrollPositionRestoration: 'enabled'},)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
