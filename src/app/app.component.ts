import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'first',
      imageUrl: 'assets/first.jpg',
      userName: 'nature',
      content: 'demo content1'

    },
    {
      title: 'second',
      imageUrl: 'assets/second.jpg',
      userName: 'nature',
      content: 'demo content2'

    },
    {
      title: 'third',
      imageUrl: 'assets/third.jpg',
      userName: 'nature',
      content: 'demo content3'

    }
  ]
}
