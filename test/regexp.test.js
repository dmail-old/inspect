import { assert } from "@dmail/assert"
import { inspect } from "../index.js"

{
  const actual = inspect(/ok/g)
  const expected = "/ok/g"
  assert({ actual, expected })
}

{
  const actual = inspect(new RegExp("foo", "g"))
  const expected = "/foo/g"
  assert({ actual, expected })
}
