import React from "react"
import { Box, Button, Link } from "@material-ui/core"

export default function NavLinks() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignContent="center"
      justifyContent="center"
      pl={4}
      pr={2}
      pt={1.5}
    >
      <Button color="inherit">
        <Link
          color="inherit"
          href="https://github.com/unicef/unicef-material-ui"
        >
          Github
        </Link>
      </Button>
    </Box>
  )
}
