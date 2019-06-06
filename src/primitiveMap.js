import { inspectBoolean } from "./boolean.js"
import { inspectNull } from "./null.js"
import { inspectNumber } from "./number.js"
import { inspectString } from "./string.js"
import { inspectSymbol } from "./symbol.js"
import { inspectUndefined } from "./undefined.js"

export const primitiveMap = {
  boolean: inspectBoolean,
  null: inspectNull,
  number: inspectNumber,
  string: inspectString,
  symbol: inspectSymbol,
  undefined: inspectUndefined,
}
