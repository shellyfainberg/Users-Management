import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { RestutilsService } from '../restutils.service';
import { User } from '../user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  searchByNameOrEmail: string = '';

  users: User[] = [];
  searchedUsers: User[] = [];
  showAddUser: boolean = false;

  constructor(private restUtils: RestutilsService) {}

  sub!: Subscription;
  sub1!: Subscription;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.sub = this.restUtils
      .getAllData('http://localhost:8000/user')
      .subscribe((data: User[]) => {
        this.users = data;
        this.searchedUsers = data;
      });
  }
  searchUser(data: string) {
    this.searchByNameOrEmail = data;

    this.searchedUsers = this.users.filter(
      (user) =>
        user.name
          ?.toLocaleLowerCase()
          .includes(this.searchByNameOrEmail.toLocaleLowerCase()) ||
        user.email
          ?.toLocaleLowerCase()
          .includes(this.searchByNameOrEmail.toLocaleLowerCase())
    );
  }
  addNewUser() {
    this.showAddUser = !this.showAddUser;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
  }
}
