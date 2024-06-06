currentDirectory:: / useCaseSensitiveFileNames: false
Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/project/src/class.ts]
export class classC {
    prop = 1;
}

//// [/src/project/src/directUse.ts]
import { indirectClass } from './indirectClass';
new indirectClass().classC.prop;

//// [/src/project/src/indirectClass.ts]
import { classC } from './class';
export class indirectClass {
    classC = new classC();
}

//// [/src/project/src/indirectUse.ts]
import { indirectClass } from './indirectClass';
new indirectClass().classC.prop;

//// [/src/project/src/noChangeFile.ts]
export function writeLog(s: string) {
}

//// [/src/project/src/noChangeFileWithEmitSpecificError.ts]
function someFunc(arguments: boolean, ...rest: any[]) {
}

//// [/src/project/tsconfig.json]
{
  "compilerOptions": {
    "incremental": true
  }
}



Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success


//// [/src/project/tsconfig.tsbuildinfo]
{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"545032748-export class classC {\n    prop = 1;\n}","impliedFormat":1},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"6714567633-export function writeLog(s: string) {\n}","impliedFormat":1},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,7]],"referencedMap":[[4,1],[3,2],[5,1]],"semanticDiagnosticsPerFile":[[7,[{"start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"affectedFilesPendingEmit":[2,4,3,5,6,7],"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../lib/lib.d.ts",
    "./src/class.ts",
    "./src/indirectclass.ts",
    "./src/directuse.ts",
    "./src/indirectuse.ts",
    "./src/nochangefile.ts",
    "./src/nochangefilewithemitspecificerror.ts"
  ],
  "fileIdsList": [
    [
      "./src/indirectclass.ts"
    ],
    [
      "./src/class.ts"
    ]
  ],
  "fileInfos": {
    "../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./src/class.ts": {
      "original": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": 1
      },
      "version": "545032748-export class classC {\n    prop = 1;\n}",
      "signature": "545032748-export class classC {\n    prop = 1;\n}",
      "impliedFormat": "commonjs"
    },
    "./src/indirectclass.ts": {
      "original": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": 1
      },
      "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
      "signature": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
      "impliedFormat": "commonjs"
    },
    "./src/directuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "impliedFormat": "commonjs"
    },
    "./src/indirectuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefile.ts": {
      "original": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": 1
      },
      "version": "6714567633-export function writeLog(s: string) {\n}",
      "signature": "6714567633-export function writeLog(s: string) {\n}",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefilewithemitspecificerror.ts": {
      "original": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "signature": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        7
      ],
      [
        "./src/class.ts",
        "./src/indirectclass.ts",
        "./src/directuse.ts",
        "./src/indirectuse.ts",
        "./src/nochangefile.ts",
        "./src/nochangefilewithemitspecificerror.ts"
      ]
    ]
  ],
  "referencedMap": {
    "./src/directuse.ts": [
      "./src/indirectclass.ts"
    ],
    "./src/indirectclass.ts": [
      "./src/class.ts"
    ],
    "./src/indirectuse.ts": [
      "./src/indirectclass.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "./src/nochangefilewithemitspecificerror.ts",
      [
        {
          "start": 18,
          "length": 18,
          "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
          "category": 1,
          "code": 2396,
          "skippedOn": "noEmit"
        }
      ]
    ]
  ],
  "affectedFilesPendingEmit": [
    [
      "./src/class.ts",
      "Js"
    ],
    [
      "./src/directuse.ts",
      "Js"
    ],
    [
      "./src/indirectclass.ts",
      "Js"
    ],
    [
      "./src/indirectuse.ts",
      "Js"
    ],
    [
      "./src/nochangefile.ts",
      "Js"
    ],
    [
      "./src/nochangefilewithemitspecificerror.ts",
      "Js"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1747
}



Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/project/src/class.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classC = void 0;
var classC = /** @class */ (function () {
    function classC() {
        this.prop = 1;
    }
    return classC;
}());
exports.classC = classC;


//// [/src/project/src/directUse.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indirectClass_1 = require("./indirectClass");
new indirectClass_1.indirectClass().classC.prop;


//// [/src/project/src/indirectClass.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indirectClass = void 0;
var class_1 = require("./class");
var indirectClass = /** @class */ (function () {
    function indirectClass() {
        this.classC = new class_1.classC();
    }
    return indirectClass;
}());
exports.indirectClass = indirectClass;


//// [/src/project/src/indirectUse.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var indirectClass_1 = require("./indirectClass");
new indirectClass_1.indirectClass().classC.prop;


//// [/src/project/src/noChangeFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeLog = writeLog;
function writeLog(s) {
}


//// [/src/project/src/noChangeFileWithEmitSpecificError.js]
function someFunc(arguments) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
}


