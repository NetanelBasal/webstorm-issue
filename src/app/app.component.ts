import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { UseQuery } from '@ngneat/query';
import { map } from 'rxjs';

interface Post {
  id: string;
  title: string;
}

interface Todo {
  id: string;
  title: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  http = inject(HttpClient);
  query = inject(UseQuery);

  post$ = this.query(['post'], () => {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/1');
  }).result$;

  todos$ = this.query(['todos'], () => {
    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((todos) => {
          return {
            todos,
          };
        })
      );
  }).result$;
}
