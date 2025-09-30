import Button from './Button'

function DetailSection() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'dmikes_cv.pdf';
    link.click();
  }

  return (
    <div className="DetailSection">
      <div className="about-info">
        <div className="about-detail">
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
              <th>Czech, Dutch, English, French, German, Russian, Spanish</th>
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
        <Button text="Download CV" onClick={handleDownload} />
      </div>
    </div>
  )
}

export default DetailSection
