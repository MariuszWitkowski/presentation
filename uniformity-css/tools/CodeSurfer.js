import React from 'react'
import { CodeSurfer } from 'mdx-deck-code-surfer'
import { codeSurferTheme } from './theme'

/*
<CodeSurfer
  title="OOCSS"
  code={require("!raw-loader!./snippets/oocss.css")}
  steps={[
    { notes: "Start with this note"},
    { lines: [6], notes: "Note for the first step" },
    { range: [5, 9] },
    { tokens: { 9: [3, 4, 5] }, notes: "Note for the third step" }
  ]}
/>
*/

export default props =>
  <CodeSurfer
    theme={codeSurferTheme}
    lang='javascript'
    showNumbers={false}
    dark={false}
    {...props}
  />
