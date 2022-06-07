import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form-dialog',
  templateUrl: './form-dialog.component.html',
  styleUrls: ['./form-dialog.component.scss']
})
export class FormDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<FormDialogComponent>
  ) { }

  ngOnInit(): void {

  }

  fecharDialog(): void 
  {
    this.dialogRef.close();
  }

}
