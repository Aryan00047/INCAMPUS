import { useAppContext } from '../context/appContext'
import StatsItem from './StatItem'
import { FaExclamation, FaCalendarCheck, FaBug, FaBriefcase  } from 'react-icons/fa'
import Wrapper from '../assets/wrappers/StatsContainer'
const StatsContainer = () => {
  const { stats } = useAppContext()
  const defaultStats = [
    {
      title: 'pending applications',
      count: stats.pending || 0,
      icon: <FaExclamation />,
      color: '#e9b949',
      bcg: '#fcefc7',
    },
    {
      title: 'interviews scheduled',
      count: stats.interview || 0,
      icon: <FaCalendarCheck />,
      color: '#647acb',
      bcg: '#e0e8f9',
    },
    {
      title: 'jobs declined',
      count: stats.declined || 0,
      icon: <FaBug />,
      color: '#d66a6a',
      bcg: '#ffeeee',
    },
    {
      title: 'jobs selected',
      count: stats.selected || 0,
      icon: <FaBriefcase />,
      color: '#47ed4d',
      bcg: '#ffeeee',
    },
  ]

  return (
    <Wrapper>
      {defaultStats.map((item, index) => {
        return <StatsItem key={index} {...item} />
      })}
    </Wrapper>
  )
}

export default StatsContainer