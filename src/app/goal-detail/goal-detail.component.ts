import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  @Input() goal!: Goal;
  // is Complete is the event emitter that takes in a boolean
  @Output() isComplete = new EventEmitter<boolean>();

  goalDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }

  goalStrikethrough(){
    
  }
  constructor() { }

  ngOnInit() {
  }

}
