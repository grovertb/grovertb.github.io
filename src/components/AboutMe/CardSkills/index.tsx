import React from 'react'
import { Card, Progress, Title, Subtitle, classes } from './styles'

interface SkillCardProps {
  title: string;
  progress: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, progress }) => (
  <Card className={classes.root}>
    <Title className={classes.title}>{progress}%</Title>
    <Subtitle className={classes.subtitle}>{title}</Subtitle>
    <Progress
      className={classes.progress} value={progress}
      variant='determinate' />
  </Card>
)

const skills = [
  { title: 'Graphic Design', progress: 45 },
  { title: 'Development', progress: 45 },
  { title: 'Marketing Ideas', progress: 32 },
  { title: 'Web Management', progress: 45 }
]

const CardSkills: React.FC = () => (
  <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
    {skills.map((skill, index) => (
      <SkillCard key={index} {...skill} />
    ))}
  </div>
)

export default CardSkills
