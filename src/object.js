import { preNewLineAndIndentation, wrapNewLineAndIndentation } from "./util.js"
import { inspectConstructor } from "./constructor.js"

export const inspectObject = (
  value,
  {
    nestedInspect,
    seen = [],
    depth,
    indentUsingTab,
    indentSize,
    objectConstructor,
    parenthesis,
    useNew,
  },
) => {
  if (seen.indexOf(value) > -1) {
    return "Symbol.for('circular')"
  }
  seen.push(value)

  let propertiesSource = ""
  const propertyNames = Object.getOwnPropertyNames(value)
  let i = 0
  const j = propertyNames.length

  while (i < j) {
    const propertyName = propertyNames[i]
    const propertyNameAsNumber = parseInt(propertyName, 10)
    const propertyNameSource = nestedInspect(
      Number.isInteger(propertyNameAsNumber) ? propertyNameAsNumber : propertyName,
    )
    const propertyValueSource = nestedInspect(value[propertyName], { seen })

    if (i === 0) {
      propertiesSource += `${propertyNameSource}: ${propertyValueSource}`
    } else {
      propertiesSource += `,${preNewLineAndIndentation(
        `${propertyNameSource}: ${propertyValueSource}`,
        { depth, indentUsingTab, indentSize },
      )}`
    }

    i++
  }

  let objectSource
  if (propertiesSource.length) {
    objectSource = `${wrapNewLineAndIndentation(propertiesSource, {
      depth,
      indentUsingTab,
      indentSize,
    })}`
  } else {
    objectSource = ""
  }

  if (objectConstructor) {
    objectSource = `Object({${objectSource}})`
  } else {
    objectSource = `{${objectSource}}`
  }

  return inspectConstructor(objectSource, { parenthesis, useNew })
}
