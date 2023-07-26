import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { RestutilsService } from '../restutils.service';
import { SelectedUserService } from '../services/selected-user.service';
import { Post, Task, User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input()
  user: User = new User();
  selectedUserId: string | null = null;
  isSelected = false;

  userTasksCompleted: boolean = true;
  showData: boolean = false;
  dynamicStyles: any = {};

  constructor(
    private restUtils: RestutilsService,
    private selectedUserService: SelectedUserService
  ) {}

  sub!: Subscription;
  sub2!: Subscription;
  sub3!: Subscription;
  sub4!: Subscription;
  sub5!: Subscription;

  posts: Post[] = [];
  tasks: Task[] = [];

  @ViewChild('street') streetInput: ElementRef | undefined;
  @ViewChild('city') cityInput: ElementRef | undefined;
  @ViewChild('zipcode') zipcodeInput: ElementRef | undefined;

  ngOnInit() {
    if (this.user.tasks) {
      for (let task of this.user.tasks) {
        if (!task.completed) {
          this.userTasksCompleted = false;
        }
      }
    }

    this.selectedUserService.selectedUserId$.subscribe((selectedUserId) => {
      this.isSelected = selectedUserId === this.user._id;
    });
  }

  updateUser(name: string, email: string) {
    let obj = {};
    const street = this.streetInput?.nativeElement.value;
    const city = this.cityInput?.nativeElement.value;
    const zipcode = this.zipcodeInput?.nativeElement.value;

    if (this.showData) {
      obj = {
        name: name,
        email: email,
        street: street,
        city: city,
        zipcode: zipcode,
      };
    } else {
      obj = {
        name: name,
        email: email,
      };
    }

    this.sub = this.restUtils
      .updateData('http://localhost:8000/user', this.user._id, obj)
      .subscribe((data: User[]) => {
        alert (data);
      });
  }
  deleteUser() {
    this.sub2 = this.restUtils
      .deleteData('http://localhost:8000/user', this.user._id)
      .subscribe((data: User[]) => {
        alert(data);
      });
  }
  coloredSelectedUser() {
    this.selectedUserService.setSelectedUser(this.user._id || '');
    this.isSelected = true;
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
    this.sub5?.unsubscribe();
  }
}
