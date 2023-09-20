import React from 'react'
import Box from '@mui/material/Box'
import ModeSelect from '../ModeSelect'
import Workspace from './Menus/Workspace'
import Recent from './Menus/Recent'
import Starred from './Menus/Starred'
import Templates from './Menus/Templates'
import Profile from './Menus/Profile'

//
import AppsIcon from '@mui/icons-material/Apps'
import { ReactComponent as TrelloICon } from '~/assets/trello.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
//
import Badge from '@mui/material/Badge'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Tooltip from '@mui/material/Tooltip'

function AppBar() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false)

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  }

  return (
    <Box
      px ={2}
      sx={{
        width:'100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AppsIcon sx={{ color:'primary.main' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SvgIcon component={TrelloICon} inheritViewBox sx={{ color: 'primary.main' }}/>
          <Typography variant='span' sx={{ fontSize: '1rem', fontWeigth: 'bold', color: 'primary.main' }}>Trello</Typography>
          <Workspace/>
          <Recent/>
          <Starred/>
          <Templates/>

          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      {/* cach */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <TextField id="outlined-search" label="Search ..." type="search" size='small' />
        <ModeSelect/>

        <Tooltip title="Notification" >
          <Badge color="secondary" variant="dot" invisible={invisible} sx={{ cursor:'pointer' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Infomation" sx={{ cursor:'pointer' }}>
          <HelpOutlineIcon sx={{ ml:1 }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
