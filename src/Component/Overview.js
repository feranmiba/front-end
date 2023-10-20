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
import Link from '@mui/material/Link'
import Add from '@mui/icons-material/Add'
import FormControlLabel from '@mui/material/FormControlLabel'
import CheckCircle from '@mui/icons-material/CheckCircle'
import MuiCheckbox from '@mui/material/Checkbox'
import RadioButtonUnchecked from '@mui/icons-material/RadioButtonUnchecked'
import Button from '@mui/material/Button'
import Data from './Data'
import { motion } from 'framer-motion'




function Checkbox({ label, icon, checkedIcon }) {
  return (
    <FormControlLabel
      label={label}
      control={
        <MuiCheckbox defaultChecked icon={icon} checkedIcon={checkedIcon} />
      }
    />
  );
}

function Overview() {

  const theOvers = [
    {
      tag: 'Unresolved',
      no: 65
    },
    {
      tag: 'Overdue',
      no: 16
    },
    {
      tag: 'Open',
      no: 43
    },
    {
      tag: 'On Hold',
      no: 64
    },
  ]

  const smile = [
    {
      tag: 'Resolved',
      no : 449
    },
    {
      tag: 'Received',
      no : 426
    },
    {
      tag: 'Average first response time',
      no : 33 + 'ms'
    },
    {
      tag: 'Average first response time',
      no : `3h 8m`
    },
    {
      tag: 'Resolution with SLA',
      no : 94 + 's'
    },
]

  return (
    <motion.div initial={{opacity: 0,}} whileInView={{opacity:1,  transition: {duration : 1}}}>
      <Box sx={{
        padding: '25px'
      }}>
      <Stack direction={'row'} spacing={70}>
      <Typography variant='h5' fontWeight={600}>OverView</Typography>

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

      <Stack direction={'row'} spacing={2} marginTop={5}>
    { theOvers.map((the)=>( <Paper sx={{ width: "25%", height: "15vh", display: "flex", flexDirection: "column", gap: "20px", color: '#9FA2B4',  transition: '1s ease', "&:hover":{border: "0.5mm solid black", color: "#3751FF"}  }}> {the.tag}  <Typography variant='h4' fontWeight={700} color={'#252733'} sx={{"&:hover":{ color: "#3751FF"}}}>{the.no}</Typography></Paper>))}
      </Stack>


      <Paper sx={{padding: '20px', margin: '5% 0%'}} >
      <Stack direction={'row'} spacing={2}>
      <div>
      <Stack direction={'row'} spacing={35}>
      <Stack direction={'column'}> <Typography variant='h6'>Today's trend</Typography> <Typography fontSize={12}>as of May 2019, 09:41pm</Typography></Stack>
      <Stack direction={'row'} spacing={5}><Typography>Today</Typography> <Typography>Yesterday</Typography></Stack>
      </Stack>
      <div>
      <Data />
      </div>
      </div>
      <Divider orientation='vertical' sx={{height: '200%'}}/>
      <Stack direction={'column'} >
     {smile.map((ole) => ( <Stack direction={'column'} sx={{ padding: '10px 26px', width: '100%', textAlign: 'center'}}> <Typography sx={{margin: '0% 10%'}} color={'#9FA2B4'} fontSize={12}>{ole.tag}</Typography> <Typography sx={{margin: '2% 20%'}} variant='h5' fontWeight={700} color={'#252733'}>{ole.no}</Typography> <Divider sx={{width: '100%'}}/> </Stack>))}
      </Stack>
      </Stack>
      </Paper>



      <Stack direction={'row'} spacing={10} marginTop={0}>

      <Paper>

      <Stack direction={'row'} spacing={25} padding={2}>
      <Stack direction={'column'} spacing={1}> <Typography fontWeight={600} fontSize={15}>Unresolved Ticket</Typography>  <Typography fontSize={14}><span style={{ color: "red"}}>Group</span> Support</Typography>  </Stack>
      <Link>View details</Link>
      </Stack>


      <Stack direction={'column'} spacing={2} padding={2}>
     <Stack direction={'row'} spacing={25}> <Typography fontSize={14}>Waiting on Feature request</Typography> <Typography fontSize={14}>4238</Typography></Stack>
      <Divider />
      <Stack direction={'row'} spacing={25}> <Typography fontSize={14}>Awaiting Customer response</Typography> <Typography fontSize={14}>1005</Typography></Stack>
      <Divider />
      <Stack direction={'row'} spacing={30}> <Typography fontSize={14}>Awaiting Developer Fix</Typography> <Typography fontSize={14}>914</Typography></Stack>
      <Divider />
      <Stack direction={'row'} spacing={40}>  <Typography fontSize={14}>Pending</Typography> <Typography fontSize={14}>281</Typography></Stack>
      <Divider />
      </Stack>




      
      
      </Paper>


      <Paper>

      <Stack direction={'row'} spacing={35} padding={2}>
      <Stack direction={'column'} spacing={1}> <Typography fontWeight={600} fontSize={15}>Task</Typography>  <Typography fontSize={14}>Today</Typography>  </Stack>
      <Link>View all</Link>
      </Stack>


      <Stack direction={'column'} spacing={1} padding={1}>
     <Stack direction={'row'} spacing={30}> <Typography fontSize={14} style={{ marginTop: '2.5%'}}>Create a new task</Typography> <IconButton color='whitesmoke'> <Add /> </IconButton></Stack>
      <Divider />
      <Stack direction={'row'} spacing={18}>
       <Typography fontSize={14}>
      <Checkbox icon={<RadioButtonUnchecked />}checkedIcon={<CheckCircle />}/> Finish ticket update </Typography> <Button variant='contained' sx={{fontSize: 12, borderRadius: '3mm', backgroundColor: '#FEC400'}}>URGENT</Button></Stack>
      <Divider />
      <Stack direction={'row'} spacing={15}> <Typography fontSize={14}>
      <Checkbox icon={<RadioButtonUnchecked />}checkedIcon={<CheckCircle />}/> Create new ticket example </Typography> <Button variant='contained' sx={{fontSize: 12, borderRadius: '3mm', backgroundColor: '#29CC97'}}>NEW</Button></Stack>
      <Divider />
      <Stack direction={'row'} spacing={18}>  <Typography fontSize={14}>
      <Checkbox icon={<RadioButtonUnchecked />}checkedIcon={<CheckCircle />}/> Finish ticket update </Typography> <Button variant='contained' disabled sx={{fontSize: 12, borderRadius: '3mm'}}>DEFAULT</Button></Stack>
      <Divider />
      </Stack>




      
      </Paper>
      
      
      </Stack>


      </Box>
    </motion.div>
  )
}

export default Overview
