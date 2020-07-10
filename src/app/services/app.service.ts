import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  userName: string = 'Santosh';
  password: string = 'santosh@123';

  changeSubject = new Subject<string>();
  changeSubject$ = this.changeSubject.asObservable();

  constructor() { }

}
