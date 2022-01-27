import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';

function LeadBarLink() {
  return (
    <a  href="https://www.serviceform.com/" style={{textDecoration: "none"}}>
      <Stack direction="row" spacing={1}>
        <Chip
          avatar={<Avatar alt="Me" src="https://lh3.google.com/u/0/ogw/ADea4I7weFt0Z_euBRJDYIrQOD3bxFMC3USRqc-RXaRD=s83-c-mo" />}
          label="Click me now to get 40% discount!!!"
          color="primary"
          clickable
        />
      </Stack>
    </a>

  )
}

export default LeadBarLink
