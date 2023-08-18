import React, { useState } from 'react'
import { AddressData, BussinesData } from '../../../../components/input-group'
import { ComponentButtonCommon } from '../../../../components'
import { handleSaveCustomer } from '../hooks'

export const AddJuristicPerson = () => {
  const [state, setState] = useState<any>({})

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <BussinesData setState={setState} state={state} />
      <hr />
      <AddressData setUser={setState} state={state} cities={[]} />
      <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSaveCustomer('juristic', state)} />
      </div>
    </div>
  </>
  )
}
