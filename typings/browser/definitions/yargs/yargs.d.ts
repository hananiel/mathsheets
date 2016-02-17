// Compiled using typings@0.6.8
// Source: https://raw.githubusercontent.com/typed-typings/npm-yargs/0ceaff08a778b580fd4772b04bfb59fbf836dd8e/index.d.ts
declare module 'yargs/index' {
module yargs {
  interface Argv {
    _: string[];
    '$0': string;
    [key: string]: any;
  }

  interface Yargs {
    argv: Argv;
    (args: string[]): Argv;
    parse (args: string[]): Argv;
    alias (key: string, alias: string): Yargs;
    alias (aliases: { [key: string]: string | string[] }): Yargs;
    array (key: string): Yargs;
    boolean (key: string): Yargs;
    check (fn: (argv: Argv, aliases: { [key: string]: string[] }) => any): Yargs;
    choices (key: string, choices: (string | number)[]): Yargs;
    command (command: string, description: string, fn?: (yargs: Yargs, argv: Argv) => void): Yargs;
    completion (cmd: string, fn?: SyncCompletionFunction | AsyncCompletionFunction): Yargs;
    completion (cmd: string, description?: string, fn?: SyncCompletionFunction | AsyncCompletionFunction): Yargs;
    config (key: string, description?: string): Yargs;
    count (key: string): Yargs;
    default (key: string, value: any, description?: string): Yargs;
    default (defaults: { [key: string]: any }): Yargs;
    demand (key: string | string[], msg?: string): Yargs;
    demand (key: string | string[], required?: boolean): Yargs;
    demand (count: number, msg?: string): Yargs;
    demand (count: number, max?: number, msg?: string): Yargs;
    require (key: string | string[], msg?: string): Yargs;
    require (key: string | string[], required?: boolean): Yargs;
    require (count: number, msg?: string): Yargs;
    require (count: number, max?: number, msg?: string): Yargs;
    required (key: string | string[], msg?: string): Yargs;
    required (key: string | string[], required?: boolean): Yargs;
    required (count: number, msg?: string): Yargs;
    required (count: number, max?: number, msg?: string): Yargs;
    describe (key: string, description: string): Yargs;
    detectLocale (enable: boolean): Yargs;
    env (prefix?: string | boolean): Yargs;
    epilog (str: string): Yargs;
    epilogue (str: string): Yargs;
    example (cmd: string, description: string): Yargs;
    exitProcess (enable: boolean): Yargs;
    fail (fn: (message: string) => any): Yargs;
    group (keys: string | string[], groupName: string): Yargs;
    help (): string;
    help (option?: string, description?: string): Yargs;
    implies (x: string, y: string): Yargs;
    locale (): string;
    locale (locale: string): Yargs;
    nargs (key: string, count: number): Yargs;
    option (key: string, options: Options): Yargs;
    options (key: string, options: Options): Yargs;
    option (options: { [key: string]: Options }): Yargs;
    options (options: { [key: string]: Options }): Yargs;
    requiresArg (key: string): Yargs;
    reset (): Yargs;
    showCompletionScript (): string;
    showHelp (consoleLevel?: string): Yargs;
    showHelpOnFail (enable: boolean, message?: string): Yargs;
    strict (): Yargs;
    string (key: string): Yargs;
    updateLocale (obj: { [key: string]: string }): Yargs;
    updateStrings (obj: { [key: string]: string }): Yargs;
    usage (message: string, opts?: Options): Yargs;
    version (version: () => string): Yargs;
    version (version: string, option?: string, description?: string): Yargs;
    wrap (columns: number): Yargs;
  }

  interface Options {
    alias?: string | string[];
    array?: boolean;
    boolean?: boolean;
    choices?: (string | number)[];
    config?: boolean;
    count?: boolean;
    default?: any;
    defaultDescription?: string;
    demand?: boolean | string;
    require?: boolean | string;
    required?: boolean | string;
    desc?: string;
    describe?: string;
    description?: string;
    group?: string;
    nargs?: number;
    requiresArg?: boolean;
    string?: boolean;
    type?: string;
  }

  type SyncCompletionFunction = (current: string, argv: any) => string[];
  type AsyncCompletionFunction = (current: string, argv: any, done: (completion: string[]) => void) => void;
}

var yargs: yargs.Yargs;

export = yargs;
}
declare module 'yargs' {
import main = require('yargs/index');
export = main;
}