import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version'),
    new Goal(2, 'Buy Cookies', 'I have to buy cookies for my people'),
    new Goal(3, 'Get new Phone Case', 'Linda has her bday coming up'),
    new Goal(4, 'Get Dog Food', 'Linda has her bday coming up'),
    new Goal(5, 'Solve math homework', 'Linda has her bday coming up'),
    new Goal(6, 'Plot my world domination plan', 'Linda has her bday coming up'),
  ];

  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  constructor() { }

  ngOnInit(): void {
  }
  title = 'My Goals'

}
