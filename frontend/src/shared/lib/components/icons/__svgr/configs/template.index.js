// @ts-check
const path = require('path')
const snakeCase = require('lodash/snakeCase')

const replaceMap = {}

const importStatement = (name, exportName, baseName) => {
  return `import {${name} as ${exportName}} from './${baseName}';`
}

function defaultIndexTemplate(filePaths) {
  const baseNames = []
  const importNames = []
  const exportsNames = []

  filePaths.forEach(filePath => {
    const basename = path.basename(filePath, path.extname(filePath))
    baseNames.push(basename)
    importNames.push(`${basename}Icon`)
    exportsNames.push(snakeCase(basename))
  })

  const imports = importNames
    .map((n, i) => importStatement(n, exportsNames[i], baseNames[i]))
    .join('\n')

  const types = exportsNames
    .map(n => replaceMap[n] ?? n)
    .map(n => `  | '${n}'`)
    .join('\n')

  return `import * as React from 'react';
import {SVGAttributes} from 'react';
${imports}

export type IconName =
${types};

export const iconSet: {
  [key in IconName]: React.FC<SVGAttributes<SVGElement> & {size?: number}>;
} = {
  ${exportsNames
    .map(n => {
      if (replaceMap[n]) {
        return `"${replaceMap[n]}": ${n}`
      }

      return n
    })
    .join(',\n  ')},
};
`
}

module.exports = defaultIndexTemplate
