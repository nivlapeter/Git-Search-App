import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserRepositoryComponent } from './user-repository/user-repository.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DateCountPipe } from './date-count.pipe';
import { ShadowDirective } from './shadow.directive';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserRepositoryComponent,
    UserFormComponent,
    DateCountPipe,
    ShadowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
