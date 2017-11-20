import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProjectSearchComponent } from './project-search.component';
import { ProjectDetailsComponent } from './project-details.component';
import { ProjectService } from './project.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule,
	AppRoutingModule
  ],
  declarations: [
    AppComponent,
	ProjectSearchComponent,
	ProjectDetailsComponent
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
