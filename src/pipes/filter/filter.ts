import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the FilterPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: any[], terms: string): any[] {
    if(!items) return [];
    if(!terms) return items;
    return items.filter(item => JSON.stringify(item).toLowerCase().indexOf(terms.toLowerCase()) !== -1);

    //return items.filter( it => {
    //return (it.username+it.last_name).toLowerCase().includes(terms); // only filter country name
    };
  }
