import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

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
    }
  }),
);