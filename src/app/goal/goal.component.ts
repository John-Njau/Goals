import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version', new Date(2021,16,9)),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for my people', new Date(2020,6,12)),
    new Goal(3, 'Get new Phone Case', 'Linda has her bday coming up', new Date(2019,31,3)),
    new Goal(4, 'Get Dog Food', 'Linda has her bday coming up', new Date(2022,6,9)),
    new Goal(5, 'Solve math homework', 'Linda has her bday coming up', new Date(2015,5,28)),
    new Goal(6, 'Plot my world domination plan', 'Linda has her bday coming up', new Date(2019,6,5)),
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete){
      this.goals.splice(index, 1)
    }
  }
  constructor() { }

  ngOnInit(): void {
  }
  title = 'My Goals'

}
