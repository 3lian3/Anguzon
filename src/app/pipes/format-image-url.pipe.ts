import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatImageUrl'
})
export class FormatImageUrlPipe implements PipeTransform {

  transform(imageUrl: string[] | undefined): string {
    let result: any = ""
    if (imageUrl?.length) {
      result = imageUrl[0];
    }
    return result;
  }

}
