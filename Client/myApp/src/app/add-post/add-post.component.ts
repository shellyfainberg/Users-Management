import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { RestutilsService } from '../restutils.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent {
  constructor(
    private restUtils: RestutilsService,
    private ar: ActivatedRoute
  ) {}
  showAddPost: boolean = false;
  sub!: Subscription;
  sub2!: Subscription;
  userId: string = '';

  @Output()
  notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  addPost(title: string, body: string) {
    if (title != '' || body != '') {
      const obj = {
        title: title,
        body: body,
      };

      this.sub = this.ar.params.subscribe((data: any) => {
        this.userId = data['id'];
        this.sub2 = this.restUtils
          .createPost('http://localhost:8000/user', this.userId, obj)
          .subscribe((data: any) => {
            console.log(data);
          });
      });
      this.backToPosts();
    } else {
      alert('post title and body must not be empty');
    }
  }
  backToPosts() {
    this.showAddPost = false;
    this.notify.emit(this.showAddPost);
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
    this.sub2?.unsubscribe();
  }
}
