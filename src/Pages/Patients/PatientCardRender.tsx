import React, {useState} from 'react'

//Import the required material UI
import {useStyles} from './PatientCardStyle'
import Grid from '@material-ui/core/Grid'
import clsx from 'clsx'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

interface IProps {

}
const PatientCardRender = () =>{

    const classes = useStyles();
    const [expanded, setExpanded] = useState<boolean>(false)

    const handleExpandClick = () =>{setExpanded(!expanded)}
    
    const handleOnSetFavoritePatient = () => {alert("Favorite")}
    return (
        <Grid container justify="center" alignItems="stretch" item md={4}>
            <Card className = {classes.root}>
                <CardHeader 
                    avatar= {
                        <Avatar arial-label="recipe" className={classes.avatar}>
                            AZ
                        </Avatar>
                    }
                    action = {
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    } 
                    title="Alexander Esteban"
                    subheader="Last visit: December 10, 1994"
                />
                <CardMedia
                    className={classes.media}
                    image="https://www.verywellhealth.com/thmb/R9UnM-wpoXOWrRMO0WvdafI2CEU=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-493216537-56a3aa635f9b58b7d0d31ac5.jpg"
                    title="Profile picture of Alexander Esteban"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                    After providing diagnoses, doctors treat patients who are suffering from diseases and injuries. Doctors are also called physicians and they can be either medical doctors (M.D.) or doctors of osteopathic medicine
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites" onClick={handleOnSetFavoritePatient}>
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    >
                    <ExpandMoreIcon />
                    </IconButton>
                </CardActions>  
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                        again without stirring, until mussels have opened and rice is just tender, 5 to 7
                        minutes more. (Discard any mussels that don’t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </Typography>
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    )
}

export {PatientCardRender}