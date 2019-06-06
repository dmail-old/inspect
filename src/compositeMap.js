import { inspectArray } from "./array.js"
import { inspectObject } from "./object.js"
import { inspectFunction } from "./function.js"
import { inspectDate } from "./date.js"
import { inspectNumberObject } from "./number-object.js"
import { inspectStringObject } from "./string-object.js"
import { inspectBooleanObject } from "./boolean-object.js"
import { inspectError } from "./error.js"
import { inspectRegExp } from "./regexp.js"

export const compositeMap = {
  Array: inspectArray,
  Boolean: inspectBooleanObject,
  Error: inspectError,
  Date: inspectDate,
  Function: inspectFunction,
  Number: inspectNumberObject,
  Object: inspectObject,
  RegExp: inspectRegExp,
  String: inspectStringObject,
}
