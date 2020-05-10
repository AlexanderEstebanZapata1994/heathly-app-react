import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors'
export const useStyles = makeStyles((theme: Theme) =>
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
    },
    card : {
      maxWidth:345
    },
    media : {
      height:0,
      paddingTop:'56.25%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration : theme.transitions.easing.easeIn,
      }),
    },
    expandOpen : {
      transform: 'rotate(180deg)',
    },
    avatar:{
      backgroundColor : red[500]
    }
  }),
);