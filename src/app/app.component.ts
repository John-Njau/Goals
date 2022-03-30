import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // defining an array
  goals:string[];

  // constructor function that adds 3 values to our empty array
  constructor(){
    this.goals = ['Watch Finding Nemo', 'Buy biscuit', 'Get new phone case']
  }

  // defining a variable
  title = 'My Goals'
}
