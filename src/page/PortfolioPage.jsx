import Title from '../component/Title'
import Category from '../component/Category'
import MenuItem from '../component/MenuItem'
import portfolios from '../component/allPortfolios'
import { useState } from 'react'

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfolioPage() {
  const [categories] = useState(allCategories)
  const [menuItems, setMenuItems] = useState(portfolios)

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(portfolios)
      return menuItems
    }
    const filteredData = portfolios.filter((item) => {
      return item.category === category
    })

    setMenuItems(filteredData)
  }

  return (
    <div className="PortfolioPage">
      <Title title={'portfolios'} span={'portfolios'} />
      <div className="portfolio-data">
        <Category filter={filter} categories={categories} />
        <MenuItem menuItems={menuItems} />
      </div>
    </div>
  )
}

export default PortfolioPage
