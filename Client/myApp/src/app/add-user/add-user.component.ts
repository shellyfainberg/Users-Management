import { Component, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestutilsService } from '../restutils.service';
import { User } from '../user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  users: User[] = [];
  constructor(private restUtils: RestutilsService) {}
  sub!: Subscription;

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  addNewUser(name: string, email: string) {
    const obj = {
      name: name,
      email: email,
    };

    if (name != '' || email != '') {
      this.sub = this.restUtils
        .createItem('http://localhost:8000/user', obj)
        .subscribe((data: any) => {
          this.users = data;
        });
    } else {
      alert('name and email must not be empty');
    }
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
}
