import Title from '../component/Title'
import ContactItem from '../component/ContactItem'
import email from '../image/email.svg'
import location from '../image/location.svg'
import phone from '../image/phone.svg'

function ContactPage() {
  return (
    <div className='ContactPage'>
      <Title title={'contact'} span={'contact'} />
      <div className="contact-details">
        <div className="map-sect">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24286.645847275613!2d4.639997370900829!3d52.29140186109729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e7afa59ae60d%3A0x3f11830627093e83!2sHoofddorp!5e0!3m2!1sen!2snl!4v1623790131646!5m2!1sen!2snl" width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text={'+<phone>'} title={'phone'} />
          <ContactItem icon={email} text={'<email>'} title={'email'} />
          <ContactItem icon={location} text={'<city>'} title={'address'} />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
