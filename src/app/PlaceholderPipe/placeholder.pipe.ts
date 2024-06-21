import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder',
  standalone: true
})
export class PlaceholderPipe implements PipeTransform {

  transform(value: string, limit:number = 7): string {
    if (!value || value.length < limit) {
      return 'Input is empty or too short';
    }else{
      return value
    }
    
  }

}
