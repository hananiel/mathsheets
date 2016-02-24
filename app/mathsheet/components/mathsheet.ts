import {Component, ViewChildren} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {RouteParams,  ROUTER_DIRECTIVES} from 'angular2/router';
import {shared} from '../../shared/modules/shared';
//import Enum = shared.Enum;
import ProblemType = shared.ProblemType;

// {ElementRef} from 'angular2/core';
interface Problem {
  index: number;
  operand1: number;
  operand2: number;
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
  maxOperand1: number;
  maxOperand2: number;
  problemType: ProblemType;
  operand1Name: string;
  operand2Name: string;
  operationSign: string;

  constructor(public params: RouteParams) {
     this.maxOperand1 = +params.get('operand1') || 18 ;
     this.maxOperand2 = +params.get('operand2') || 9;
     this.problemType = ProblemType[params.get('problemType')] ;
     this.operand1Name = shared.OperandNames.Ops[this.problemType].op1;
     this.operand2Name = shared.OperandNames.Ops[this.problemType].op2;
     this.operationSign = shared.OperandNames.Ops[this.problemType].sign;


     var list = [];

     var index = 0;
     while (list.length < 100) {
        var operand1 = Math.floor(Math.random() * +this.maxOperand1) + 1 ;
        var currentOperand2 =  Math.min(+this.maxOperand2, operand1);
        var operand2 =  Math.floor(Math.random() * currentOperand2) + 1 ;
        var problem = {
          index: index,
          operand1: operand1,
          operand2: operand2,
          hidden: true,
          answer : 0,
          timeToComplete: 0,
          incorrect: false,
          image : Math.floor( Math.random()*8) + 1
          };
        var isDuplicate = false;
       for(var i =1 ; list.length > 1 && i <= Math.min(3, list.length); i ++ ) {
          var length = list.length;
          if(list[length-i].operand1 ===  operand1 && list[length-i].operand2 === operand2) {
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
      if(this.performOperation(problem) === +answer) {
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
  performOperation(problem: Problem): number {
    var returnValue : number;
    switch(this.problemType) {
      case ProblemType.Addition:
        returnValue = problem.operand1 + problem.operand2;
        break;
      case ProblemType.Subtraction:
        returnValue = problem.operand1 - problem.operand2;
        break;
      case ProblemType.Multiplication:
        returnValue = problem.operand1 * problem.operand2;
        break;
      case ProblemType.Division:
        returnValue = Math.floor(problem.operand1 / problem.operand2);
        break;
      }
      return returnValue;
  }
  showProblem(problem, answer): boolean {
    problem.hidden = false;
    setTimeout(function() { answer.focus(); }, 0);
    return false;

  }
}
