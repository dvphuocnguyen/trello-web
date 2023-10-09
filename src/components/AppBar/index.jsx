import React from 'react'
import { useState } from 'react'
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
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import Tooltip from '@mui/material/Tooltip'
import LibraryAddIcon from '@mui/icons-material/LibraryAdd'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import CloseIcon from '@mui/icons-material/Close'

function AppBar() {
  const [invisible] = React.useState(false)
  const [searchValue, setsearchValue] = useState('')
  return (
    <Box
      sx={{
        width:'100%',
        height: (theme) => theme.trello.appBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <AppsIcon sx={{ color: 'white' }}/>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <SvgIcon component={TrelloICon} inheritViewBox sx={{ color: 'white' }}/>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
          <Typography variant='span' sx={{ fontSize: '1rem', fontWeigth: 'bold', color: 'white', alignSelf: 'center' }}>Trello</Typography>
          <Workspace/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button
            sx={{ color: 'white',
              border: 'none',
              '&.hover':{
                border: 'none'
              }
            }}
            variant="outlined"
            startIcon={<LibraryAddIcon />}>
            Create</Button>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }} >
        <TextField
          id="outlined-search"
          label="Search ..."
          type="text"
          value={searchValue}
          onChange={(e) => setsearchValue(e.target.value)}
          size='small'
          InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                fontSize="small"
                sx={{ color: searchValue ? 'white' : 'transparent', cursor:'pointer' }}
                onClick={() => setsearchValue('')}
              />
            )
          }}
          sx={{
            minWidth: '120px',
            maxWidth: '190px',
            '& label': { color: 'white' },
            '& input': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& .MuiOutlinedInput-root':{
              '& fieldset':{ borderColor: 'white' },
              '&:hover fieldset':{ borderColor: 'white' },
              '&.Mui-focused fieldset':{ borderColor: 'white' }
            }
          }}/>
        <ModeSelect/>

        <Tooltip title="Notification" >
          <Badge color="warning" variant="dot" invisible={invisible} sx={{ cursor:'pointer', color: 'white' }}>
            <NotificationsNoneIcon />
          </Badge>
        </Tooltip>

        <Tooltip title="Infomation" sx={{ cursor:'pointer' }}>
          <HelpOutlineIcon sx={{ ml:1, color: 'white' }}/>
        </Tooltip>
        <Profile/>
      </Box>
    </Box>
  )
}

export default AppBar
