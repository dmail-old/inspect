import { assert } from "@dmail/assert"
import { inspect } from "../index.js"

{
  const actual = inspect(() => {})
  const expected = `() => {/* hidden */}`
  assert({ actual, expected })
}

{
  const actual = inspect(() => {}, { showFunctionBody: true })
  const expected = "() => {}"
  assert({ actual, expected })
}

{
  const actual = inspect(() => true, { showFunctionBody: true })
  const expected = `() => true`
  assert({ actual, expected })
}

{
  const named = (a) => a

  {
    const actual = inspect(named)
    const expected = `() => {/* hidden */}`
    assert({ actual, expected })
  }
  {
    const actual = inspect(named, { showFunctionBody: true })
    const expected = "a => a"
    assert({ actual, expected })
  }
}

{
  const nested = {
    function: () => {},
  }
  const actual = inspect(nested)
  const expected = `{
  "function": () => {/* hidden */}
}`
  assert({ actual, expected })
}
