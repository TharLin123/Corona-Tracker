import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root1: {
      minWidth: 200,
      borderBottom: "5px solid red"
    },
    root2: {
      minWidth: 200,
      borderBottom: "5px solid green"
    },
    root3: {
      minWidth: 200,
      borderBottom: "5px solid blue"
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default useStyles