import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  
  
  constructor(public dialog: MatDialog) {}


  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
      
    })
  }

}
