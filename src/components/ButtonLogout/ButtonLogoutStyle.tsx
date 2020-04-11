import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme : Theme) =>
  createStyles({
    positionFabButton : {
      position : "relative",
      float : "right",
    },
    root: {
        '& > *' :{
            margin: theme.spacing(1),
        },
        flexGrow: 1,
    },
    extendedIcon : {
        marginRight : theme.spacing(1),
    }
  })
);