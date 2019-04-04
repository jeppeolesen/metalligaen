import React, { Component } from 'react'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import styled from 'styled-components'

const Wrapper = styled.section``

const TeamsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Team = styled.div`
  padding: 25px;
  display: flex;
  align-items: center;
  
  img {
    max-height: 75px;
  }
`

const WideTeam = styled(Team)`
  img {
    max-height: 40px;
  }
`

export default class Teams extends Component {
  render() {
    return(
      <Wrapper>
        <Container fluid>
          <TeamsContainer>
            <Team>
              <img src="images/teams/aalborg.png" alt=""/>
            </Team>
            <Team>
              <img src="images/teams/esbjerg.png" alt=""/>
            </Team>
            <Team>
              <img src="images/teams/frederikshavn.png" alt=""/>
            </Team>
            <Team>
              <img src="images/teams/herlev.png" alt=""/>
            </Team>
            <WideTeam>
              <img src="images/teams/blue-fox.png" alt=""/>
            </WideTeam>
            <Team>
              <img src="images/teams/odense.png" alt=""/>
            </Team>
            <Team>
              <img src="images/teams/rodovre.jpg" alt=""/>
            </Team>
            <Team>
              <img src="images/teams/rungsted.png" alt=""/>
            </Team>
            <Team>
              <img src="images/teams/sonderjyske.png" alt=""/>
            </Team>
          </TeamsContainer>
        </Container>
      </Wrapper>
    )
  }
}
