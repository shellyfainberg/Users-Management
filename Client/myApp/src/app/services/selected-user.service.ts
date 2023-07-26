import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectedUserService {
  constructor() {}
  private myBehaviorSubject = new BehaviorSubject<string>('default value');
  selectedUserId$ = this.myBehaviorSubject.asObservable();

  setSelectedUser(userId: string) {
    this.myBehaviorSubject.next(userId);
  }
}
