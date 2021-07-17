import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name = 'Angular';
  parent = 10;
  parentCount = 0;
  ngOnInit(){

  }

  displayCounter(count:any){
    this.parentCount = count;
  }
}

