import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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
    this.appService.userName = 'Santosh';
    this.appService.changeSubject.next('');
  }
}
