import { styled, Paper, LinearProgress } from '@mui/material'

const PREFIX = 'CardSkills'

export const classes = {
  root    : `${PREFIX}-root`,
  progress: `${PREFIX}-progress`,
  title   : `${PREFIX}-title`,
  subtitle: `${PREFIX}-subtitle`
}

export const Card = styled(Paper)(({ theme }) => ({
  padding        : theme.spacing(2),
  textAlign      : 'center',
  color          : theme.palette.text.secondary,
  backgroundColor: '#21272f',
  borderRadius   : theme.shape.borderRadius,
  margin         : theme.spacing(1),
  width          : '200px' // Adjust the width as needed
}))

export const Progress = styled(LinearProgress)({
  height                   : 10,
  borderRadius             : 5,
  [`&.${classes.progress}`]: {
    backgroundColor: '#21272f'
  },
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#00bfa5' // Adjust the color of the progress bar
  }
})

export const Title = styled('div')({
  fontWeight: 'bold',
  fontSize  : '1.5rem',
  color     : '#fff'
})

export const Subtitle = styled('div')({
  fontSize: '1rem',
  color   : '#fff'
})
