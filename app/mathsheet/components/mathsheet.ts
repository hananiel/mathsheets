import {Component, ViewChildren} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams,  ROUTER_DIRECTIVES} from 'angular2/router';
// {ElementRef} from 'angular2/core';
interface Problem {
  index: number;
  minuend: number;
  subtrahend: number;
  hidden: boolean;
  answer : number;
  timeToComplete: number;
  incorrect: boolean;
  image : number;
}

@Component({
  selector: 'about',
  templateUrl: './mathsheet/components/mathsheet.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})


export class MathSheetCmp {
  @ViewChildren('answer') answerInputs;

  newName: string;
  list: Problem[];
  maxMinuend: string;
  maxSubtrahend: string;

  constructor(public params: RouteParams) {
     this.maxMinuend = params.get('minuend') || '18' ;
     this.maxSubtrahend = params.get('subtrahend') || '9';
     var list = [];

     var index = 0;
     while (list.length < 100) {
        var minuend = Math.floor(Math.random() * +this.maxMinuend) + 1 ;
        var currentMaxSubtrahend =  Math.min(+this.maxSubtrahend, minuend);
        var subtrahend =  Math.floor(Math.random() * currentMaxSubtrahend) + 1 ;
        var problem = {
          index: index,
          minuend: minuend,
          subtrahend: subtrahend,
          hidden: true,
          answer : 0,
          timeToComplete: 0,
          incorrect: false,
          image : Math.floor( Math.random()*8) + 1
          };
        var isDuplicate = false;
       for(var i =1 ; list.length > 1 && i <= Math.min(3, list.length); i ++ ) {
          var length = list.length;
          if(list[length-i].minuend ===  minuend && list[length-i].subtrahend === subtrahend) {
           isDuplicate = true;
            break;
          }
        }
        if(!isDuplicate) {
          list.push(problem);
          index++;
        }
      }
      this.list = list;
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
  checkProblem(i, answer): boolean {
    var nextIndex = +i+1;

    if(nextIndex < this.list.length ) {
      var problem = this.list[i];
      if((problem.minuend - problem.subtrahend) === +answer) {
        this.list[nextIndex].hidden = false;
        problem.incorrect = false;
        var elementRef = this.answerInputs.toArray()[nextIndex];
        setTimeout(function() { elementRef.nativeElement.focus(); }, 0);
      } else {
        problem.incorrect =true;
      }

    }
    return true;
  }
  showProblem(problem, answer): boolean {
    problem.hidden = false;
    setTimeout(function() { answer.focus(); }, 0);
    return false;

  }
}
