import Title from '../component/Title'
import Category from '../component/Category'
import MenuItem from '../component/MenuItem'
import portfolios from '../component/allPortfolios'
import { useEffect, useState } from 'react'

const allCategories = ['All', ...new Set(portfolios.map(item => item.category))]

function PortfolioPage() {
  useEffect(() => {
    document.title = "Mikes Consult | portfolio";
  }, []);

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
      <Title title={'portfolio'} span={'portfolios'} />
      <div className="portfolio-data">
        <Category filter={filter} categories={categories} />
        <MenuItem menuItems={menuItems} />
      </div>
    </div>
  )
}

export default PortfolioPage
