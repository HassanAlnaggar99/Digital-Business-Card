import Laura from '../assets/LauraSmith.png'
import letter from '../assets/Mailletter.svg'
import linkedin from '../assets/linkedin.svg'

export default function Info() {
  return (
    <header>
      <img className='info-img' src={Laura} />
      <h1 className='info-name'>Laura Smith</h1>
      <p className='info-job'>Frontend Developer</p>
      <p className='info-website'>laurasmith.website</p>
      <div className='info-buttons'>
        <button className='info-email-btn'><img src={letter} />Email</button>
        <button className='info-linkedin-btn'><img src={linkedin} />LinkedIn</button>
      </div>
    </header>
  )
}
