import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() userName: string = '';
  @Output() setColor = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  showRedColor() {
    this.setColor.emit('Red');
  }

  showBlueColor() {
    this.setColor.emit('Blue');
  }
}
