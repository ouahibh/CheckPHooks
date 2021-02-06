import './moviecard.css';
import {Card, Link} from '@material-ui/core';

const Moviecard = (props)=>{
    return(
        <Card style={{borderRadius:'2rem 5rem', backgroundColor:'rgba(187, 255, 0, 0.781)'}}
            className={'cardStyle'} >
            <h1>Votre film</h1>
            <h3> Le titre : {props.title} </h3>
            <h3> Description : {props.description} </h3>
            <h3> Note : {props.rate} </h3>
            <h3>Lien :</h3> 
            <div className={'videoC'}>
            <iframe src={props.url}
                frameborder='0'
                allow='autoplay; encrypted-media;'
                allow='FullScreen'
                title='video'/>
            
            </div>

        </Card>
    )
}
export default Moviecard;