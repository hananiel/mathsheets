import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';

//import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'mathsheetoptions',
  templateUrl: './mathsheetoptions/components/mathsheetoptions.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class MathSheetOptionsCmp {
  operand1: number;
  operand2: number;
  operand1Range: Array<number>;
  operand2Range: Array<number>;
  test: String;

  constructor() {
     this.operand1 = 18;
     this.operand2 = 9;
     this.operand1Range = this.range(0,19);
     this.operand2Range = this.range(0,10);
  }
  changeOperand1(newValue):void {
    if(newValue !== this.operand1)  {
      this.operand2Range = this.range(0,+newValue+1);
      console.log(this.operand2Range.length);
    }
  }

  range(start, end): Array<number> {
    var count = end-start;
    var returnValue = Array.apply(null, Array(count)).map(function (_, i) {return i+start;});
    return returnValue;
  }
}
