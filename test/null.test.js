import { assert } from "@dmail/assert"
import { inspect } from "../index.js"

const actual = inspect(null)
const expected = "null"
assert({
  actual,
  expected,
})
