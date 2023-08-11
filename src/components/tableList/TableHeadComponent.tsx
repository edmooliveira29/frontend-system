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
              key={column.id}
              align={column.id === 'name' ? 'left' : 'right'}
              sortDirection={props.orderBy === column.id ? props.order : false}
            >
              <TableSortLabel
                active={props.orderBy === column.id}
                direction={props.orderBy === column.id ? props.order : 'asc'}
                onClick={() => handleRequestSort(column.id)}
                sx={{ fontWeight: 'bold' }}
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