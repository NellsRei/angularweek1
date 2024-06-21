import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { TalkativeDirective } from './Directives/RandomMessageDirectives/talkative.directive';
import { SpinningDirective } from './Directives/SpinningWheelDirectives/spinning.directive';
import { PlaceholderPipe } from './PlaceholderPipe/placeholder.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TalkativeDirective, SpinningDirective ,PlaceholderPipe, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assessmentAngular';
  text:string = ''
  
  // random:boolean
  // randomcolor(){
  //   if(random = "true"){

  //   }
  // }

  


}
