import { Component, OnInit, Inject } from '@angular/core';
import { Login } from '../shared/model/login';
import { LoginService } from '../shared/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'ap-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {
  public tittle_login:string = "LOGIN";
  public login: Login[];
  public verify;
  public username:string;
  public msg:string = "Error";
  constructor(private _loginService: LoginService, private _router:Router, public dialog: MatDialog) {
    
   }

  ngOnInit():void {
   this.login = [{username:'',password:''}]
   this.verify = this._loginService.getPassword();
   console.log(this.verify[0]);
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      data: {
        animal: 'Error'
      }
    });
  }

  onSubmit(){
    
   if (this.login['username'] === undefined || this.login['password'] === undefined) {
     alert("Please insert your username or your password")
   }else{
    if(this.login['username'] === this.verify[0]['username'] && 
    this.login['password'] === this.verify[0]['password'])
    {
      this._router.navigate(['dashboard']);
    }else{
      //this.openDialog();
      alert("Error when introduced your username or password")
    }
   }
  }
}

