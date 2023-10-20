import * as React from 'react';
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import woman from './Image/woman.png'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton'

const columns = [
  { id: 'Ticket', label: 'Ticket Details', minWidth: 170 },
  {
    id: 'Customer',
    label: 'Customer name',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'date',
    label: 'Date',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Prirority',
    label: 'Prirority',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];


function createData( id, image, Ticket, childTicket, Customer, childCustomer, date, childDate, Prirority) {
  return {  id, image, Ticket, childTicket, Customer, childCustomer, date, childDate, Prirority };
}


const rows = [
  createData( 1, woman, 'Contact Email not linked', 'updated 1 day ago', 'Jones Fernand', 'on 24.05.2023', 'May 26, 2019', '7:30PM', 'high'),
  createData(2, woman,'Adding Images to Featured post','updated 1 day ago', 'Jones Fernand', 'on 24.05.2023', 'May 26, 2023', '7:30PM', 'Low'),
  createData( 3, woman,'When will i be charged this month ?', 'updated 1 day ago', 'Jones Fernand', 'on 24.05.2023', 'May 25, 2023', '1:00PM', 'high'),
  createData( 4, woman,'Payment not going through', 'updated 1 day ago', 'Jones Fernand', 'on 24.05.2023', 'May 25, 2023', '1:30PM', 'Low'),
  createData(5,  woman,'Unable to add replies', 'updated 1 day ago', 'Jones Fernand', 'on 24.05.2023', 'May 24, 2023', '5:30PM', 'high'),
  createData(6, woman, 'Downtime since Last week', 'updated 1 day ago', 'Jones Fernand', 'on 24.05.2023', 'May 23, 2023', '4:00PM', 'Low'),
  createData( 7, woman, 'Refferal Bonus', 'updated 1 day ago', 'Jones Fernand', 'on 24.05.2023', 'May 23, 2023', '12:00PM', 'high'),
  createData(8,  woman, 'How do i change my password', 'updated 1 day ago', 'Jones Fernand', 'on 24.05.2023', 'May 22, 2023', '10:30AM', 'Low'),
];



function TheTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ width: '100%', overflow: 'hidden', marginTop: '2%' }}>
      <TableContainer sx={{ maxHeight: 800 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: '#9FA2B4' }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        {rows.map((row) => (  
          <TableBody key={row.id} sx={{ "&:hover":{border: "0.5mm solid black", backgroundColor: "whitesmoke"}}}>
          <TableCell align='left'>
          <Stack direction={'column'}>
          <Typography fontSize={14}> <image src={woman}  alt='non show'/> {row.Ticket}</Typography> 
          <Typography fontSize={12} color={'#C5C7CD'}>{row.childTicket}</Typography> 
          </Stack>
          </TableCell>
          <TableCell align='right'>
          <Stack direction={'column'}>
          <Typography fontSize={14}>{row.Customer}</Typography> 
          <Typography fontSize={12} color={'#C5C7CD'}>{row.childCustomer}</Typography> 
          </Stack>
          </TableCell>
          <TableCell align='right'>
          <Stack direction={'column'}>
          <Typography fontSize={14}>{row.date}</Typography> 
          <Typography fontSize={12} color={'#C5C7CD'}>{row.childDate}</Typography> 
          </Stack>
          </TableCell>
          <TableCell align='right'>
          <button style={row.Prirority === 'high' ? {backgroundColor: '#F12B2C', color: 'white', textTransform: 'uppercase', border: 'none', padding: '5px 10px', borderRadius: '4mm', fontSize: '11px'}  :  {backgroundColor: '#FEC400', color: 'white', textTransform: 'uppercase', border: 'none', padding: '5px 10px', borderRadius: '4mm', fontSize: '11px'}}>{row.Prirority}</button> 
          </TableCell>
          <TableCell>
          <IconButton><MoreVertIcon /></IconButton>
          </TableCell>
          </TableBody> ))}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}


export default TheTable;