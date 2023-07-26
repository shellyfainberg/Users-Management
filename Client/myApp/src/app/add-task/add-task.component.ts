import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestutilsService } from '../restutils.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  constructor(
    private restUtils: RestutilsService,
    private ar: ActivatedRoute
  ) {}
  showAddTask: boolean = false;
  userId: string = '';
  sub!: Subscription;
  sub2!: Subscription;

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  backToTask() {
    this.showAddTask = false;
    this.notify.emit(this.showAddTask);
  }

  addTask(title: string) {
    if (title != '') {
      const obj = {
        title: title,
      };

      this.sub = this.ar.params.subscribe((data: any) => {
        this.userId = data['id'];
        this.sub2 = this.restUtils
          .createTask('http://localhost:8000/user', this.userId, obj)
          .subscribe((data: any) => {
            console.log(data);
          });
      });
      this.backToTask();
    } else {
      alert('task title must not be empty');
    }
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
}
