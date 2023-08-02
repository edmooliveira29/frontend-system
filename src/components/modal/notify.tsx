/* eslint-disable react/no-unknown-property */
import React from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export function NotifyError() {
  const notify = () => toast("Wow so easy!")

  return (<>
    <div>
      <button onLoad={() => notify}>Notify!</button>
      <ToastContainer />
    </div>
  </>
  )
}