import { TableHead, TableRow, TableSortLabel, TableCell } from '@mui/material'
import React, { FC } from 'react'
type Order = 'asc' | 'desc' | undefined

export const TableHeadComponent: FC<{ columnHeaders: any, orderBy: any, setOrderBy: any, order: Order, setOrder: any }> = (props) => {

  const handleRequestSort = (property: keyof any) => {
    const isAsc = props.orderBy === property && props.order === 'asc'
    props.setOrder(isAsc ? 'desc' : 'asc')
    props.setOrderBy(property)
  }
  return (
    <>
      <TableHead>
        <TableRow >
          {props.columnHeaders.map((column: any) => (
            <TableCell
              key={column._id}
              align={column._id === 'name' ? 'left' : 'right'}
              sortDirection={props.orderBy === column._id ? props.order : false}
              sx={{textAlign: 'center'}}
            >
              <TableSortLabel
                active={props.orderBy === column._id}
                direction={props.orderBy === column._id ? props.order : 'asc'}
                onClick={() => handleRequestSort(column._id)}
                sx={{ fontWeight: 'bold'}}
              >
                {(column.label).toUpperCase()}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    </>
  )
}