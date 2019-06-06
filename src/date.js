import { inspectConstructor } from "./constructor.js"

export const inspectDate = (value, { nestedInspect, useNew, parenthesis }) => {
  const dateSource = nestedInspect(value.valueOf())
  return inspectConstructor(`Date(${dateSource})`, { useNew, parenthesis })
}
