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
  minuend: number;
  subtrahend: number;
  minuendRange: Array<number>;
  subtrahendRange: Array<number>;
  test: String;

  constructor() {
     this.minuend = 18;
     this.subtrahend = 9;
     this.minuendRange = this.range(0,19);
     this.subtrahendRange = this.range(0,10);
  }
  changeMinuend(newValue):void {
    if(newValue !== this.minuend)  {
      this.subtrahendRange = this.range(0,+newValue+1);
      console.log(this.subtrahendRange.length);
    }
  }

  range(start, end): Array<number> {
    var count = end-start;
    var returnValue = Array.apply(null, Array(count)).map(function (_, i) {return i+start;});
    return returnValue;
  }
}
