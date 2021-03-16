import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  num : number =0;
  inc(){this.changer(+1)}
  dec(){this.changer(-1)}
  reset(){
    this.num=0;
  }

  changer(delta : number){
    this.num = this.num+ delta;
  }
  constructor(){
  }
  ngOnInit(){
  
  }
}
