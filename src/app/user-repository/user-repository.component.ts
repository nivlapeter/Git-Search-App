import { Component, OnInit } from '@angular/core';
 import { User } from '../user';
 import { UserRequestService } from '../user-http/user-request.service';

 @Component({
   selector: 'app-user-repository',
   templateUrl: './user-repository.component.html',
  styleUrls: ['./user-repository.component.css']
 })
 export class UserRepositoryComponent implements OnInit {

   user: User;
   constructor(private userService: UserRequestService) { }

   ngOnInit() {
     
   }

 }

