import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';

  name: string = 'sagar';
  contact: number = 45484845;
  active: boolean = true;
  subjects: string[] = ['Hindi', 'English', 'Marathi'];

  user: any = {
    name: 'sagar',
    contact: 78454841,
    online: true
  };

  users: any[] = [
    {
      name: 'sagar',
      contact: 78454841,
      online: true
    },
    {
      name: 'Santosh',
      contact: 78454841,
      online: true
    },
    {
      name: 'Sameer',
      contact: 78454841,
      online: true
    },
    {
      name: 'Ashwini',
      contact: 78454841,
      online: true
    },
    {
      name: 'Rupa',
      contact: 78454841,
      online: true
    }
  ];
}
