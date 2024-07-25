import { project } from './../modles/project';
import { Component, Input } from '@angular/core';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  //input variable
@Input() project = {} as project;

//question marks ? :-> represnts it is optional
// bsModalRef? : BsModalRef;


// constructor(private moadService : BsModalService){
  
// }
}
