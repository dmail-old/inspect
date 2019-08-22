import { assert } from "@dmail/assert"
import { inspect } from "../index.js"

{
  const actual = inspect("")
  const expected = `""`
  assert({ actual, expected })
}

{
  const actual = inspect("dam")
  const expected = `"dam"`
  assert({ actual, expected })
}

{
  const actual = inspect("don't")
  const expected = `"don\\\'t"`
  assert({ actual, expected })
}

{
  // eslint-disable-next-line no-eval
  const actual = eval(inspect("don't"))
  const expected = "don't"
  assert({ actual, expected })
}

{
  const actual = inspect(`his name is "dam"`)
  const expected = `"his name is \\\"dam\\\""`
  assert({ actual, expected })
}

{
  const actual = inspect("a\nb")
  const expected = `"a\\nb"`
  assert({ actual, expected })
}

{
  const actual = inspect("a\rb")
  const expected = `"a\\rb"`
  assert({ actual, expected })
}

{
  const actual = inspect("a\u2028b")
  const expected = `"a\\u2028b"`
  assert({ actual, expected })
}

{
  const actual = inspect("a\u2029b")
  const expected = `"a\\u2029b"`
  assert({ actual, expected })
}

{
  // eslint-disable-next-line no-new-wrappers
  const actual = inspect(new String(""))
  const expected = `String("")`
  assert({
    actual,
    expected,
  })
}

{
  // eslint-disable-next-line no-new-wrappers
  const actual = inspect(new String("dam"))
  const expected = `String("dam")`
  assert({
    actual,
    expected,
  })
}

{
  const actual = inspect("dam", { singleQuote: true })
  const expected = `'dam'`
  assert({ actual, expected })
}

{
  const actual = inspect("don't", { singleQuote: true })
  const expected = `'don\\\'t'`
  assert({ actual, expected })
}

{
  // eslint-disable-next-line no-eval
  const actual = eval(inspect("don't", { singleQuote: true }))
  const expected = "don't"
  assert({ actual, expected })
}
