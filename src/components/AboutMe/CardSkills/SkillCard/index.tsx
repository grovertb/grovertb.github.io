import { LinearProgress, Typography } from '@mui/material'
import Root, { classes } from './styles'

interface SkillCardProps {
  title: string;
  progress: number;
}

const SkillCard = ({ title, progress }: SkillCardProps) => (
  <Root>
    <Typography
      color='white'
      fontWeight='bold'
      variant='h5'>
      {progress}%
    </Typography>
    <Typography>{title}</Typography>
    <LinearProgress
      className={classes.progress}
      value={progress}
      variant='determinate' />
  </Root>
)

export default SkillCard
