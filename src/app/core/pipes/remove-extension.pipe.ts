import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeExtension'
})
export class RemoveExtensionPipe implements PipeTransform {

  transform(value: string): string {
    const iconSplitter = value.split('.');
    return iconSplitter[0];
  }
}