//// [/src/project/tsconfig.tsbuildinfo]
{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"545032748-export class classC {\n    prop = 1;\n}","impliedFormat":1},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"6714567633-export function writeLog(s: string) {\n}","impliedFormat":1},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,7]],"referencedMap":[[4,1],[3,2],[5,1]],"semanticDiagnosticsPerFile":[[7,[{"start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../lib/lib.d.ts",
    "./src/class.ts",
    "./src/indirectclass.ts",
    "./src/directuse.ts",
    "./src/indirectuse.ts",
    "./src/nochangefile.ts",
    "./src/nochangefilewithemitspecificerror.ts"
  ],
  "fileIdsList": [
    [
      "./src/indirectclass.ts"
    ],
    [
      "./src/class.ts"
    ]
  ],
  "fileInfos": {
    "../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./src/class.ts": {
      "original": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "impliedFormat": 1
      },
      "version": "545032748-export class classC {\n    prop = 1;\n}",
      "signature": "545032748-export class classC {\n    prop = 1;\n}",
      "impliedFormat": "commonjs"
    },
    "./src/indirectclass.ts": {
      "original": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "impliedFormat": 1
      },
      "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
      "signature": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
      "impliedFormat": "commonjs"
    },
    "./src/directuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "impliedFormat": "commonjs"
    },
    "./src/indirectuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefile.ts": {
      "original": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": 1
      },
      "version": "6714567633-export function writeLog(s: string) {\n}",
      "signature": "6714567633-export function writeLog(s: string) {\n}",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefilewithemitspecificerror.ts": {
      "original": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "signature": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        7
      ],
      [
        "./src/class.ts",
        "./src/indirectclass.ts",
        "./src/directuse.ts",
        "./src/indirectuse.ts",
        "./src/nochangefile.ts",
        "./src/nochangefilewithemitspecificerror.ts"
      ]
    ]
  ],
  "referencedMap": {
    "./src/directuse.ts": [
      "./src/indirectclass.ts"
    ],
    "./src/indirectclass.ts": [
      "./src/class.ts"
    ],
    "./src/indirectuse.ts": [
      "./src/indirectclass.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "./src/nochangefilewithemitspecificerror.ts",
      [
        {
          "start": 18,
          "length": 18,
          "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
          "category": 1,
          "code": 2396,
          "skippedOn": "noEmit"
        }
      ]
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1706
}



Change:: Introduce error with emit
Input::
//// [/src/project/src/class.ts]
export class classC {
    prop1 = 1;
}



Output::
/lib/tsc --p src/project
[96msrc/project/src/directUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/indirectUse.ts[0m:[93m2[0m:[93m28[0m - [91merror[0m[90m TS2551: [0mProperty 'prop' does not exist on type 'classC'. Did you mean 'prop1'?

[7m2[0m new indirectClass().classC.prop;
[7m [0m [91m                           ~~~~[0m

  [96msrc/project/src/class.ts[0m:[93m2[0m:[93m5[0m
    [7m2[0m     prop1 = 1;
    [7m [0m [96m    ~~~~~[0m
    'prop1' is declared here.

[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 3 errors in 3 files.

Errors  Files
     1  src/project/src/directUse.ts[90m:2[0m
     1  src/project/src/indirectUse.ts[90m:2[0m
     1  src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m
exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/project/src/class.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classC = void 0;
var classC = /** @class */ (function () {
    function classC() {
        this.prop1 = 1;
    }
    return classC;
}());
exports.classC = classC;


//// [/src/project/src/directUse.js] file written with same contents
//// [/src/project/src/indirectClass.js] file written with same contents
//// [/src/project/src/indirectUse.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"1786859709-export class classC {\n    prop1 = 1;\n}","signature":"-12157283604-export declare class classC {\n    prop1: number;\n}\n","impliedFormat":1},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","signature":"9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","signature":"-3531856636-export {};\n","impliedFormat":1},{"version":"6714567633-export function writeLog(s: string) {\n}","impliedFormat":1},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,7]],"referencedMap":[[4,1],[3,2],[5,1]],"semanticDiagnosticsPerFile":[[4,[{"start":76,"length":4,"code":2551,"category":1,"messageText":"Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?","relatedInformation":[{"file":"./src/class.ts","start":26,"length":5,"messageText":"'prop1' is declared here.","category":3,"code":2728}]}]],[5,[{"start":76,"length":4,"code":2551,"category":1,"messageText":"Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?","relatedInformation":[{"file":"./src/class.ts","start":26,"length":5,"messageText":"'prop1' is declared here.","category":3,"code":2728}]}]],[7,[{"start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../lib/lib.d.ts",
    "./src/class.ts",
    "./src/indirectclass.ts",
    "./src/directuse.ts",
    "./src/indirectuse.ts",
    "./src/nochangefile.ts",
    "./src/nochangefilewithemitspecificerror.ts"
  ],
  "fileIdsList": [
    [
      "./src/indirectclass.ts"
    ],
    [
      "./src/class.ts"
    ]
  ],
  "fileInfos": {
    "../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./src/class.ts": {
      "original": {
        "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
        "signature": "-12157283604-export declare class classC {\n    prop1: number;\n}\n",
        "impliedFormat": 1
      },
      "version": "1786859709-export class classC {\n    prop1 = 1;\n}",
      "signature": "-12157283604-export declare class classC {\n    prop1: number;\n}\n",
      "impliedFormat": "commonjs"
    },
    "./src/indirectclass.ts": {
      "original": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "signature": "9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n",
        "impliedFormat": 1
      },
      "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
      "signature": "9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n",
      "impliedFormat": "commonjs"
    },
    "./src/directuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-3531856636-export {};\n",
      "impliedFormat": "commonjs"
    },
    "./src/indirectuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "signature": "-3531856636-export {};\n",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-3531856636-export {};\n",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefile.ts": {
      "original": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": 1
      },
      "version": "6714567633-export function writeLog(s: string) {\n}",
      "signature": "6714567633-export function writeLog(s: string) {\n}",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefilewithemitspecificerror.ts": {
      "original": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "signature": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        7
      ],
      [
        "./src/class.ts",
        "./src/indirectclass.ts",
        "./src/directuse.ts",
        "./src/indirectuse.ts",
        "./src/nochangefile.ts",
        "./src/nochangefilewithemitspecificerror.ts"
      ]
    ]
  ],
  "referencedMap": {
    "./src/directuse.ts": [
      "./src/indirectclass.ts"
    ],
    "./src/indirectclass.ts": [
      "./src/class.ts"
    ],
    "./src/indirectuse.ts": [
      "./src/indirectclass.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "./src/directuse.ts",
      [
        {
          "start": 76,
          "length": 4,
          "code": 2551,
          "category": 1,
          "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
          "relatedInformation": [
            {
              "file": "./src/class.ts",
              "start": 26,
              "length": 5,
              "messageText": "'prop1' is declared here.",
              "category": 3,
              "code": 2728
            }
          ]
        }
      ]
    ],
    [
      "./src/indirectuse.ts",
      [
        {
          "start": 76,
          "length": 4,
          "code": 2551,
          "category": 1,
          "messageText": "Property 'prop' does not exist on type 'classC'. Did you mean 'prop1'?",
          "relatedInformation": [
            {
              "file": "./src/class.ts",
              "start": 26,
              "length": 5,
              "messageText": "'prop1' is declared here.",
              "category": 3,
              "code": 2728
            }
          ]
        }
      ]
    ],
    [
      "./src/nochangefilewithemitspecificerror.ts",
      [
        {
          "start": 18,
          "length": 18,
          "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
          "category": 1,
          "code": 2396,
          "skippedOn": "noEmit"
        }
      ]
    ]
  ],
  "version": "FakeTSVersion",
  "size": 2551
}



Change:: Fix error and no emit
Input::
//// [/src/project/src/class.ts]
export class classC {
    prop = 1;
}



Output::
/lib/tsc --p src/project --noEmit
exitCode:: ExitStatus.Success


//// [/src/project/tsconfig.tsbuildinfo]
{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"545032748-export class classC {\n    prop = 1;\n}","signature":"-9508063301-export declare class classC {\n    prop: number;\n}\n","impliedFormat":1},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","signature":"9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"6714567633-export function writeLog(s: string) {\n}","impliedFormat":1},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,7]],"referencedMap":[[4,1],[3,2],[5,1]],"semanticDiagnosticsPerFile":[[7,[{"start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"affectedFilesPendingEmit":[2,3],"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../lib/lib.d.ts",
    "./src/class.ts",
    "./src/indirectclass.ts",
    "./src/directuse.ts",
    "./src/indirectuse.ts",
    "./src/nochangefile.ts",
    "./src/nochangefilewithemitspecificerror.ts"
  ],
  "fileIdsList": [
    [
      "./src/indirectclass.ts"
    ],
    [
      "./src/class.ts"
    ]
  ],
  "fileInfos": {
    "../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./src/class.ts": {
      "original": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "signature": "-9508063301-export declare class classC {\n    prop: number;\n}\n",
        "impliedFormat": 1
      },
      "version": "545032748-export class classC {\n    prop = 1;\n}",
      "signature": "-9508063301-export declare class classC {\n    prop: number;\n}\n",
      "impliedFormat": "commonjs"
    },
    "./src/indirectclass.ts": {
      "original": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "signature": "9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n",
        "impliedFormat": 1
      },
      "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
      "signature": "9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n",
      "impliedFormat": "commonjs"
    },
    "./src/directuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "impliedFormat": "commonjs"
    },
    "./src/indirectuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefile.ts": {
      "original": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": 1
      },
      "version": "6714567633-export function writeLog(s: string) {\n}",
      "signature": "6714567633-export function writeLog(s: string) {\n}",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefilewithemitspecificerror.ts": {
      "original": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "signature": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        7
      ],
      [
        "./src/class.ts",
        "./src/indirectclass.ts",
        "./src/directuse.ts",
        "./src/indirectuse.ts",
        "./src/nochangefile.ts",
        "./src/nochangefilewithemitspecificerror.ts"
      ]
    ]
  ],
  "referencedMap": {
    "./src/directuse.ts": [
      "./src/indirectclass.ts"
    ],
    "./src/indirectclass.ts": [
      "./src/class.ts"
    ],
    "./src/indirectuse.ts": [
      "./src/indirectclass.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "./src/nochangefilewithemitspecificerror.ts",
      [
        {
          "start": 18,
          "length": 18,
          "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
          "category": 1,
          "code": 2396,
          "skippedOn": "noEmit"
        }
      ]
    ]
  ],
  "affectedFilesPendingEmit": [
    [
      "./src/class.ts",
      "Js"
    ],
    [
      "./src/indirectclass.ts",
      "Js"
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1942
}



Change:: No Change run with emit
Input::


Output::
/lib/tsc --p src/project
[96msrc/project/src/noChangeFileWithEmitSpecificError.ts[0m:[93m1[0m:[93m19[0m - [91merror[0m[90m TS2396: [0mDuplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.

[7m1[0m function someFunc(arguments: boolean, ...rest: any[]) {
[7m [0m [91m                  ~~~~~~~~~~~~~~~~~~[0m


Found 1 error in src/project/src/noChangeFileWithEmitSpecificError.ts[90m:1[0m

exitCode:: ExitStatus.DiagnosticsPresent_OutputsGenerated


//// [/src/project/src/class.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classC = void 0;
var classC = /** @class */ (function () {
    function classC() {
        this.prop = 1;
    }
    return classC;
}());
exports.classC = classC;


//// [/src/project/src/indirectClass.js] file written with same contents
//// [/src/project/tsconfig.tsbuildinfo]
{"fileNames":["../../lib/lib.d.ts","./src/class.ts","./src/indirectclass.ts","./src/directuse.ts","./src/indirectuse.ts","./src/nochangefile.ts","./src/nochangefilewithemitspecificerror.ts"],"fileIdsList":[[3],[2]],"fileInfos":[{"version":"3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };","affectsGlobalScope":true,"impliedFormat":1},{"version":"545032748-export class classC {\n    prop = 1;\n}","signature":"-9508063301-export declare class classC {\n    prop: number;\n}\n","impliedFormat":1},{"version":"6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}","signature":"9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;","impliedFormat":1},{"version":"6714567633-export function writeLog(s: string) {\n}","impliedFormat":1},{"version":"-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}","affectsGlobalScope":true,"impliedFormat":1}],"root":[[2,7]],"referencedMap":[[4,1],[3,2],[5,1]],"semanticDiagnosticsPerFile":[[7,[{"start":18,"length":18,"messageText":"Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.","category":1,"code":2396,"skippedOn":"noEmit"}]]],"version":"FakeTSVersion"}

//// [/src/project/tsconfig.tsbuildinfo.readable.baseline.txt]
{
  "fileNames": [
    "../../lib/lib.d.ts",
    "./src/class.ts",
    "./src/indirectclass.ts",
    "./src/directuse.ts",
    "./src/indirectuse.ts",
    "./src/nochangefile.ts",
    "./src/nochangefilewithemitspecificerror.ts"
  ],
  "fileIdsList": [
    [
      "./src/indirectclass.ts"
    ],
    [
      "./src/class.ts"
    ]
  ],
  "fileInfos": {
    "../../lib/lib.d.ts": {
      "original": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    },
    "./src/class.ts": {
      "original": {
        "version": "545032748-export class classC {\n    prop = 1;\n}",
        "signature": "-9508063301-export declare class classC {\n    prop: number;\n}\n",
        "impliedFormat": 1
      },
      "version": "545032748-export class classC {\n    prop = 1;\n}",
      "signature": "-9508063301-export declare class classC {\n    prop: number;\n}\n",
      "impliedFormat": "commonjs"
    },
    "./src/indirectclass.ts": {
      "original": {
        "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
        "signature": "9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n",
        "impliedFormat": 1
      },
      "version": "6324910780-import { classC } from './class';\nexport class indirectClass {\n    classC = new classC();\n}",
      "signature": "9337978648-import { classC } from './class';\nexport declare class indirectClass {\n    classC: classC;\n}\n",
      "impliedFormat": "commonjs"
    },
    "./src/directuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "impliedFormat": "commonjs"
    },
    "./src/indirectuse.ts": {
      "original": {
        "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
        "impliedFormat": 1
      },
      "version": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "signature": "-8953710208-import { indirectClass } from './indirectClass';\nnew indirectClass().classC.prop;",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefile.ts": {
      "original": {
        "version": "6714567633-export function writeLog(s: string) {\n}",
        "impliedFormat": 1
      },
      "version": "6714567633-export function writeLog(s: string) {\n}",
      "signature": "6714567633-export function writeLog(s: string) {\n}",
      "impliedFormat": "commonjs"
    },
    "./src/nochangefilewithemitspecificerror.ts": {
      "original": {
        "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
        "affectsGlobalScope": true,
        "impliedFormat": 1
      },
      "version": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "signature": "-19339541508-function someFunc(arguments: boolean, ...rest: any[]) {\n}",
      "affectsGlobalScope": true,
      "impliedFormat": "commonjs"
    }
  },
  "root": [
    [
      [
        2,
        7
      ],
      [
        "./src/class.ts",
        "./src/indirectclass.ts",
        "./src/directuse.ts",
        "./src/indirectuse.ts",
        "./src/nochangefile.ts",
        "./src/nochangefilewithemitspecificerror.ts"
      ]
    ]
  ],
  "referencedMap": {
    "./src/directuse.ts": [
      "./src/indirectclass.ts"
    ],
    "./src/indirectclass.ts": [
      "./src/class.ts"
    ],
    "./src/indirectuse.ts": [
      "./src/indirectclass.ts"
    ]
  },
  "semanticDiagnosticsPerFile": [
    [
      "./src/nochangefilewithemitspecificerror.ts",
      [
        {
          "start": 18,
          "length": 18,
          "messageText": "Duplicate identifier 'arguments'. Compiler uses 'arguments' to initialize rest parameters.",
          "category": 1,
          "code": 2396,
          "skippedOn": "noEmit"
        }
      ]
    ]
  ],
  "version": "FakeTSVersion",
  "size": 1909
}

