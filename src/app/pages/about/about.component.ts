import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  name: string;
  constructor(private appService: AppService) {
    this.name = this.appService.userName;

    this.appService.changeSubject$.subscribe(() => {
      this.name = this.appService.userName;
    });
  }

  ngOnInit(): void {
  }

  changeName() {
    this.appService.userName = 'Ashwini';
    this.appService.changeSubject.next('');
  }
}
