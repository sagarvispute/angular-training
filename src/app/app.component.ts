import { Component } from '@angular/core';
import { User } from 'src/app/models/user.model';

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
  
  user: User = {
    name: 'sagar',
    contact: 78454841,
    online: true,
    flag: true
  };

  user2: User = {
    name: 'sagar',
    contact: 78454841,
    online: true
  };

  users: User[] = [
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

  showName(name: string): void { //: void is a return type for this comment
    alert('my name is '+name);
  }

  /* getName(): string {
    return 'sagar';
  }
  getName(): boolean {
    return true;
  }
  getName(): number {
    return 1234;
  }
  getUser(): User {
    return {
      name: 'sagar',
      contact: 78454841,
      online: true
    };
  }
  */
}
