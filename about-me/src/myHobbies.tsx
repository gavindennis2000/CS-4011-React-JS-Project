import { HobbyContainer } from './modules/hobby/index'
import { Paper } from '@mui/material'

const MyHobbiesStyle = {
    width: '1000px',
    backgroundColor: 'white',
    fontFamily: 'roboto',
}

const MyHobbies = () => {
    return(
        <center>
        <Paper style={MyHobbiesStyle}>
            <center>
                <h1>Hobbies</h1> 
                <HobbyContainer />
            </center>
        </Paper>
        </center>
    )
}

export { MyHobbies }