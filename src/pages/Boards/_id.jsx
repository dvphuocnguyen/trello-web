import React from 'react'
import Container from '@mui/material/Container'
import BoardBar from './BoardBar'
import BoardContent from './BoardContent'
import AppBar from '~/components/AppBar'

function Board() {
  return (
    <>
      <AppBar/>
      <Container disableGutters maxWidth={false} sx={{ height:'100vh' }}>
        <BoardBar/>
        <BoardContent/>
      </Container>
    </>
  )
}

export default Board
