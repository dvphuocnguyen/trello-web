import React from 'react'

import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import ModeSelect from '../../componenst/ModeSelect'

import AppBar from '../../componenst/AppBar'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'

function Board() {
  return (
    <Container maxWidth={false} sx={{height:'100vh', backgroundColor:'primary.main'}}>
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}

export default Board
