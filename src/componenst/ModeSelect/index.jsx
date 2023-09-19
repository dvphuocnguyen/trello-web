import React from 'react'
// import { useState } from 'react'
import Button from '@mui/material/Button'
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm'
import HomeIcon from '@mui/icons-material/Home'
//
import {
  // Experimental_CssVarsProvider as CssVarsProvider,
  // experimental_extendTheme as extendTheme,
  useColorScheme
} from '@mui/material/styles'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import LightModeIcon from '@mui/icons-material/LightMode'


function ModeSelect() {
  const { mode, setMode } = useColorScheme()
  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    const selectMode = event.target.value
    console.log(selectMode)
    setMode(selectMode)
  }
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
      <Select
        labelId="label-select-dark-light-mode"
        id="select-dark-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
      >
        <MenuItem value="light"><LightModeIcon fontSize='small'/>Light</MenuItem>
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </FormControl>
  )
}

export default ModeSelect
