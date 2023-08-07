/* eslint-disable max-lines */
import * as React from 'react'
import { faker } from '@faker-js/faker'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import TablePagination from '@mui/material/TablePagination'
import TableSortLabel from '@mui/material/TableSortLabel'
import TextField from '@mui/material/TextField'
import Toolbar from '@mui/material/Toolbar'
import Paper from '@mui/material/Paper'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SearchIcon from '@mui/icons-material/Search'

import './styles.sass'
import { InputAdornment } from '@mui/material'
// Defina o número total de dados para teste
const TOTAL_ROWS = 50

interface RowData {
  name: string
  calories: number
  fat: number
  carbs: number
  protein: number
  price: string
  history: string
}

function createData(): RowData {
  return {
    name: faker.person.fullName(),
    calories: faker.number.int({ min: 10, max: 50 }),
    fat: faker.number.int({ min: 10, max: 50 }),
    carbs: faker.number.int({ min: 10, max: 50 }),
    protein: faker.number.int({ min: 10, max: 50 }),
    price: faker.commerce.price({ min: 10, max: 50 }),
    history: new Date().toLocaleString()
  }
}

const columnHeaders = [
  { id: 'name', label: 'Dessert (100g serving)', sortable: true },
  { id: 'calories', label: 'Calories', sortable: true },
  { id: 'fat', label: 'Fat (g)', sortable: true },
  { id: 'carbs', label: 'Carbs (g)', sortable: true },
  { id: 'protein', label: 'Protein (g)', sortable: true },
  { id: 'price', label: 'Price ($)', sortable: true },
  { id: 'history', label: 'History', sortable: true },
  { id: 'actions', label: 'Actions', sortable: false },
]

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}

type Order = 'asc' | 'desc'

function getComparator<Key extends keyof any>(order: Order, orderBy: Key) {
  return order === 'desc'
    ? (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) =>
      descendingComparator(a, b, orderBy)
    : (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) =>
      -descendingComparator(a, b, orderBy)
}

function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

interface EnhancedTableProps {
  rows: any
}

function EnhancedTable(props: EnhancedTableProps) {
  const { rows } = props
  const [order, setOrder] = React.useState<Order>('asc')
  const [orderBy, setOrderBy] = React.useState<keyof any>('calories')
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)
  const [searchValue, setSearchValue] = React.useState('')

  const handleRequestSort = (property: keyof any) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

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

  const filteredRows = rows.filter((row: any) =>
    Object.values(row)
      .slice(0, 2) // Filtra apenas as duas primeiras colunas para pesquisa
      .some((value: any) => value.toString().toLowerCase().includes(searchValue.toLowerCase()))
  )

  return (
    <Box sx={{ overflow: 'auto' }} >
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
            <TableHead>
              <TableRow >
                {columnHeaders.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.id === 'name' ? 'left' : 'right'}
                    sortDirection={orderBy === column.id ? order : false}
                  >

                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={() => handleRequestSort(column.id)}
                    >
                      {column.label}
                    </TableSortLabel>


                  </TableCell>

                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(filteredRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow sx={{ padding: '0px' }} key={row.name} >
                    <TableCell>{row.name}</TableCell>
                    <TableCell sx={{ padding: '0px' }} align="right">{row.calories}</TableCell>
                    <TableCell sx={{ padding: '0px' }} align="right">{row.fat}</TableCell>
                    <TableCell sx={{ padding: '0px' }} align="right">{row.carbs}</TableCell>
                    <TableCell sx={{ padding: '0px' }} align="right">{row.protein}</TableCell>
                    <TableCell sx={{ padding: '0px' }} align="right">{row.price}</TableCell>
                    <TableCell sx={{ padding: '0px' }} align="right">{row.history}</TableCell>
                    <TableCell sx={{ padding: '0px' }} align="right">
                      <IconButton color="primary" size="small" onClick={() => console.log('Edit')}>
                        <EditIcon />
                      </IconButton>
                      <IconButton color="primary" size="small" onClick={() => console.log('Details')}>
                        <VisibilityIcon />
                      </IconButton>
                      <IconButton color="secondary" size="small" onClick={() => console.log('Delete')}>
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
          labelRowsPerPage="Linhas na página:"
          labelDisplayedRows={({ to, count }) => `${to} de ${count}`}
          sx={{ mb: 0 , '.MuiTablePagination-selectLabel': {margin: '0px'} }}
          className='table-pagination'
        />
      </Paper>
    </Box>
  )
}

const initialRows: RowData[] = Array.from({ length: TOTAL_ROWS }, () => createData())

export const TableComponent = () => {
  return (
    <Box sx={{ p: 0 }}>
      <EnhancedTable rows={initialRows} />
    </Box>
  )
}
