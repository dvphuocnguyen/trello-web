import React from 'react'
import { Box, Tooltip } from '@mui/material'
import Chip from '@mui/material/Chip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Button from '@mui/material/Button'
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1'

const MENU_STYLES = {
  color:'white',
  bgcolor:'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color:'white'
  },
  '&:hover': {
    bgcolor: 'primary.100'
  }
}
const avata_test = 'https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/369600537_2121662974843120_6346597150402948706_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=1NKzf6oQJCcAX8ysYIP&_nc_ht=scontent.fdad2-1.fna&oh=00_AfDVHflAWFXgi4J3X19FfouN-andFvEIW3wnkX534RP8tw&oe=65154853'
function BoardBar() {
  return (
    <Box
      sx={{
        width:'100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 1,
        overflowX: 'auto',
        borderBottom: '2px solid #fff',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2')
      }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Chip
          sx={MENU_STYLES}
          icon={<DashboardIcon />}
          label="Nguyennn trello mernstacks"
          onClick={() => {}} />
        <Chip
          sx={MENU_STYLES}
          icon={<VpnLockIcon />}
          label="Public/Private Workspaces"
          onClick={() => {}} />
        <Chip
          sx={MENU_STYLES}
          icon={<AddToDriveIcon />}
          label="Add to Google Drive"
          onClick={() => {}} />
        <Chip
          sx={MENU_STYLES}
          icon={<BoltIcon />}
          label="Automation"
          onClick={() => {}} />
        <Chip
          sx={MENU_STYLES}
          icon={<FilterListIcon />}
          label="Filters"
          onClick={() => {}} />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >Invited</Button>
        <AvatarGroup max={6}
          sx={{
            gap: '6px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none'
            } }}
        >
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
          <Tooltip title="Nguyenn">
            <Avatar alt="Remy Sharp" src={avata_test} />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
