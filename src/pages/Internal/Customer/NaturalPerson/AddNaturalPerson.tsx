import React, { useState } from 'react'
import { AddressData, PersonalData } from '../../../../components/input-group'
import { ComponentButtonCommon } from '../../../../components'


export const AddNaturalPerson = () => {
  const [state, setState] = useState({})

  const handleSave = async () => {
    //const userResponse = await user.put(state)
    alert('Em fase de construção!')
  }

  return (<>
    <div className="row border border-secondary rounded" id="content-container">
      <PersonalData setState={setState} state={state} />
      <hr />
      <AddressData setUser={setState} state={state} cities={[]} />
      <div className="m-2 d-flex justify-content-center" >
        <ComponentButtonCommon text='Salvar' sizewidth='280px' onClick={handleSave} />
      </div>
    </div>
  </>
  )
}
