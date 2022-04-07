import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  // To use the goal class, you have to import it first. 
  // creating our goal using our goal blueprint in goal.ts
  newGoal = new Goal(0, "", "", new Date());

  @Output() addGoal = new EventEmitter<Goal>();

  // submit goal function
  submitGoal() {
    this.addGoal.emit(this.newGoal)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
