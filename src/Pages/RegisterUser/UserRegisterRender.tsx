import React,  {Fragment} from 'react';
import { Link } from 'react-router-dom'
import { IProps } from '../../Model'


//Importamos componentes de material UI 
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {Input, FormHelperText} from '@material-ui/core'
import SaveIcon  from '@material-ui/icons/Save'
import {useStyles} from './StyleUserRegisterForm'

//Importamos los componenetes necesarios
import {NavBar} from '../../components/NavBar'

type handleOnChangeInputType = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void

export const UserRegisterFormRender = (props : IProps) =>{
    const {userForm, setUser, handleOnSubmit} : IProps = props

    const handleOnChangeInput : handleOnChangeInputType =  (event : React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{ 
      const name = event.target.name
      const value = event.target.value
      setUser({...userForm, [name] : value})
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
                  <Input placeholder="Username"  name="username" aria-describedby="usernameHelperText" onChange= {(e) => handleOnChangeInput(e)}/>
                  <FormHelperText id="usernameHelperText">Type a unique username</FormHelperText>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Input placeholder="Password" name="password" aria-describedby="usernameHelperText" type="password" onChange= {(e) => handleOnChangeInput(e)}/>
                  <FormHelperText id="usernameHelperText">Type a secure password</FormHelperText>
                </Grid>
                <Grid item md={12} sm={6} xs={12}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                    onClick={handleOnSubmit}
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