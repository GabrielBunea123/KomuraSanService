import React from 'react';
import {Grid,Typography,Link,Button} from "@material-ui/core"

const RezervareSucces = () => {
    return (
        <div>
            <Grid container spacing="1">
                <Grid item xs={12} align="center" style={{paddingTop:130}}>
                    <Typography variant="h4" component="h4">
                        Comanda ta a fost confirmata.	&#9989;
                    </Typography>
                    <Typography variant="h4" component="h4">
                        Te vom contacta in cel mai scurt timp posibil. Multumim !
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center" style={{paddingBottom:150}}>
                    <a style={{textDecoration:"none"}} href="/"><Button style={{backgroundColor:"#A72920",color:"white"}} color="primary" variant="contained">Intoarce-te acasa</Button></a>
                </Grid>
            </Grid>
        </div>
    )
};

export default RezervareSucces;
