export const inspectNumber = (value) => {
  return Object.is(value, -0) ? "-0" : value.toString()
}
