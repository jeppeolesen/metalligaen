import React, { Component } from 'react'
import styled from 'styled-components'
import { Container, Row, Col } from 'styled-bootstrap-grid'

import Clip from './clip.svg'

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background: url('images/regin.jpg') center / cover;
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${Clip}) center / cover;
`

export default class Hero extends Component {
  render() {
    return(
      <Wrapper>
        <Overlay />
      </Wrapper>
    )
  }
}
