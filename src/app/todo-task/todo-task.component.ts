import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  @Input()
  taskslist = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();


  constructor() { }

  ngOnInit() {
  }
  remove(task) {
    this.emitRemove.emit(task);
  }
  done(task) {
    this.emitDone.emit(task);
  }
}
