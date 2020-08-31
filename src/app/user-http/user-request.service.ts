import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { User} from '../user';
 import { environment } from '../../environments/environment';
 import { Repository } from '../repository';



@Injectable({
     providedIn: "root"
 })
 export class UserRequestService {

   user: User;

   constructor(private http: HttpClient) {
   this.user = new User('', '', 0, 0,new Date()); }

     private search = "";

   userRequest() {
     interface ApiResponse {
       userName: string;
       html_url: string;
       followers: number,
       following: number,
       inception: Date,
     }

   const promise = new Promise((resolve, reject) => {
       this.http.get<ApiResponse>('https://api.github.com/users/nivlapeter?accessntoken=9af9408d123645f615f2dac51740df4538167965').toPromise().then(response => {
       this.user.userName = response.userName;
       this.user.html_url = response.html_url;
       this.user.followers = response.followers;
       this.user.following = response.following;
       this.user.inception = response.inception;
      


       resolve();
    }),
     error => {
       this.user.userName = 'Ooops!';

       reject(error);

     };
     return promise;
  });
}
