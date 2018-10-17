// import { book as theme } from 'mdx-deck/themes'
import { comic as theme } from 'mdx-deck/themes'
// import { rye as theme } from 'mdx-deck/themes'

export default {
  ...theme
  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md

}

export const codeSurferTheme = {
  plain: {
    color: 'initial',
    backgroundColor: 'initial'
  },
  styles: [{
    types: ['prolog'],
    style: {
      color: 'rgb(0, 0, 128)'
    }
  },
  {
    types: ['comment'],
    style: {
      color: 'rgb(106, 153, 85)'
    }
  },
  {
    types: ['builtin', 'tag', 'changed', 'keyword'],
    style: {
      color: 'rgb(86, 156, 214)'
    }
  },
  {
    types: ['number', 'inserted'],
    style: {
      color: '#4caf50'
    }
  },
  {
    types: ['constant'],
    style: {
      color: 'rgb(100, 102, 149)'
    }
  },
  {
    types: ['attr-name', 'variable'],
    style: {
      color: 'rgb(156, 220, 254)'
    }
  },
  {
    types: ['deleted', 'string'],
    style: {
      color: '#f44336'
    }
  },
  {
    types: ['selector'],
    style: {
      color: 'rgb(215, 186, 125)'
    }
  },
  {
    types: ['punctuation'],
    style: {
      color: '#9e9e9e'
    }
  },
  {
    types: ['operator'],
    style: {
      color: 'initial'
    }
  },
  {
    types: ['boolean'],
    style: {
      color: '#9c27b0'
    }
  }
  ]
}
