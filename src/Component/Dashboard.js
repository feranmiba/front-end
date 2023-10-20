import React from 'react'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Divider from '@mui/material/Divider'
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography'
import Overview from './Overview'
import Ticket from './Ticket'
import Settings from '@mui/icons-material/Settings'
import Subscriptions from '@mui/icons-material/Subscriptions'
import Lightbulb from '@mui/icons-material/Lightbulb'
import Contacts from '@mui/icons-material/Contacts'
import Person from '@mui/icons-material/Person'
import Article from '@mui/icons-material/Article'
import AirplaneTicket from '@mui/icons-material/AirplaneTicket'
import PieChart from '@mui/icons-material/PieChart'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';




function choose(e) {
  console.log(e.target.value)
}

function Dashboard() {

    const DashboardStuff = [
      {
        icon: <Lightbulb />,
        name:    'ideas'
        },
        {
          icon: <Contacts />,
          name: 'contacts'
          },
          {
            icon: <Person />,
            name:    'Agent', 
            },
            {
              icon: <Article />,
              name:     'Articles' 
              },  
    ]
    const set = [
      {
        icon: <Settings />,
        name: 'Settings'
      },
      {
        icon: <Subscriptions />,
        name: 'Subscriptions'
      }
    ]

  return (
    <div style={{ display: 'flex', gap: '10px'}}>
    <Box  sx={{
        width: '18%',
        backgroundColor: ' #363740',
        color: 'white',
        height: '170vh',
        paddingTop: 5,
        paddingLeft: 1
    }}>

   

    <div>
    <Typography ><SpaceDashboardIcon /> Dashboard</Typography>
    </div>



    <Stack direction={'column'} spacing={-2} marginTop={5}>
    <List>
    <Link to='/' style={{ textDecoration: 'none', color: "#A4A6B3",  }}> 
    <ListItem disablePadding>
  <ListItemButton sx={{ gap: '10px', "&:hover":{color: "White"}}}> <PieChart />
    <ListItemText primary='Overview'/>
    </ListItemButton> 
    </ListItem>
    </Link>
    </List>
    <List>
    <Link to='/ticket' style={{ textDecoration: 'none', color: "#A4A6B3" }}>
    <ListItem disablePadding>
    <ListItemButton sx={{ gap: '10px', "&:hover":{color: "White"}}}>  <AirplaneTicket />
    <ListItemText primary='Tickets'/>
    </ListItemButton>
    </ListItem>
    </Link>
    </List>

{DashboardStuff.map((stuff)=> (
    <List>
    <ListItem disablePadding>
    <ListItemButton sx={{ gap: '10px', color: '#A4A6B3', "&:hover":{color: "White"}}}> {stuff.icon}
    <ListItemText primary={`${stuff.name}`} />
    </ListItemButton>
    </ListItem>
    </List> ))}
  
    </Stack>


    <Divider />
    <Stack direction={'column'} spacing={-2}>

     {set.map((sett) => (  <List>
    <ListItem disablePadding>
    <ListItemButton sx={{ gap: '10px', color: '#A4A6B3', "&:hover":{color: "White"}}}> {sett.icon}
    <ListItemText primary={sett.name} />
    </ListItemButton>
    </ListItem>
    </List> ))}
    </Stack>

    </Box>


    <Routes>
    <Route path="/" element={<Overview />}></Route>
    <Route path="/ticket" element={ <Ticket />}></Route>
    </Routes>
    </div>
  )
}

export default Dashboard
