import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it
} from 'angular2/testing';
import {Component} from 'angular2/core';
//import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {MathSheetOptionsCmp} from './mathsheetoptions';
import {NameList} from '../../shared/services/name_list';

export function main() {
  describe('Mathsheet Options component', () => {
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then(rootTC => {
            rootTC.detectChanges();
            expect(1).toEqual(1);

            // let msOptionsInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
            // let aboutDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
            // let nameListLen = function () {
            //   console.log(msOptionsInstance);
            //   return msOptionsInstance;
            // };
            //
            // expect(msOptionsInstance.list).toEqual(jasmine.any(NameList));
            // expect(nameListLen()).toEqual(4);
            // expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());
            //
            // aboutInstance.newName = 'Minko';
            // aboutInstance.addName();
            // rootTC.detectChanges();
            //
            // expect(nameListLen()).toEqual(5);
            // expect(DOM.querySelectorAll(aboutDOMEl, 'li').length).toEqual(nameListLen());
            //
            // expect(DOM.querySelectorAll(aboutDOMEl, 'li')[4].textContent).toEqual('Minko');
          });
      }));
  });
}

@Component({
  providers: [NameList],
  selector: 'test-cmp',
  template: '<div><about></about></div>',
  directives: [MathSheetOptionsCmp]
})
class TestComponent {}
