import { Injectable } from '@angular/core';
import { goals } from '../goal-list.ts'

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals() {
    return goals;
  }
  constructor() { }
}
