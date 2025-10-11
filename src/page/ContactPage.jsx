import Title from '../component/Title'
import ContactItem from '../component/ContactItem'
import email from '../image/email.svg'
import location from '../image/location.svg'
import phone from '../image/phone.svg'
import { useEffect } from 'react'

function ContactPage() {
  useEffect(() => {
    document.title = "Mikes Consult | contact";
  }, []);

  return (
    <div className='ContactPage'>
      <Title title={'contact'} span={'contact'} />
      <div className="contact-details">
        <div className="map-sect">
          <iframe
            src="https://maps.google.com/maps?q=Ina%20Boudier-Bakkerdreef%2C%20Hoofddorp%2C%20Netherlands&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Map of location"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem icon={phone} text={'[NL]6.4744.3505'} />
          <ContactItem icon={email} text={'max8[@]post[.]cz'} />
          <ContactItem icon={location} text={'2135RB Hoofddorp'} />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
