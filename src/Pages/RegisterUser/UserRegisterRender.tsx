import React,  {Fragment} from 'react';
import { Link } from 'react-router-dom'

//Importamos componentes de material UI 
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Input, FormHelperText} from '@material-ui/core'
import SaveIcon  from '@material-ui/icons/Save'
import {useStyles} from './StyleUserRegisterForm'

//Importamos los componenetes necesarios
import {NavBar} from '../../components/NavBar'

export const UserRegisterFormRender = (props : any) =>{
    
  const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    let name = event.target.name;
    let value = event.target.value;

    props.handleOnInputChange({ [name]: value });
  }

  const onSubmit = (event : React.MouseEvent<HTMLButtonElement>)=> {
    event.preventDefault();
    props.handleOnSubmit();
    props.handleOnInputChange({submitted : true})
  }

    const classes = useStyles();
    return (
      <Fragment>
        <NavBar title = {"Create new user"} />
        <Container fixed>
          <div className={classes.root}>
              <Grid container spacing={3}>
                <Grid item md={9}>
                  <p className = {classes.label}>Please, fill up the following form in order to complete the register process</p>
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item md={12} sm={12} xs={12} >
                  <Input placeholder="Username"  name="userName" aria-describedby="usernameHelperText" onChange= {onChange}/>
                  <FormHelperText id="usernameHelperText">Type a unique username</FormHelperText>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Input placeholder="Password" name="password" aria-describedby="usernameHelperText" type="password" onChange= {onChange}/>
                  <FormHelperText id="usernameHelperText">Type a secure password</FormHelperText>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={onSubmit}
                  >Save information</Button>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                  <Link to="/login"><Button color="secondary" >Cancel</Button></Link>
                </Grid>
              </Grid>
          </div>
        </Container>
      </Fragment>
    )
}