import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date(); // Get current date and Time
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(),today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime) // Returns value in ms
    const secondsInDay = 86400; // 60sec * 60mins * 25hrs in a day.
    var dateDifferenceSeconds = dateDifference * 0.001; //converts milliseconds to seconds
    var dateCounter = dateDifferenceSeconds/secondsInDay;

    if (dateCounter >= 1 && value > todayWithNoTime){
      return dateCounter;
    }
    else{
      return 0;
    }
  }

}
