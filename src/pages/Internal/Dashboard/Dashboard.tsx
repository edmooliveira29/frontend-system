import React from 'react'
import { DataFieldInput } from '../../../components'
import { DataRangeFieldInput } from '../../../components/inputs/DataRangeFieldInput'
export const Dashboard = () => {
  return (
    <>
      <div className="m-2">

        <div className='row'>
          <div className="col-md-6">
            <h6 className="text-primary fs--1 mb-0">Seja bem vindo </h6>
            <h4 className="text-secondary fw-bold mb-0"> &nbsp;&nbsp;&nbsp; {localStorage.getItem('username')}</h4>
          </div>
          <div className="col-md-6">
            <div className='row'>

              <div className="col-md-6 d-flex align-items-center justify-content-end">
                <h6>Dados</h6>
              </div>
              <div className="col-md-6 d-flex aling-items-center">
                <DataRangeFieldInput id='data-input-dashboard' label='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
