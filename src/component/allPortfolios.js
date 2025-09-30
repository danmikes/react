import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import port1 from '../image/portImages/port1.jpg'
import port2 from '../image/portImages/port2.jpg'
import port3 from '../image/portImages/port3.jpg'

const portfolios = [
  {
    id: 1,
    category: 'Mikes-Consult',
    link1: 'https://www.github.com/danmikes/docker',
    link2: 'https://dmikes.hopto.org',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: port1,
    title: 'Flask'
  },
  {
    id: 2,
    category: 'Wish-App',
    link1: 'https://www.github.com/danmikes/flask',
    link2: 'https://dmikes.eu.pythonanywhere.com',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: port2,
    title: 'Flask'
  },
  {
    id: 3,
    category: 'SamSim',
    link1: 'https://www.github.com/danmikes/samsim',
    link2: 'https://www.researchgate.net/publication/375560659_Sensitivity_of_shoreline-trajectory_to_deposition-events',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: port3,
    title: 'Python'
  },
]

export default portfolios
