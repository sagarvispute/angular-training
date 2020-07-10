import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name: string;
  constructor(private appService: AppService) {
    this.name = this.appService.userName;

    this.appService.changeSubject$.subscribe((data) => {
      this.name = this.appService.userName;
    });
  }

  ngOnInit(): void {
  }

  changeName() {
    this.appService.userName = 'Rupa';
    this.appService.changeSubject.next('');
  }
}
