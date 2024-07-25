import { Title } from '@angular/platform-browser';
import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent {
  constructor(private titleservice: Title , private renderer: Renderer2){
    this.titleservice.setTitle('Adarsh Biradar - Resume');
  }
//manucalting dom element with the hwlp of renderer
  downloadFile(){
      const link = this.renderer.createElement('a')
      link.setAttribute('traget','_blank');
      link.setAttribute('href', '../../assets/Adarsh_D_Biradar.pdf');
      link.setAttribute('download','Adarsh_D_Biradar.pdf');
      link.click();
      link.remove();
  }
}
