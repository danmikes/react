import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import port1 from '../image/portImages/port1.jpg'
import port2 from '../image/portImages/port2.jpg'
import port3 from '../image/portImages/port3.jpg'

const portfolios = [
  {
    id: 1,
    category: 'Consult',
    link1: 'https://www.github.com/danmikes/consult',
    link2: 'https://danmikes.github.io/consult',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: port1,
    title: 'Svelte'
  },
  {
    id: 2,
    category: 'SamSim',
    link1: 'https://www.github.com/danmikes/samsim',
    link2: 'https://samsim.onrender.com',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: port3,
    title: 'Flask'
  },
  {
    id: 3,
    category: 'Wish-App',
    link1: 'https://www.github.com/danmikes/wish',
    link2: 'https://dmikes.eu.pythonanywhere.com',
    icon1: <FaGithub />,
    icon2: <FaExternalLinkAlt />,
    image: port2,
    title: 'Flask'
  },
]

export default portfolios
