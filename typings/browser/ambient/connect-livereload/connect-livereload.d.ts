// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/5e9d3fc16acc51e6c1ab0085956801cfdfc3d489/connect-livereload/connect-livereload.d.ts
// Type definitions for connect-livereload v0.5.3
// Project: https://github.com/intesso/connect-livereload
// Definitions by: Maxime LUCE <https://github.com/SomaticIT/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "connect-livereload" {
	import { HandleFunction } from "connect";
	
	function livereload(): HandleFunction;
	function livereload(options: livereload.Options): HandleFunction;
	
	module livereload {
		export type FileMatcher = string | RegExp;
		
		export interface Rule {
			match: RegExp;
			fn: (w: string, s: string) => string;
		}
		
		export interface Options {
			ignore?: FileMatcher[];
			excludeList?: FileMatcher[];
			
			include?: FileMatcher[];
			html?: (val: string) => boolean;
			rules?: Rule[];
			disableCompression?: boolean;
			
			hostname?: string;
			port?: number;
			src?: string;
		}
	}
	
	export = livereload;
}