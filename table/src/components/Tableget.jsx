import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const Tableget = () => {
  return (
    <div>
        <TableContainer component={Paper} sx={{ border:'2px'}} class='m'>
      <Table sx={{ minWidth: 800 }} aria-label="customized table">
        <TableHead >
          <TableRow id='d'>
<TableCell id='d'>Film</TableCell>
<TableCell id='d'>Poster</TableCell>
<TableCell id='d'>Release Year</TableCell>
<TableCell id='d'>Actor</TableCell>
<TableCell id='d'>Actress</TableCell>
          </TableRow>
        </TableHead>

        <TableBody  >
        
             <TableRow >
<TableCell id='a'>Dangal </TableCell>
<TableCell id='a'><img src="https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg" width={'50px'} alt="" /></TableCell>
<TableCell id='a'>2016</TableCell>
<TableCell id='a'>Aamir Khan</TableCell>
<TableCell id='a'>Fatima Sana Shaikh
</TableCell>
          </TableRow>
          <TableRow>
<TableCell id='a'>Hera Pheri</TableCell>
<TableCell id='a'><img src="https://m.media-amazon.com/images/M/MV5BNDZmMGEwMjQtNjFlNi00ZGIxLTlkZjItNmU3Mzg4Y2E0ZjUzXkEyXkFqcGc@._V1_QL75_UX190_CR0,2,190,281_.jpg"  width={'50px'} alt="" /></TableCell>
<TableCell id='a'>2000</TableCell>
<TableCell id='a'>Akshay Kumar
</TableCell>
<TableCell>Tabu
</TableCell>
          </TableRow>
          <TableRow>
<TableCell id='a'> 
Shivaay  </TableCell>
<TableCell id='a'><img src="https://m.media-amazon.com/images/S/pv-target-images/331c247009a42e7da5eb9b5ccc952792f387543a7422f4ec8253163079577520.jpg" width={'50px'} alt="" /></TableCell>
<TableCell id='a'>2016</TableCell>
<TableCell id='a'>Ajay Devgn</TableCell>
<TableCell id='a'>Erika Kaar</TableCell>
          </TableRow>
          <TableRow>
<TableCell id='a'>
Black </TableCell>
<TableCell><img src="https://m.media-amazon.com/images/M/MV5BNTgzMTNmMDQtNWU0MS00MTFjLTk0ZWYtNGJmMWFlYTllMTU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"  width={'50px'}alt="" /></TableCell>
<TableCell id='a' >2005</TableCell>
<TableCell id='a'>Amitabh Bachchan</TableCell>
<TableCell id='a'>Halle Berry</TableCell>
          </TableRow>
          <TableRow>
<TableCell id='a'>
Baahubali 2: The Conclusion </TableCell>
<TableCell><img src="https://upload.wikimedia.org/wikipedia/en/9/93/Baahubali_2_The_Conclusion_poster.jpg" width={'50px'} alt="" /></TableCell>
<TableCell id='a'> 2017</TableCell>
<TableCell id='a'>Prabhas</TableCell>
<TableCell id='a'>Anushka Shetty</TableCell>
          </TableRow>
          <TableRow>
<TableCell id='a'>
Des Mein Niklla Hoga Chand  </TableCell>
<TableCell><img src="https://m.media-amazon.com/images/M/MV5BNWQzMDFmM2ItYTJmMC00NTdkLWE1OGYtNTE2ZjY4ZjhkMGE4XkEyXkFqcGc@._V1_.jpg" width={'50px'} alt="" /></TableCell>
<TableCell id='a'>2005</TableCell>
<TableCell id='a'>Arun Bali
</TableCell>
<TableCell id='a'>Aruna Irani</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
     
    </div>
  )
}

export default Tableget
