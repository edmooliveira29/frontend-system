/* eslint-disable max-lines */
import * as React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableContainer from '@mui/material/TableContainer'
import TablePagination from '@mui/material/TablePagination'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import SearchIcon from '@mui/icons-material/Search'
import { InputAdornment } from '@mui/material'
import { TableHeadComponent, TableBodyComponent } from '.'
import './styles.sass'

type Order = 'asc' | 'desc'

interface EnhancedTableProps {
  data: any
  head: any
}

function EnhancedTable(props: EnhancedTableProps) {
  const { data } = props
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof any>('')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [searchValue, setSearchValue] = React.useState('')

  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage)
  }

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    setPage(0)
  }

  const filteredData = data.filter((row: any) =>
    Object.values(row)
      .slice(0, 2) // Filtra apenas as duas primeiras colunas para pesquisa
      .some((value: any) => value.toString().toLowerCase().includes(searchValue.toLowerCase()))
  )

  return (
    <Paper sx={{ width: '100%' }}>
      <Toolbar>
        <TextField
          variant="standard"
          value={searchValue}
          onChange={handleSearchChange}
          placeholder='Pesquise'
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mr: 2, width: '100%' }}
        />
      </Toolbar>
      <TableContainer>
        <Table sx={{ minWidth: 750 }}>
          <TableHeadComponent columnHeaders={props.head} orderBy={orderBy} setOrderBy={setOrderBy} order={order} setOrder={setOrder} />
          <TableBodyComponent rowsPerPage={rowsPerPage} orderBy={orderBy} page={page} order={order} setOrder={setOrder} data={filteredData} />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 50]}
        component="div"
        count={filteredData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        labelRowsPerPage="Linhas na página:"
        labelDisplayedRows={({ to, count }) => `${to} de ${count}`}
        sx={{ '.MuiTablePagination-selectLabel': { margin: '0px' }, '.MuiTablePagination-displayedRows': { margin: '0px' } }}
        className='table-pagination'
      />
    </Paper>
  )
}

export const TableComponent: React.FC<{ data: any[], head: any[] }> = (props) => {
  return (
    <Box sx={{ p: 0 }}>
      <EnhancedTable data={props.data} head={props.head} />
    </Box>
  )
}