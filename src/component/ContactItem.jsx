function ContactItem({ icon, text, title }) {
  return (
    <div className="ContactItem">
      <div className="contact">
        <img src={icon} alt="" />
        <div className="right-items">
          <p>{text}</p>
        </div>
      </div>
    </div>
  )
}

export default ContactItem
