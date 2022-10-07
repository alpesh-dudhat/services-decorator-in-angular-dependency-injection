import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsersService } from './services/users.service';
import { PersonalService } from './services/personal.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
  // Cre
}
