import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpinningWheelService {
  private outcomes:string [] = ['Prize 1', 'Prize 2', 'Prize 3','Try Again', 'Bonus!']
  tries : number = 5

  constructor() { }
  spinWheel(): string {
   
    const randomchoice = Math.floor(Math.random() * this.outcomes.length)
    const result = this.outcomes[randomchoice]
    
    // Checks if the result is 'Try Again'
    if (result === 'Try Again') {
      this.tries = this.tries + 1
      console.log(this.tries)
      return 'Try Again'
    }else{
      this.tries = this.tries - 1
      console.log(this.tries)
      return result 
    } 
    ///
    

  }
}


