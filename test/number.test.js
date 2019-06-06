import { assert } from "@dmail/assert"
import { inspect } from "../index.js"

{
  const actual = inspect(0)
  const expected = "0"
  assert({ actual, expected })
}

{
  const actual = inspect(1)
  const expected = "1"
  assert({ actual, expected })
}

{
  const actual = inspect(-0)
  const expected = "-0"
  assert({ actual, expected })
}

{
  const actual = inspect(Infinity)
  const expected = "Infinity"
  assert({ actual, expected })
}

{
  // eslint-disable-next-line no-new-wrappers
  const actual = inspect(new Number(0))
  const expected = "Number(0)"
  assert({
    actual,
    expected,
  })
}

{
  // eslint-disable-next-line no-new-wrappers
  const actual = inspect(new Number(0), { parenthesis: true })
  const expected = "(Number(0))"
  assert({
    actual,
    expected,
  })
}

{
  // eslint-disable-next-line no-new-wrappers
  const actual = inspect(new Number(0), { useNew: true })
  const expected = "new Number(0)"
  assert({
    actual,
    expected,
  })
}

{
  // eslint-disable-next-line no-new-wrappers
  const actual = inspect(new Number(0), { parenthesis: true, useNew: true })
  const expected = "new (Number(0))"
  assert({
    actual,
    expected,
  })
}
