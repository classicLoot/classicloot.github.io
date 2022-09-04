import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizeName'
})
export class SanitizeNamePipe implements PipeTransform {

  transform(value: string): string {
    return sanitizeName(value);
  }

}

export function sanitizeName(str: string) {
  let newStr = str.replaceAll(" ", "").replaceAll("'", "").replaceAll("-", "").replaceAll("/", "").replaceAll("<", "sub").replaceAll(">", "over");
  return newStr;
}

