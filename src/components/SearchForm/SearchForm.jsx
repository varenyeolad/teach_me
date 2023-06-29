import { useState } from 'react'
import { fetchDataByTopic } from '../../store/slices/getData'
import { useDispatch } from 'react-redux'
import { Box } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';

export default function SearchForm() {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    function hadleSubmit(event) {
        event.preventDefault()
        dispatch(fetchDataByTopic(value))
    }

    function handleChange(event) {
        setValue(event.target.value)
    }

  return (
    <Box sx={{
        width: '1014px',
        height: '75px'
    }}>
        <form onSubmit={() => {hadleSubmit(event)}} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}>
            <Box sx={{
                position: 'absolute',
                paddingLeft: '10px'
            }}><SearchIcon sx={{color: 'gray', width: '47px', height: '47px'}}/></Box>
            <input value={value} onChange={() => {handleChange(event)}} style={{
                width: '100%',
                height: '70px',
                paddingLeft: '55px',
                border: 'none',
                borderRadius: '20.741px',
            }} placeholder='Topic title or keyword'></input>
        </form>
    </Box>
  )
}
