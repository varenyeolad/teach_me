import { Box } from "@mui/material"

export default function ProfileButton() {
  return (
    <>
        <Box sx={{
            width: '343px',
            height: '72px',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            display: 'flex',
            borderRadius: '10px'
        }}>
            <Box sx={{width: '252px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRight: '1px solid black'}}>
              0x6969...6666
            </Box>
            <Box sx={{width: '91px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <img src="mesh-gradient (2) 1.png" style={{borderRadius: '50%'}}></img>
            </Box>
        </Box>

    </>
  )
}
