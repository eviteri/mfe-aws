import React, { FC } from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'

const Footer: FC = () => {
  const year = new Date().getFullYear()

  return (
    <>
      <footer>
        <Paper
          elevation={1}
          sx={{
            backgroundColor: '#3B3C43',
            color: '#E9EAEB',
            padding: '16px 0',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Stack spacing={2}>
            <Typography variant="caption" display="block" align="center">
              Module Federation
            </Typography>
            <Typography variant="caption" display="block" align="center">
              @{year} All right reserved
            </Typography>
          </Stack>
        </Paper>
      </footer>
    </>
  )
}
export default Footer
