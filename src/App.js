import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'

import Hero from './components/Hero'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
          <Hero />
        </div>
      </ThemeProvider>
    );
  }
}
