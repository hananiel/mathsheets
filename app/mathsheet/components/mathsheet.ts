import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
// {ElementRef} from 'angular2/core';

@Component({
  selector: 'about',
  templateUrl: './mathsheet/components/mathsheet.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class MathSheetCmp {
//  @ViewChildren('answer') answerElementRef;
  newName: string;
  list: {}[];
  maxMinuend: string;
  maxSubtrahend: string;
  constructor(public params: RouteParams) {
     this.maxMinuend = params.get('minuend') || '18' ;
     this.maxSubtrahend = params.get('subtrahend') || '9';
    var list =[];

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
  showProblem(problem, answer): boolean {

    problem.hidden = false;
  //  var element = this.answerElementRef.filter(function (f){ return f.nativeElement.id === 'ans'+problem.index; })[0].nativeElement;
  //  element.focus();
  //  answer.value = 10;
  //  answer.focus();
//console.log(problem.index);
//var el = document.getElementById('ans'+problem.index);
 //setTimeout(function() { document.getElementById('ans'+problem.index).focus(); }, 100);
 //setTimeout(function() { el.focus(); }, 100);
 setTimeout(function() { answer.focus(); }, 100);
//console.log(el);
//el.focus();
    return false;

  }
}
