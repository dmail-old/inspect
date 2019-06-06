import { valueToType } from "./valueToType.js"
import { primitiveMap } from "./primitiveMap.js"
import { compositeMap } from "./compositeMap.js"
import { inspectConstructor } from "./constructor.js"
import { inspectObject } from "./object.js"

export const inspect = (
  value,
  {
    parenthesis = false,
    singleQuote = false,
    useNew = false,
    objectConstructor = false,
    showFunctionBody = false,
    indentUsingTab = false,
    indentSize = 2,
  } = {},
) => {
  const scopedInspect = (scopedValue, scopedOptions) => {
    const { primitiveType, compositeType } = valueToType(scopedValue)
    const options = {
      ...scopedOptions,
      nestedInspect: (nestedValue, nestedOptions = {}) => {
        return scopedInspect(nestedValue, {
          ...scopedOptions,
          depth: scopedOptions.depth + 1,
          ...nestedOptions,
        })
      },
    }
    if (primitiveType) return primitiveMap[primitiveType](scopedValue, options)
    if (compositeType in compositeMap) return compositeMap[compositeType](scopedValue, options)

    return inspectConstructor(`${compositeType}(${inspectObject(scopedValue, options)})`, {
      ...options,
      parenthesis: false,
    })
  }

  return scopedInspect(value, {
    parenthesis,
    singleQuote,
    useNew,
    objectConstructor,
    showFunctionBody,
    indentUsingTab,
    indentSize,
    depth: 0,
  })
}
