import { project } from './../modles/project';
import { SprojectsService } from './../Services/sprojects.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

f1= {} as project;

constructor(private titleservice: Title, private SprojectsService : SprojectsService){
  this.titleservice.setTitle('Adarsh Biradar - Home');
}
  ngOnInit(): void {
    this.f1= this.SprojectsService.GetProjectById(1);
  }
}
