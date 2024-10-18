import { Paper } from '@mui/material'
import '@fontsource/roboto/300.css';
import meSrc from './me.jpg'

const AboutStyle = {
    // borderStyle: 'double',
    width: '800px',
    backgroundColor: 'white',
    fontFamily: 'roboto',
}

const About = () => {
    return(
        <div>
            <center>
                <Paper style={AboutStyle}>
                    <h1>About Me</h1>
                    Hello everyone
                    <br/>
                    <img src={meSrc} width="500px"/>
                    <br/>
                    <div style={{width: '600px'}}>
                        My name is Gavin Dennis. I decided to major in computer science due to being around tech my entire life. My programming journey dates back to elementary school when I would create my own cheat codes on video game emulators. I chose this class as I believe it is one of the more practical elective options in terms of enhancing my skillset.
                        <br/><br/>
                        My career ambitions are to land a tech job in St. Louis that pays enough for me to start a family and pay off any debt I have before I'm 25. In my free time I enjoy weight training, coding my own video games, and playing guitar with my friends.
                    </div>
                </Paper>
            </center>
        </div>
    )
}

export { About }