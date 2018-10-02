import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

taskslist: Array<string> = [];
donelist: Array<string> = [];

add(task) {
  this.taskslist.push(task);
}
remove(task) {
  this.taskslist = this.taskslist.filter( e => e !== task);
}
done(task) {
  this.donelist.push(task);
  this.remove(task);
}


}
