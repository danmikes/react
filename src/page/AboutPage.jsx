import Title from '../component/Title'
import DetailSection from '../component/DetailSection'
import SkillSection from '../component/SkillSection'
import ServiceSection from '../component/ServiceSection'
import react from '../image/react.png'
import fullstack from '../image/fullstack.png'
import spring from '../image/spring.png'
import app from '../image/app.png'

function AboutPage() {
  return (
    <div className="AboutPage">
      <Title title={'details'} span={'details'} />
      <DetailSection />

      <Title title={'skills'} span={'skills'} />
      <div className="skills-container">
        <SkillSection skill={'Java/SpringBoot/IntelliJ Idea'} progress={'80%'} />
        <SkillSection skill={'JavaScript/ReactJS/Visual Studio Code'} progress={'40%'} />
        <SkillSection skill={'JavaScript/ReactNative/Visual Studio Code'} progress={'10%'} />
        <SkillSection skill={'TypeScript/Angular'} progress={'20%'} />
        <SkillSection skill={'Python/PyCharm'} progress={'10%'} />
        <SkillSection skill={'Vi/Bash/LateX'} progress={'80%'} />
        <SkillSection skill={'SQL/PostgreSql'} progress={'40%'} />
        <SkillSection skill={'noSQL/MongoDB'} progress={'40%'} />
        <SkillSection skill={'GraphQL/GraphQLPlayground'} progress={'20%'} />
        <SkillSection skill={'LinkedData/SparQL'} progress={'1%'} />
        <SkillSection skill={'Git/GitHub/GitLab'} progress={'90%'} />
        <SkillSection skill={'Machine Learning/Artificial Intelligence'} progress={'0%'} />
      </div>

      <Title title={'services'} span={'service'} />
      <div className="services-container">
        <ServiceSection image={fullstack} title={'fullstack'} text={'JamStack'} />
        <ServiceSection image={spring} title={'backend'} text={'SpringBoot'} />
        <ServiceSection image={react} title={'frontend'} text={'React'} />
        <ServiceSection image={app} title={'mobile'} text={'ReactNative'} />
      </div>
    </div>
  )
}

export default AboutPage
