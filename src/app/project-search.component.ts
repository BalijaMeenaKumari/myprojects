import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ProjectService } from './project.service';
import { Project } from './project';
import { Router } from '@angular/router';

@Component({
  selector: 'my-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})

export class ProjectSearchComponent implements OnInit {
   title = "/assets/images/title.jpg";
  projects: Project[];
  error: any;
  
  constructor(
    private service: ProjectService,
	private router: Router) {}
   
  ngOnInit(): void {
	
  }
  
  gotoProjectDetails(inputValue: String):void{
	 const link = ['detail', inputValue];
	 this.router.navigate(link);	
 }
}
