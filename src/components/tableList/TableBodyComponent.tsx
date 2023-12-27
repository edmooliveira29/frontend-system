import { TableRow, TableCell, IconButton, TableBody } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'
import DeleteIcon from '@mui/icons-material/Delete'
import React, { FC, useState } from 'react'
import { AlertConfirmationDelete, ModalDetails } from '../modal'
import { useDispatch } from 'react-redux'
import { ActionsTypes } from '../../redux/actions/reducers'
type Order = 'asc' | 'desc' | undefined

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) return -1
  if (b[orderBy] > a[orderBy]) return 1
  return 0
}

const getComparator = (order: Order, orderBy: any) => {
  return order === 'desc'
    ? (a: { key: number | string }, b: { key: number | string }) =>
      descendingComparator(a, b, orderBy)
    : (a: { key: number | string }, b: { key: number | string }) =>
      -descendingComparator(a, b, orderBy)
}

const stableSort = (array: any[], comparator: any) => {
  const stabilizedThis = array.map((el, index) => [el, index] as [any, number])
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0])
    if (order !== 0) return order
    return a[1] - b[1]
  })
  return stabilizedThis.map((el) => el[0])
}

export const TableBodyComponent: FC<{
  navigate: any,
  columnHeaders: any,
  data: any,
  orderBy: any,
  page: any,
  rowsPerPage: any,
  order: Order,
  setOrder: any,
  title: string,
  translations: any,
  deleteItem: any
}> = (props) => {
  const keys = props.columnHeaders
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedRowData, setSelectedRowData] = useState(null)
  const dispatch = useDispatch()

  const handleOpenDetails = (rowData: any) => {
    setSelectedRowData(rowData)
    setIsModalOpen(true)
  }
  const handleOpenEdit = (title: string, rowData: any, navigate: any, dispatch: any) => {
    setSelectedRowData(rowData)
    dispatch({ type: ActionsTypes.OBJECT_EDIT, payload: rowData })
    navigate(`/${title.normalize("NFD").replace(/[\u0300-\u036f]/g, "")}/adicionar`, { rowData })
  }

  const handleCloseModal = () => {
    setSelectedRowData(null)
    setIsModalOpen(false)
  }

  const handleDeleteItem = (rowData: any, callbackDelete: any) => {
    setSelectedRowData(rowData)
    if (props.title == 'venda') {
      AlertConfirmationDelete(`Venda de número: ${rowData[Object.keys(rowData)[1]]}`, callbackDelete, { id: rowData[Object.keys(rowData)[0]] })
    } else {
      AlertConfirmationDelete('', callbackDelete, { _id: rowData[Object.keys(rowData)[0]] })
    }
  }
  return (
    <>
      <TableBody>
        {props.data.length > 0 ? stableSort(props.data, getComparator(props.order, props.orderBy))
          .slice(
            props.page * props.rowsPerPage,
            props.page * props.rowsPerPage + props.rowsPerPage
          )
          .map((row, index) => (
            <TableRow sx={{ padding: '0px' }} key={`${keys[0]}-${index}`}>
              {keys.map((key: any) => {
                return (
                  <TableCell
                    hidden={!key.viewInTable}
                    sx={{ padding: '2px 0px 0px 0px' }}
                    align={'center'}
                    key={key._id}
                  >
                    {key._id === 'role' ? (row[key._id] === 'owner' ? 'PROPRIETÁRIO' : 'VENDEDOR') : null}
                    {key._id === 'typeCustomer' ? (row[key._id] === 'natural' ? 'FÍSICA' : 'JURÍDICA') : null}
                    {key._id !== 'role' && key._id !== 'typeCustomer' ? row[key._id] : null}
                  </TableCell>
                )
              })}
              <TableCell sx={{ padding: '2px 0px 0px 15px' }} align="center">
                <IconButton color="default" size="small" onClick={() => handleOpenEdit(props.title, row, props.navigate, dispatch)}>
                  <EditIcon />
                </IconButton>
                <IconButton color="default" size="small" onClick={() => handleOpenDetails(row)}>
                  <VisibilityIcon />
                </IconButton>
                <IconButton color="error" size="small" onClick={() => handleDeleteItem(row, props.deleteItem)}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          )) : <TableRow sx={{ padding: '0px', textAlign: 'center', fontSize: '12px' }}><TableCell> Nenhum item encontrado</TableCell></TableRow>}
        {isModalOpen && selectedRowData ? (<ModalDetails data={selectedRowData} title={props.title} onClose={handleCloseModal} translations={props.translations} />) : null}
      </TableBody >
    </>
  )
}