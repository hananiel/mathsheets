import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

//import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'about',
  templateUrl: './mathsheet/components/mathsheet.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class MathSheetCmp {
  newName: string;
  list: [[number,number]];

  constructor() {
     this.list =[[0,0]];
     this.list.pop();
     for (var i = 0; i < 100; i++) {
        var x = Math.floor(Math.random() * 19) + 1 ;
        var y = 9;// Math.floor(Math.random() * 9) + 1 ;
        while ( x < y ) {
         x = Math.floor(Math.random() * 19) + 1 ;
        }
       this.list.push( [x, y]);
      }
  }
 /*
 * @param newname  any text as input.
 * @returns return false to prevent default form submit behavior to refresh the page.
 */
  addName(): boolean {
    //this.list.add(this.newName);
    this.newName = '';
    return false;
  }
}
