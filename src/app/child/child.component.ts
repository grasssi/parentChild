import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentCount?:number;
  @Output() valueChange = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    console.log(this.parentCount)
  }

  valueChanged(){
    this.valueChange.emit('increment');
  }

}
