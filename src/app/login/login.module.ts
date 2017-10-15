import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms'
import { LoginComponentComponent } from '../login-component/login-component.component';
import { LoginService } from '../shared/services/login.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { DialogComponent } from '../dialog/dialog.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    
  ],
  declarations: [LoginComponentComponent, DialogComponent],
  providers: [LoginService]
})
export class LoginModule { }
