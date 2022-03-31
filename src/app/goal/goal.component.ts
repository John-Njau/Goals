import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    { id: 1, name: 'Watch finding Nemo', description:'Find an online version' },
    { id: 2, name: 'Buy Cookies', description: 'I have to buy cookies for my people' },
    { id: 3, name: 'Get new Phone Case', description: 'Linda has her bday coming up' },
    { id: 4, name: 'Get Dog Food', description: 'Linda has her bday coming up' },
    { id: 5, name: 'Solve math homework', description: 'Linda has her bday coming up' },
    { id: 6, name: 'Plot my world domination plan', description: 'Linda has her bday coming up' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  title = 'My Goals'

}
