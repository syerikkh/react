import Image from 'next/image'
import { Inter } from 'next/font/google'
import { About } from '../components/About'
import { FirstMainPage } from '../components/FirstMainPage'
import { HeaderPart } from '../components/HeaderPart'
import { Skills } from '@/components/Skills'
import { MainExperience } from '../components/MainExperience'
import { Label } from '@/components/Label'
import { WorkText } from '@/components/WorkText'
import { MailIcon } from '@/components/Icons/MailIcon'
import { RandomIcon } from '@/components/Icons/CopyIcon'
import { ContactIcon } from '@/components/Icons/ContactIcon'
import { GithubIcon } from '@/components/Icons/GithubIcon'
import { TwitterIcon } from '@/components/Icons/TwitterIcon'
import { FigmaIcon } from '@/components/Skills Icons/FigmaIcon'
import { FigmaSmallIcon } from '@/components/Icons/FigmaSmallIcon'
import { MainContact } from '@/components/MainContact'
import { CopyrightIcon } from '@/components/Icons/CopyrightIcon'
import { useState } from 'react'
import { MenuIcon } from '@/components/Icons/MenuIcon'
import { DarkModeIcon } from '@/components/Icons/DarkModeIcon'
import { LightModeIcon } from '@/components/Icons/LightModeIcon'
import { SSIcon } from '@/components/Icons/SSIcon'


// import { MainExperiencePart } from '@/components/MainExperiencePart'
const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const [active, setActive] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (

    <div className={darkMode && 'dark'}>
      <div className='dark:bg-[#030712]'>
        <div id="body" class="lg:w-[1440px] m-auto w-screen">
          <header class="h-[68px] lg:flex justify-center lg:py-[16px] lg:px-[80px] mb-10 p-4 w-full">
            <nav class="flex lg:w-[100%] justify-between lg:px-[32px]">
              <div >
                <SSIcon />
              </div>
              <div id='aboutid' class="lg:flex lg:gap-[24px] lg:items-center hidden text-gray-600 dark:text-[#D1D5DB]">
                <p1>About</p1>
                <p1>Work</p1>
                <p1>Testimonials</p1>
                <p1>Contact</p1>
                <button onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <DarkModeIcon /> : <LightModeIcon />}</button>
                <a href='Icon.png' download class="bg-gray-900 w-[136px] text-white lg:py-[6px] lg:px-[16px] rounded-xl lg:flex lg:justify-center lg:items-center dark:bg-[#F9FAFB] dark:text-[#111827]">Download CV</a>
              </div>
              <div class="lg:hidden ">
                <button onClick={() => setActive(!active)}>
                  {active ? <img className='w-[24px] h-[24px]' src='https://uxwing.com/wp-content/themes/uxwing/download/checkmark-cross/close-icon.png'></img> : <MenuIcon />}
                </button>
              </div>

            </nav>
            {
              active ?
                <div className='flex justify-between border-solid border-2 border-sky-500 p-2 rounded-md'>
                  <div>
                    <div id='aboutid' class="lg:flex flex-col flex  lg:gap-[24px] lg:items-center block lg:hidden text-gray-600">
                      <p1>About</p1>
                      <p1>Work</p1>
                      <p1>Testimonials</p1>
                      <p1>Contact</p1></div>
                  </div>
                  <div className='flex flex-col items-center gap-2'>
                    <button onClick={() => { setDarkMode(!darkMode) }}>
                      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
                    </button>

                    <div class="bg-gray-900 w-[136px] h-[40px] text-white lg:py-[6px] lg:px-[16px] rounded-xl flex justify-center items-center">Download CV</div>
                  </div>

                </div> : <div></div>
            }
          </header >
          <main>
            <FirstMainPage />
            <div class="lg:py-24 lg:px-20 lg:w-[1440px] py-16 px-4 bg-gray-50 dark:bg-[#111827]">
              <div class="lg:px-8 flex flex-col lg:gap-12 gap-6">
                <div class="flex justify-center items-center">
                  <div class="py-1 px-5 rounded-xl text-sm bg-[#E5E7EB]">About me</div>
                </div>
                <div class="lg:flex lg:flex-row lg:gap-12 flex flex-col gap-12 items-center">
                  <div class="flex flex-col lg:items-start flex-[1_0_0] items-center self-stretch">
                    <img class="lg:shadow-[-40px_40px_#E5E7EB] shadow-[-20px_20px_#E5E7EB]" src='Pic2.png' />
                  </div>
                  <div className='flex flex-col gap-6'>
                    <h1 class="lg:text-3xl font-semibold text-2xl dark:text-[#F9FAFB]">Curious about me? Here you have it:</h1>
                    <About />
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:py-24 lg:px-20 lg:w-[1440px] py-16 px-4">
              <div class="flex flex-col gap-12 px-8">
                <Label label="Skills" text="The skills, tools and technologies I am really good at:" />
                <div class="flex justify-center items-center">
                  <Skills />
                </div>
              </div>
            </div>
            <MainExperience />
            <div class="lg:w-[1440px] lg:py-24 lg:px-20 py-16 px-4">
              <div class="lg:px-8 flex flex-col lg:gap-12 gap-6 lg:justify-center lg:items-center">
                <Label label="Work" text="Some of the noteworthy projects I have built:" />
                <div class="lg:flex shadow-[0px_2px_2px_0px_grey] rounded-xl dark:bg-[#374151]">
                  <div class="lg:p-12 lg:p-8 lg:w-[50%] flex justify-center items-center"><img src='Picture.png' /></div>
                  <WorkText />
                </div>
                <div class="lg:flex shadow-[0px_2px_2px_0px_grey] rounded-xl dark:bg-[#374151]">
                  <WorkText />
                  <div class="lg:p-12 lg:p-8 lg:w-[50%] flex justify-center items-center"><img src='Picture.png' /></div>
                </div>
                <div class="lg:flex shadow-[0px_2px_2px_0px_grey] rounded-xl dark:bg-[#374151]">
                  <div class="lg:p-12 lg:p-8 lg:w-[50%] flex justify-center items-center"><img src='Picture.png' /></div>
                  <WorkText />
                </div>
              </div>
            </div>
            <MainContact />
          </main>
          <footer class="lg:py-6 lg:px-20 py-6 bg-gray-50 dark:bg-[#111827]">
            <div class="flex justify-center items-center gap-2 text-center text-sm dark:text-[#D1D5DB]">
              <CopyrightIcon />
              2023 | <p class="underline">Designed</p> and <p class="underline">coded</p> with ❤️️ by Sagar Shah
            </div>
          </footer>
        </div >
      </div >
    </div >
  )
}
