import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: any[] = [
    {
      name: 'Home'
    },
    {
      name: 'About'
    },
    {
      name: 'Services'
    },
    {
      name: 'Gallery'
    },
    {
      name: 'Contact'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
