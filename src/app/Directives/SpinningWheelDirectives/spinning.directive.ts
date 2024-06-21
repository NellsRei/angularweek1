import { Directive, HostListener } from '@angular/core';
import { SpinningWheelService } from '../../Services/SpinningService/spinning-wheel.service';

@Directive({
  selector: '[appSpinning]',
  standalone: true
})
export class SpinningDirective {

  constructor(private spinner:SpinningWheelService) { }

  @HostListener('click') onClick(): void {
    const spin = this.spinner.spinWheel()
    alert(spin)
  }

}
