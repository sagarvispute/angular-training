import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  name: string = "Santosh";
  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  getColor(color: string) {
    alert(color);
  }

  changeName() {
    this.name = 'Sagar';
  }
}
