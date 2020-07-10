import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() userName: string = '';
  @Output() setColor = new EventEmitter();
  userPass: string;
  
  constructor(private appService: AppService) {
    this.userPass = this.appService.password;
  }

  ngOnInit(): void {
  }

  showRedColor() {
    this.setColor.emit('Red');
  }

  showBlueColor() {
    this.setColor.emit('Blue');
  }
}
