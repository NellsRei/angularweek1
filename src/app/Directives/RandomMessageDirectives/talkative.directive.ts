import { Directive, HostListener } from '@angular/core';
import { MessageService } from '../../Services/MessageService/message.service';

@Directive({
  selector: '[appTalkative]',
  standalone: true
})
export class TalkativeDirective {

  constructor(private messageService:MessageService) { }

  @HostListener('click') onClick(): void {
    const randomMessage = this.messageService.generatetext();
    alert(randomMessage)
  }


}
