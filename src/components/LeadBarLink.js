import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Link from '@mui/material/Link'

function LeadBarLink({text, url, logo, btn, color}) {
  return (
    <Link  href={url} underline="none">
      <Stack direction="row" spacing={1}>
        <Chip
          // with avatar
          avatar={<Avatar alt="logo" src={logo} />}
          // with button
          onDelete={console.log}
          deleteIcon={<CheckCircleIcon />}
          label={text}
          color={color}
          clickable
        />
      </Stack>
    </Link>
  )
}

export default LeadBarLink
