import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clone-git';
  history :object[]=[];
  update :object={};

  UpdateFiles(file:any,msg:any){
    this.history.push({
      name:file,
      msg : msg,
      time :new Date()
    })
    this.update = {
      name : file,msg,
      history : this.history
    }
  }

}
