import React,  {Fragment} from 'react';


//Importamos componentes de material UI 
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Input, FormHelperText} from '@material-ui/core'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import SaveIcon  from '@material-ui/icons/Save'

//Importamos los componenetes necesarios
import {NavBar} from '../../components/NavBar'

type RegisterFormPropsType = {
  handleOnSubmit : Function
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    label :{
      fontFamily:"Arial"
    },
    button :{
      borderTopLeftRadius : "0%",
      borderBottomLeftRadius : "25px",
      borderBottomRightRadius : "0px",
    }
  }),
);

export const UserRegisterFormRender = ({handleOnSubmit} : RegisterFormPropsType) =>{

    const classes = useStyles();
    return (
      <Fragment>
        <NavBar title = {"Crear nuevo usuario"} />
        <Container fixed>
          <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item md={9}>
                  <p className = {classes.label}>Please, fill up the following form in order to complete the register process</p>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item md={6} sm={6} xs={12} >
                  <Input placeholder="Username" id="myUsername" aria-describedby="usernameHelperText" />
                  <FormHelperText id="usernameHelperText">Type unique username</FormHelperText>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                  <Input placeholder="Password" id="myUsername" aria-describedby="usernameHelperText" />
                  <FormHelperText id="usernameHelperText">Type a secure password</FormHelperText>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={handleOnSubmit() }
                  >Save information</Button>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                  <Button color="secondary" href="/Login">Back to Login form</Button>
                </Grid>
              </Grid>
          </div>
        </Container>
      </Fragment>
    )
}