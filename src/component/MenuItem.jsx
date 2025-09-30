function MenuItem({ menuItems }) {
  return (
    <div className="portfolios">
      {
        menuItems.map((item) => {
          return <div className="portfolio" key={item.id}>
            <div className="image-data">
              <img src={item.image} alt="" />
              <ul className="hover-item">
                <li>
                  <a href={item.link1}>{item.icon1}</a>
                </li>
                <li>
                  <a href={item.link2}>{item.icon2}</a>
                </li>
              </ul>
            </div>
            <h5>
              {item.category}
            </h5>
            <p>{item.title}</p>
          </div>
        })
      }
    </div>
  )
}

export default MenuItem
