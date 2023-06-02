import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-roles-dialog',
  templateUrl: './roles-dialog.component.html',
  styleUrls: ['./roles-dialog.component.scss']
})
export class RolesDialogComponent {

  public inputValue: string = "";

  constructor(private dialogRef: MatDialogRef<RolesDialogComponent>) 
  {}

  onAccept(): void {
    this.dialogRef.close(this.inputValue);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
