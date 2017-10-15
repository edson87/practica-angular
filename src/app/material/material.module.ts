import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MATERIAL_COMPATIBILITY_MODE,
  MatButtonModule,
  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatDialogModule
} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule
   // BrowserAnimationsModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatListModule,
    MatFormFieldModule,
    MatDialogModule
    //BrowserAnimationsModule
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
    { provide: MAT_DIALOG_DATA, useValue: true }
  ],
  declarations: [
    
  ]
})
export class MaterialModule { }
