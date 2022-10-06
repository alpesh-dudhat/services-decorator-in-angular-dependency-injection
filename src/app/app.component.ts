import { Component, VERSION } from '@angular/core';
import { UsersService } from './services/users.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService],
})
export class AppComponent {
  // name = 'Angular ' + VERSION.major;
  name: string = '';
  age: string = '';
  qual: string = '';

  constructor(private userData: UsersService) {
    let newData = this.userData.getData();
    this.name = newData.name;
    this.qual = newData.qualification;
    console.log(newData);
  }
}
