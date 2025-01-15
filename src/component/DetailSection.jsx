import about from '../image/about.jpg'
import Button from './Button'

function DetailSection() {
  return (
    <div className="DetailSection">
      <div className="about-info">
        <div className="about-details">
          <table>
            <tr>
              <th>Name</th>
              <th>Daniel Mikes</th>
            </tr>
            <tr>
              <th>Age</th>
              <th>57</th>
            </tr>
            <tr>
              <th>Nationality</th>
              <th>Czech, Dutch</th>
            </tr>
            <tr>
              <th>Language</th>
              <th>Czech, Dutch, French, German, English, Russian, Spanish</th>
            </tr>
            <tr>
              <th>Domicile</th>
              <th>Hoofddorp</th>
            </tr>
            <tr>
              <th>Country</th>
              <th>Holland</th>
            </tr>
          </table>
        </div>
        <Button text="Download CV" />
      </div>
    </div>
  )
}

export default DetailSection
