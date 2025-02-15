// libs
import { makeStyles } from '@material-ui/styles'

export const useStyles = makeStyles({
  root: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',

    '& > span': {
      fontWeight: 'bold',
      minWidth: '20px',
    },
  },

  field: {
    width: '100%',
  },
})
