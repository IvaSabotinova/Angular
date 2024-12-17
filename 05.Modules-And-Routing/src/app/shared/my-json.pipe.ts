import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'myJson',
  // pure: false //така Ангулар спира да прави меморизация
})
export class MyJsonPipe implements PipeTransform {

    transform(value: any) {
       return JSON.stringify(value, null, 2)
    }

}