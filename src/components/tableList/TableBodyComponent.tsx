import { TableRow, TableCell, IconButton, TableBody } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'

import React, { FC } from 'react'
type Order = 'asc' | 'desc' | undefined

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1
  }
  if (b[orderBy] > a[orderBy]) {
    return 1
  }
  return 0
}


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


export const TableBodyComponent: FC<{ data: any, orderBy: any, page: any, rowsPerPage: any, order: Order, setOrder: any }> = (props) => {
  const keys = Object.keys(props.data[0] || {})

  return (
    <>
      <TableBody>
        {stableSort(props.data, getComparator(props.order, props.orderBy))
          .slice(
            props.page * props.rowsPerPage,
            props.page * props.rowsPerPage + props.rowsPerPage
          )
          .map((row,index) => (
            <TableRow sx={{ padding: '0px' }} key={`${keys[0]}_${index}`}>
              {keys.map((key) => (
                <TableCell
                  sx={{ padding: '2px 0px 0px 15px' }}
                  align={key === 'name' ? 'left' : 'right'}
                  key={key}
                >
                  {row[key]}
                </TableCell>
              ))}
              <TableCell sx={{ padding: '2px 0px 0px 15px' }} align="right">
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
    </>
  )
}