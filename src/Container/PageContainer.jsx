import React from 'react'
import Container from '@mui/material/Container';

const PageContainer = ({ children }) => {
  return (
    <div>
        <Container maxWidth = "lg">
            {children}
        </Container>
    </div>
  )
}

export default PageContainer