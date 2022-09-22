import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

function Tag(props) {
  const { name, handelClik } = props
  const theme = useTheme()
  return (
    <Box
      sx={[{
        width: "fit-content",
        padding: 1,
        paddingLeft: 3,
        paddingRight: 3,
        borderRadius: 1,
        backgroundColor: "#454545",
        marginBottom: 3,

      },
      theme.palette.mode === "light" && { color: "#fff" }
      ]}
      onClick={handelClik}
    >
      <Typography variant="span">{name}</Typography>
    </Box>
  )
}
Tag.propTypes = {
  name: PropTypes.string,
  handelClik: PropTypes.func
}
export default Tag