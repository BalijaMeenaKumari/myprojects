import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Project } from './project';

@Injectable()
export class ProjectService {
  resources: Project[];
  
  constructor( private http: Http) { }
  
  getProjects(): Promise<Array<Project>> {
      let apiUrl = 'https://pokeapi.co/api/v2/pokemon';
      return this.http.get(apiUrl).toPromise()
			.then(response => {
			  return response.json()["results"] as Project[];
			}).catch(this.handleError);
  }
  
  getProject(inputValue): Promise<Project> {
    return this.getProjects()
      .then(projects => 
			projects.find(project => {
			    return (inputValue.toLowerCase()) === ( (project["name"].toLowerCase()).substring(0, inputValue.length)) ;
			})
		  );
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
