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
import { Counter } from '@/components/Counter'
import { Toggle } from '@/components/Toggle'
import { Stopwatch } from '@/components/Stopwatch'


// import { MainExperiencePart } from '@/components/MainExperiencePart'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {

  return (
    <>
      <div id="body" class="lg:w-[1440px] m-auto w-screen">
        <Stopwatch />
        <HeaderPart />
        <main>
          <FirstMainPage />
          <div class="lg:py-24 lg:px-20 lg:w-[1440px] py-16 px-4 bg-gray-50">
            <div class="lg:px-8 flex flex-col lg:gap-12 gap-6">
              <div class="flex justify-center items-center">
                <div class="py-1 px-5 rounded-xl text-sm bg-[#E5E7EB]">About me</div>
              </div>
              <div class="lg:flex lg:flex-row lg:gap-12 flex flex-col gap-12 items-center">
                <div class="flex flex-col lg:items-start flex-[1_0_0] items-center self-stretch">
                  <img class="lg:shadow-[-40px_40px_#E5E7EB] shadow-[-20px_20px_#E5E7EB]" src='Pic2.png' />
                </div>
                <div className='flex flex-col gap-6'>
                  <h1 class="lg:text-3xl font-semibold text-2xl">Curious about me? Here you have it:</h1>
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
              <div class="lg:flex shadow-[0px_2px_2px_0px_grey] rounded-xl">
                <div class="lg:p-12 lg:p-8 lg:w-[50%] flex justify-center items-center"><img src='Picture.png' /></div>
                <WorkText />
              </div>
              <div class="lg:flex shadow-[0px_2px_2px_0px_grey] rounded-xl">
                <WorkText />
                <div class="lg:p-12 lg:p-8 lg:w-[50%] flex justify-center items-center"><img src='Picture.png' /></div>
              </div>
              <div class="lg:flex shadow-[0px_2px_2px_0px_grey] rounded-xl">
                <div class="lg:p-12 lg:p-8 lg:w-[50%] flex justify-center items-center"><img src='Picture.png' /></div>
                <WorkText />
              </div>
            </div>
          </div>
          <MainContact />
        </main>
        <Counter />
        <Toggle />

        <footer class="lg:py-6 lg:px-20 py-6 bg-gray-50">
          <div class="flex justify-center items-center gap-2 text-center text-sm">
            <CopyrightIcon />
            2023 | <p class="underline">Designed</p> and <p class="underline">coded</p> with ❤️️ by Sagar Shah
          </div>
        </footer>
      </div>
    </>
  )
}
