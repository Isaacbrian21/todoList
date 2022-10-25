import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Done } from '../core/models/done.model';
import { Todo } from '../core/models/Todo.model';
import { ToastrService } from 'ngx-toastr'
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private toastr: ToastrService) { }
  todos: Todo[] = []
  dones: Done[] = []
  ngOnInit(): void {
  }

  close() {
    this.dialog.closeAll()
    this.toastr.error('Desfeito pelo usuário', 'Nada!')
  }

  showGreen(){
    this.dialog.closeAll()
    this.toastr.success('Excluido pelo usuário', 'Beleza!')
  }
}
