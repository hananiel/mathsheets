export module shared {
  export enum ProblemType {
    Addition,
    Subtraction,
    Multiplication,
    Division
  }
  export class OperandNames {
     static Ops = [ {op1: 'Augend', op2: 'Addend', sign: '+' },
      {op1: 'Minuend', op2: 'Subtrahend', sign: '-' },
      {op1: 'Multiplicand', op2: 'Multiplier', sign: 'x' },
      { op1: 'Dividend', op2: 'Divisor', sign: '/' }];
  }
  export class Enum {
    static getNames(e: any) {
        return Object.keys(e).filter(v => isNaN(parseInt(v, 10)));
    }

    static getValues(e: any) {
        return Object.keys(e).map(v => parseInt(v, 10)).filter(v => !isNaN(v));
    }

    static getNamesAndValues(e: any) {
        return Enum.getValues(e).map(v => { return { name: e[v] as string, value: v }; });
    }
    static getEnums(e: any) {
      return Enum.getNames(e).map( v => { return ProblemType[v]; });
    }
  }
}
