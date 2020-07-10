import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: string;
  links: any[] = [
    {
      name: 'Home',
      route: 'home'
    },
    {
      name: 'About',
      route: 'about'
    },
    {
      name: 'Contact',
      route: 'contact'
    }
  ];
  constructor(private appService: AppService) {
    this.user = this.appService.userName;
  }

  ngOnInit(): void {
  }

}
