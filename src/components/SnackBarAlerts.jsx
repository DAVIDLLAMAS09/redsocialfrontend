import React from 'react'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'

export default function SnackBarAlerts({open,msj,sev,handleClose}) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={sev} sx={{ width: '100%' }}>
            {msj}
        </Alert>
    </Snackbar>

  )
}
