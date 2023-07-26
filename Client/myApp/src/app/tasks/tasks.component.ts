import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestutilsService } from '../restutils.service';
import { Task } from '../user';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  constructor(
    private ar: ActivatedRoute,
    private restUtils: RestutilsService
  ) {}

  sub!: Subscription | undefined;
  sub2!: Subscription;
  sub3!: Subscription;
  sub4!: Subscription;

  userId: string = '';
  tasks: Task[] = [];
  selectedTask: any = {};
  showAddTask: boolean = false;

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  switchToAdd() {
    this.showAddTask = true;
    this.notify.emit(this.showAddTask);
  }

  ngOnInit() {
    this.getTasks();
  }
  getTasks() {
    this.sub = this.ar.params.subscribe((data: any) => {
      this.userId = data['id'];
      this.sub2 = this.restUtils
        .getData('http://localhost:8000/user/', this.userId)
        .subscribe((userTasks: any) => {
          this.tasks = userTasks['tasks'];
        });
    });
  }
  markCompleted(taskId: string | undefined) {
    this.sub3 = this.ar.params.subscribe((data: any) => {
      const obj = {
        completed: true,
      };
      this.userId = data['id'];
      this.sub4 = this.restUtils
        .completedData('http://localhost:8000/user/', this.userId, taskId, obj)
        .subscribe((userTasks: any) => {
          console.log('userTasks', userTasks);
        });
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
    this.sub3?.unsubscribe();
    this.sub4?.unsubscribe();
  }
}
