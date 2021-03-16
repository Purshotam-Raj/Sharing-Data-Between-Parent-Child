import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() num:any;
  @Output() reset =new EventEmitter();
  

  print(){
    console.log(this.num);
  }


 

  constructor() {  }

  ngOnInit(): void {
  }

}
