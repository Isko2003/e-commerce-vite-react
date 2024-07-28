import React, { useState } from 'react'
import BackDrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
const Loading = () => {

    const { loading } = useSelector((store) => store.product);

  return (
    <BackDrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
    </BackDrop>
  )
}

export default Loading