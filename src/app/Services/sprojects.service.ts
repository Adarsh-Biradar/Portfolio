import { project } from './../modles/project';
import { Tag } from './../tags/Tags';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SprojectsService {

  p1: project[]=[{
    id:0 ,
    name: 'Employee Managemnet System',
    Summary: 'Employee Management System using Java and JFrame',
    projectLink:' https://github.com/Adarsh-Biradar/Employee_Management_',
    tags:[Tag.Java, Tag.Sql],
    pictures:[]
  },
  {
    id:1,
    name: 'Quiz Application',
    Summary: 'Quiz Application using  java, spring boot, Spring MVC and PlSql',
    projectLink:' https://github.com/Adarsh-Biradar/Quiz',
    tags:[Tag.Java, Tag.Spring_Boot, Tag.PlSql],
    pictures:[]
  },
  {
    id:2 ,
    name: 'Banking Application',
    Summary: 'Banking Application using  java, spring boot, Spring MVC and Sql',
    projectLink:'https://github.com/Adarsh-Biradar/Banking-App ',
    tags:[Tag.Java,Tag.Spring_Boot,Tag.Sql],
    pictures:[]
  }
  ];
  constructor() { }

  GetProjects(){
    return this.p1;
  }  

  GetProjectById(id: number):project {
    let project = this.p1.find(project => project.id === id);
    if(project === undefined){
      throw new TypeError("There is no project that matches the id"+id);
    }
    return project;  
  }
  
}
