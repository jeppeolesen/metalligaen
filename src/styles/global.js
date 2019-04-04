import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import theme from './theme'
import fonts from './fonts'

export default createGlobalStyle`
  ${styledNormalize}

  ${fonts}

  html, body {
    font-family: ${theme.fonts.base};
  }

  h1, h2, h3, h4, h5 {
    font-family: ${theme.fonts.display};
  }
`
