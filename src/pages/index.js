import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <div className='nav-left'>
            <img src="/logo.jpg" alt='' />
          </div>
          <div className='nav-right'>
            <p1>About</p1>
            <p1>Work</p1>
            <p1>Testimonials</p1>
            <p1>Contact</p1>
            <img className='icon' src="/Icon.png" alt='' />
            <div className='downloadBtn'>Download CV</div>
          </div>
        </nav>
      </header>

      <main>
        <div className='container'>
          <div className='bio-container'>
            <h1 className='bio-header'>Hi, I’m Sagar 👋</h1>
            <p1 className='bio-paragraph'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) <br /> exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even<br /> though I have been creating web applications for over 7 years, I still love it as if it was something new.</p1>
            <div className='bio-group'>
              <div className='location'>
                <img src='location.png' />
                Ahmedabad, India
              </div>
              <div className='available'>
                <div className='dot-icon-container'><img className='dot-icon' src='icon-dot.png' /></div>
                Available for new projects
              </div>
            </div>
            <div className='bio-footer'>
              <div className='contact'>
                <img src='Icon Button 1.png' />
                <img src='Icon Button 2.png' />
                <img src='Icon Button 3.png' />
              </div>
            </div>
          </div>
          <div className='picture-container'>
            <img className="person-pic" src='Pic.png' />
          </div>
        </div>
      </main>
    </>
  )
}
