import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserComponent } from './user/user.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';
import { HttpClientModule } from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import { ShadowDirective } from './shadow.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserComponent,
    UserRepositoryComponent,
    DateCountPipe,
    ShadowDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }