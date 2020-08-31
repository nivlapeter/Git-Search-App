 import { Component, OnInit } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { UserRequestService } from '../user-http/user-request.service';
 import { Repository } from '../repository';
import { User } from '../user';

 @Component({
   selector: 'app-user-form',
   templateUrl: './user-form.component.html',
   styleUrls: ['./user-form.component.css']
 })
 export class UserFormComponent implements OnInit {
   user = new User('', '', 0, 0, new Date());
   constructor(private http: HttpClient) { }

 searcher(search: string) {
   const x = 'https://api.github.com/users/' + search;
   this.http.get(x).subscribe(answer => {
      this.user.userName = name;
      });

     const y = 'https://api.github.com/users/' + search + '/repos';
      this.http.get(y).subscribe(data => {
       this.user.repos = parseInt('data');
        });
  }
   ngOnInit() {
   
   }
 }





