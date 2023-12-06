import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <header class="h-[68px] w-[1440px] flex justify-center py-[16px] px-[80px]">
        <nav class="flex w-[100%] justify-between px-[32px]">
          <div >
            <img src="/logo.jpg" alt='' />
          </div>
          <div class="flex gap-[24px] items-center">
            <p1>About</p1>
            <p1>Work</p1>
            <p1>Testimonials</p1>
            <p1>Contact</p1>
            <img class="h-6 w-6" src="/Icon.png" alt='' />
            <div class="bg-black w-[136px] text-white py-[6px] px-[16px] rounded-xl flex justify-center items-center">Download CV</div>
          </div>
        </nav>
      </header>

      <main class="w-[1440px] py-16 px-20">
        <div class="flex gap-12 px-8 justify-between">
          <div class="flex flex-col gap-2">
            <h1 class="text-6xl font-bold">Hi, I’m Sagar 👋</h1>
            <p1 class="text-base font-normal">I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) <br /> exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even<br /> though I have been creating web applications for over 7 years, I still love it as if it was something new.</p1>
            <div class="flex flex-col gap-2 mt-12">
              <div class="flex gap-2">
                <img src='location.png' />
                Ahmedabad, India
              </div>
              <div class="flex gap-2">
                <div class="h-6 w-6 p-2">
                  <img src='icon-dot.png' /></div>
                Available for new projects
              </div>
            </div>
            <div class="pt-12 ">
              <div class="flex">
                <img src='Icon Button 1.png' />
                <img src='Icon Button 2.png' />
                <img src='Icon Button 3.png' />
              </div>
            </div>
          </div>
          <div class="h-90 w-100">
            <img class="shadow-[40px_40px_#E5E7EB]" src='Pic.png' />
          </div>
        </div>
      </main>
    </>
  )
}
