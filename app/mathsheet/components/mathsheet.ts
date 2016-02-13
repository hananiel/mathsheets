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
  list: {}[];

  constructor() {
     this.list =[];

     for (var i = 0; i < 100; i++) {
        var operand1 = Math.floor(Math.random() * 19) + 1 ;
        var operand2 =  Math.floor(Math.random() * 9) + 1 ;
        while ( operand1 < operand1 ) {
         operand1 = Math.floor(Math.random() * 19) + 1 ;
        }
       this.list.push( { operand1: operand1, operand2: operand2, hidden: true, answer : 0, timeToComplete: 0});
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
  showProblem(problem): boolean {
    //alert('problem'+ problem);
    console.log(problem);
    problem.hidden = false;
    return true;

  }
}
