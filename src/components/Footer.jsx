import twitter from '../assets/Twitter Icon.svg'
import facebook from '../assets/Facebook Icon.svg'
import instagram from '../assets/Instagram Icon.svg'
import github from '../assets/GitHub Icon.svg'

export default function Footer() {
  return (
    <footer>
      <a href="https://www.twitter.com" target="_blank"><img src={twitter} /></a>
      <a href="https://www.facebook.com" target="_blank"><img src={facebook} /></a>
      <a href="https://www.instagram.com" target="_blank"><img src={instagram} /></a>
      <a href="https://www.github.com" target="_blank"><img src={github} /></a>
    </footer>
  )
}
