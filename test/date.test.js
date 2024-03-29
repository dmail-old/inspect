import { assert } from "@dmail/assert"
import { inspect } from "../index.js"

{
  const actual = inspect(new Date(10))
  const expected = `Date(10)`
  assert({ actual, expected })
}

{
  const nowMs = Date.now()
  const actual = inspect(new Date(nowMs))
  const expected = `Date(${nowMs})`
  assert({ actual, expected })
}
