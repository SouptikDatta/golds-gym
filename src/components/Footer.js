import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo-full.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="12px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '80px' }} />
    </Stack>
    <Box bgcolor="black" display='flex' justifyContent='center' alignItems='center'>
      <Typography color='red' variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} pt="20px" textAlign="center" pb="20px">Made with <span role='img' aria-label=''>❤️</span> by Souptik Datta</Typography>
    </Box>
  </Box>
);

export default Footer;
