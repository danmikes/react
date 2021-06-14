function ServiceSection({ image, title, items }) {
  return (
    <div className="ServiceSection">
      <div className="service">
        <div className="service-content">
          <img src={image} alt="" />
          <h5 className="service-title">{title}</h5>
          <ul className="service-items">
            {items.map((item, index) => (
              <li key={index} className="service-item">{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
