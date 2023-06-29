import SearchForm from "../SearchForm/SearchForm"
import MarketButton from "../../shared/ui/MarketButton/MarketButton"
import ProfileButton from "../../shared/ui/ProfileButton/ProfileButton"
import { Box } from "@mui/material"

export default function Navbar() {
  return (
    <>
        <Box sx={{
            width: '1528px',
            display: 'flex',
            justifyContent: 'space-between',
            margin: '0 auto',
            marginTop: '75px'
        }}>
            <SearchForm/>
            <ProfileButton/>
            <MarketButton/>
        </Box>
    </>
  )
}
