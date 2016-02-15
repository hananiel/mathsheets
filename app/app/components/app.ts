import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../../home/components/home';
import {AboutCmp} from '../../about/components/about';
import {MathSheetCmp} from '../../mathsheet/components/mathsheet';
import {MathSheetOptionsCmp} from '../../mathsheetoptions/components/mathsheetoptions';
import {NameList} from '../../shared/services/name_list';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './app/components/app.html',
  styleUrls: ['./app/components/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' },
  { path: '/mathsheetoptions', component: MathSheetOptionsCmp, as: 'MathSheetOptions'},
  { path: '/mathsheet', component: MathSheetCmp, as: 'MathSheet'}

])
export class AppCmp {}
