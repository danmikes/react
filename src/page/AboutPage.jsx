import React from 'react'
import Title from '../component/Title'
import DetailSection from '../component/DetailSection'
import SkillSection from '../component/SkillSection'
import { useEffect } from 'react'

function AboutPage() {
  useEffect(() => {
    document.title = "Mikes Consult | about";
  }, []);

  return (
    <div className="AboutPage">
      <Title title={'detail'} span={'detail'} />
      <DetailSection />

      <Title title={'skill'} span={'skill'} />
      <div className="skill-category-container">
        <div className="skill-container">
          <h1>Coaching</h1>
          <SkillSection skill={'Cohesion'} progress={'80%'} />
          <SkillSection skill={'Communication'} progress={'70%'} />
          <SkillSection skill={'Conflict'} progress={'60%'} />
          <SkillSection skill={'Instruction'} progress={'90%'} />
        </div>

        <div className="skill-container">
          <h1>Codebase</h1>
          <SkillSection skill={'Design'} progress={'60%'} />
          <SkillSection skill={'Functionality'} progress={'80%'} />
          <SkillSection skill={'Structure'} progress={'70%'} />
          <SkillSection skill={'User Experience'} progress={'90%'} />
        </div>

        <div className="skill-container">
          <h1>Management</h1>
          <SkillSection skill={'Coordination'} progress={'70%'} />
          <SkillSection skill={'Project Planning'} progress={'80%'} />
          <SkillSection skill={'Project Management'} progress={'90%'} />
          <SkillSection skill={'Technical Advice'} progress={'60%'} />
        </div>

        <div className="skill-container">
          <h1>Workflow</h1>
          <SkillSection skill={'Coding'} progress={'90%'} />
          <SkillSection skill={'Feedback'} progress={'80%'} />
          <SkillSection skill={'Requirements'} progress={'70%'} />
          <SkillSection skill={'Support'} progress={'60%'} />
        </div>
      </div>
    </div>
  )
}

export default AboutPage
