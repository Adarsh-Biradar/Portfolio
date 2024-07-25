import { SprojectsService } from './../Services/sprojects.service';
import { project } from './../modles/project';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Tag } from '../tags/Tags';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  implements OnInit {


  
p1 = {} as project[];

constructor(private titleservice: Title, private SprojectsService: SprojectsService){
  this.titleservice.setTitle('Adarsh Biradar - Portfolio');
}

  ngOnInit(): void {
  this.p1 = this.SprojectsService.GetProjects();
}
 
}
