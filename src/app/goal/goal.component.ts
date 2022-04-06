import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version', new Date(2021, 16, 9)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for my people', new Date(2020, 6, 12)),
    new Goal(3, 'Get new Phone Case', 'Linda has her bday coming up', new Date(2019, 3, 13)),
    new Goal(4, 'Get Dog Food', 'Linda has her bday coming up', new Date(2022, 5, 12)),
    new Goal(5, 'Solve math homework', 'Linda has her bday coming up', new Date(2022, 4, 28)),
    new Goal(6, 'Plot my world domination plan', 'Linda has her bday coming up', new Date(2022, 11, 31)),
    new Goal(7, 'Go to Town', 'At 1 pm', new Date(2022, 1, 4))
  ];

  addNewGoal(goal){
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate)
    this.goals.push(goal)
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}`)

      if (toDelete) {
        this.goals.splice(index, 1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  title = 'My Goals'

}
