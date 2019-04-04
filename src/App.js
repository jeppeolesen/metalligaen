import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme'
import GlobalStyles from './styles/global'
import { BaseCSS } from 'styled-bootstrap-grid'

import Hero from './components/Hero'
import Teams from './components/Teams'

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <BaseCSS />
          <GlobalStyles />
          <Hero />
          <Teams />
        </div>
      </ThemeProvider>
    );
  }
}
