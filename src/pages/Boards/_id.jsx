import React from 'react'

import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import AppBar from '~/components/AppBar'

function Board() {
  return (
    <>
      <AppBar/>
      <Container maxWidth={false} sx={{ height:'100vh', backgroundColor:'primary.main' }}>
        <BoardBar/>
        <BoardContent/>
      </Container>
    </>
  )
}

export default Board
