import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProjectService } from './project.service';
import { Http, Response } from '@angular/http';
import { ProjectDetails }  from './projectdetails';
import 'rxjs/add/operator/toPromise';
import { ActivatedRoute, Params } from '@angular/router';
import {Project} from './project';
import { Router } from '@angular/router';

@Component({
  selector: 'my-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})

export class ProjectDetailsComponent implements OnInit{
 title = "/assets/images/title.jpg";
 project: Project;
 projectDetails: ProjectDetails = new ProjectDetails();
 constructor(private service: ProjectService, private route: ActivatedRoute,
             private router: Router, private http: Http) {  }
 
ngOnInit(): void {
	this.route.params.forEach((params: Params) => {
		if (params['inputValue'] !== undefined) 
		{
			const inputValue = params['inputValue'];
			this.service.getProject(inputValue).then(project => {
			this.http.get(project["url"]).toPromise()
			.then(response => { 
				const projectFullDetails = response.json();
				this.projectDetails.name = projectFullDetails["name"];
				this.projectDetails.height = projectFullDetails["height"];
				this.projectDetails.weight = projectFullDetails["weight"];
				var str1 = "";
				for(var i=0; i< projectFullDetails["types"].length;i++)
				{
					str1= str1.concat(",").concat(projectFullDetails["types"][i]["type"]["name"]);
				}
				str1 = str1.substring(1, str1.length);
				this.projectDetails.type = str1;
			}
		  }).catch(this.handleError);
		}
	});
  }
  goBack(): void{
		const link = ['back'];
		this.router.navigate(link);	
	}
}