import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserRequestService } from '../user-http/user-request.service';

@Component({
 selector: 'app-user',
templateUrl: './user.component.html',
styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 user: User;

constructor(private userService: UserRequestService) { }
 search:string

 ngOnInit() {
   // this.userService.createUrl();
   this.userService.userRequest();
   this.user = this.userService.user;


 }

}

