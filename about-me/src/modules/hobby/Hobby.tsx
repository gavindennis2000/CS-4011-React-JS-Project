import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const HobbyStyle = {
    // borderStyle: 'double',
    fontFamily: 'roboto 300',
    // color: 'black',
    // backgroundColor: '#3d3d3d',
    marginTop: '20px',
    marginBottom: '20px',
    width: '600px',
}

// const DescriptionStyle = {
//     // borderStyle: 'double',
//     fontFace: 'roboto 300',
//     marginTop: '20px',
//     marginBottom: '20px',
//     width: '450px',
// }

export const Hobby = ({
    // hobby component - contains hobby name, description, and a picture
    title,
    description,
    imgSrc,
}: any) => {
    return (
        // <div >
        <Card style={HobbyStyle}>
            <center>
                <h2>{title}</h2>
                <div style={{width: '450px'}}>{description}</div>
                <img src={imgSrc} width="500px"/>
            </center>
        {/* </div> */}
        </Card>
    )
}