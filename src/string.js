import { quote } from "./util.js"

export const inspectString = (value, { singleQuote }) => {
  const quotedValue = quote(value)
  return singleQuote ? `'${quotedValue}'` : `"${quotedValue}"`
}
