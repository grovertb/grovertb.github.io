import React from 'react'
import SkillCard from './SkillCard'
import Root from './styles'

const skills = [
  { title: 'Graphic Design', progress: 45 },
  { title: 'Development', progress: 45 },
  { title: 'Marketing Ideas', progress: 32 },
  { title: 'Web Management', progress: 45 }
]

const CardSkills: React.FC = () => (
  <Root>
    {
      skills.map((skill, index) => (
        <SkillCard
          key={index}
          progress={skill.progress}
          title={skill.title} />
      ))
    }
  </Root>
)

export default CardSkills
