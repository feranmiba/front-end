import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Search from '@mui/icons-material/Search'
import IconButton from '@mui/material/IconButton'
import AddAlertIcon from '@mui/icons-material/AddAlert';
import Divider from '@mui/material/Divider'
import Person from '@mui/icons-material/Person'
import Paper from '@mui/material/Paper'
import SortIcon from '@mui/icons-material/Sort';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import TheTable from './TheTable'
import { motion } from 'framer-motion'


function Ticket() {
  return (
    <motion.div initial={{opacity: 0,}} whileInView={{opacity:1,  transition: {duration : 1}}}>
    <Box sx={{ padding: '20px'}}>
    <Stack direction={'row'} spacing={75}>
      <Typography variant='h5' fontWeight={600}>Ticket</Typography>

      <Stack direction={'row'} spacing={1}>
      <IconButton>
      <Search />  
      </IconButton>
      <IconButton>
      <AddAlertIcon />
      </IconButton>
      <Divider orientation='vertical'/>
      <Typography>Jones Ferdiand</Typography>
      <Person />
      </Stack>
      </Stack>

    

      <Paper sx={{padding: '15px', marginTop: '5%', borderRadius: '5mm' }}>

    <Stack direction={'row'} spacing={75}>
      <Typography variant='h6' fontWeight={700} paddingTop={1}>All Ticket</Typography>

      <Stack direction={'row'} spacing={1}>
      <div style={{display: 'flex'}}>
      <IconButton>
      <SortIcon />  
      </IconButton><Typography marginTop={1}>sort</Typography></div>
      <div style={{display: 'flex'}}>
      <IconButton>
      <FilterAltIcon />  
      </IconButton><Typography marginTop={1}>sort</Typography></div>

      

      </Stack>
      </Stack>

      <Stack>
      <TheTable />
      </Stack>

      </Paper>
    </Box>  
    </motion.div>
  )
}

export default Ticket
