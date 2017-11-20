import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectDetailsComponent } from './project-details.component';
import {ProjectSearchComponent} from './project-search.component'

const routes: Routes = [
  { path: 'search', component: ProjectSearchComponent },
  { path: 'detail/:inputValue', component: ProjectDetailsComponent },
  { path: '', redirectTo: '/search', pathMatch: 'full' },
  { path: 'back', component: ProjectSearchComponent },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
