import React from 'react'
import theme from '~/theme'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
//
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Tooltip from '@mui/material/Tooltip'
import Cloud from '@mui/icons-material/Cloud'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import AddCardIcon from '@mui/icons-material/AddCard'
import DragHandleIcon from '@mui/icons-material/DragHandle'
//Card list
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import GroupIcon from '@mui/icons-material/Group'
import CommentIcon from '@mui/icons-material/Comment'
import AttachmentIcon from '@mui/icons-material/Attachment'


const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'


function BoardContent() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width:'100%',
      height: (theme) => theme.trello. boardContentHeight,
      p: '4px 0'
    }}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowY: 'hidden',
          overflowX: 'auto'
        }}
      >
        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: `calc(${theme.trello.boardContentHeight}  - ${theme.spacing(4)})`
          }}
        >
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Typography
              variant= "h6"
              sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
              Comlumn title
            </Typography>
            <Box>
              {/* ... */}
              <Tooltip title="More actions">
                <MoreHorizIcon
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu-dropdown' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                />
              </Tooltip>
              <Menu
                id="basic-menu-dropdown"
                aria-labelledby="basic-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
              >
                <MenuItem>
                  <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                  <ListItemText>Copy card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                  <ListItemText>Cut card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                  <ListItemText>Archive this list</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Remove</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} -
            ${COLUMN_FOOTER_HEIGHT} - 
            ${COLUMN_HEADER_HEIGHT}
            )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: '140px' }}
                image = "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/369600537_2121662974843120_6346597150402948706_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=To_Ax1JCDr0AX9N6yQH&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCzMlEdsZgEyT6lKRQI65m2JmAnkB2It4mPRciiHKjVWg&oe=65290ED3"
                title="green iguana"
              />
              <CardContent sx={{ p: 1, '&:last-child': { p: 1.5 } }}>
                <Typography >Nguyennnn</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon/> }>20</Button>
                <Button size="small" startIcon={<CommentIcon/> }>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/> }>10</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Phuoc Nguyen</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Phuoc Nguyen</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Phuoc Nguyen</Typography>
              </CardContent>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Phuoc Nguyen</Typography>
              </CardContent>
            </Card>

          </Box>


          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button startIcon={ <AddCardIcon/> }>Add new card</Button>
            <Tooltip title="Drag to move ">
              <DragHandleIcon sx={{ cursor: 'pointer' }}/>
            </Tooltip>
          </Box>
        </Box>

        <Box
          sx={{
            minWidth: '300px',
            maxWidth: '300px',
            bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
            ml: 2,
            borderRadius: '6px',
            height: 'fit-content',
            maxHeight: `calc(${theme.trello.boardContentHeight}  - ${theme.spacing(4)})`
          }}
        >
          <Box
            sx={{
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
            <Typography
              variant= "h6"
              sx={{
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}>
              Comlumn title
            </Typography>
            <Box>
              {/* ... */}
              <Tooltip title="More actions">
                <MoreHorizIcon
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu-dropdown' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'text.primary', cursor: 'pointer' }}
                />
              </Tooltip>
              <Menu
                id="basic-menu-dropdown"
                aria-labelledby="basic-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left'
                }}
              >
                <MenuItem>
                  <ListItemIcon><AddCardIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Add new card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCopy fontSize="small" /></ListItemIcon>
                  <ListItemText>Copy card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentCut fontSize="small" /></ListItemIcon>
                  <ListItemText>Cut card</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><ContentPaste fontSize="small" /></ListItemIcon>
                  <ListItemText>Paste</ListItemText>
                </MenuItem>

                <Divider />
                <MenuItem>
                  <ListItemIcon><Cloud fontSize="small" /></ListItemIcon>
                  <ListItemText>Archive this list</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon><DeleteForeverIcon fontSize="small" /></ListItemIcon>
                  <ListItemText>Remove</ListItemText>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
          <Box sx={{
            p: '0 5px',
            m: '0 5px',
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            overflowX: 'hidden',
            overflowY: 'auto',
            maxHeight: (theme) => `calc(
            ${theme.trello.boardContentHeight} - 
            ${theme.spacing(5)} -
            ${COLUMN_FOOTER_HEIGHT} - 
            ${COLUMN_HEADER_HEIGHT}
            )`,
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#ced0da',
              borderRadius: '8px'
            },
            '&::-webkit-scrollbar-thumb:hover': {
              backgroundColor: '#bfc2cf'
            }
          }}>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardMedia
                sx={{ height: '140px' }}
                image = "https://scontent.fdad3-6.fna.fbcdn.net/v/t39.30808-6/369600537_2121662974843120_6346597150402948706_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=To_Ax1JCDr0AX9N6yQH&_nc_ht=scontent.fdad3-6.fna&oh=00_AfCzMlEdsZgEyT6lKRQI65m2JmAnkB2It4mPRciiHKjVWg&oe=65290ED3"
                title="green iguana"
              />
              <CardContent sx={{ p: 1, '&:last-child': { p: 1.5 } }}>
                <Typography >Nguyennnn</Typography>
              </CardContent>
              <CardActions sx={{ p: '0 4px 8px 4px' }}>
                <Button size="small" startIcon={<GroupIcon/> }>20</Button>
                <Button size="small" startIcon={<CommentIcon/> }>15</Button>
                <Button size="small" startIcon={<AttachmentIcon/> }>10</Button>
              </CardActions>
            </Card>
            <Card sx={{
              cursor: 'pointer',
              boxShadow: '0 1px 1px rgba(0,0,0,0.2)',
              overflow: 'unset'
            }}>
              <CardContent sx={{ p: 1.5, '&: last-child': { p: 1.5 } }}>
                <Typography > Phuoc Nguyen</Typography>
              </CardContent>
            </Card>


          </Box>


          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Button startIcon={ <AddCardIcon/> }>Add new card</Button>
            <Tooltip title="Drag to move ">
              <DragHandleIcon sx={{ cursor: 'pointer' }}/>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default BoardContent
