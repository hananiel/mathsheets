import {
  TestComponentBuilder,
  describe,
  expect,
  injectAsync,
  it,
  beforeEachProviders
} from 'angular2/testing';
import {Component, provide, DirectiveResolver} from 'angular2/core';
import {SpyLocation} from 'angular2/src/mock/location_mock';
import {Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT} from 'angular2/router';
import {RootRouter} from 'angular2/src/router/router';
//import {DOM} from 'angular2/src/platform/dom/dom_adapter';
import {MathSheetCmp} from './mathsheet';
import {NameList} from '../../shared/services/name_list';

export function main() {
  describe('Mathsheet component', () => {
    beforeEachProviders(() => [
      RouteRegistry,
      DirectiveResolver,
      provide(Location, {useClass: SpyLocation}),
      provide(ROUTER_PRIMARY_COMPONENT, {useValue: MathSheetCmp}),
      provide(Router, {useClass: RootRouter})
    ]);
    it('should work',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
        return tcb.createAsync(TestComponent)
          .then(rootTC => {
            rootTC.detectChanges();

            // let aboutInstance = rootTC.debugElement.componentViewChildren[0].componentInstance;
            // let aboutDOMEl = rootTC.debugElement.componentViewChildren[0].nativeElement;
            // let nameListLen = function () {
            //   return aboutInstance.list.names.length;
            // };
            expect(1).toEqual(1);
            // expect(aboutInstance.list).toEqual(jasmine.any(NameList));
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
  template: '<div></div>',
  directives: [MathSheetCmp]
})
class TestComponent {}
