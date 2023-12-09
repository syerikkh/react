import Image from 'next/image'
import { Inter } from 'next/font/google'
import { About } from '../components/About'
import { FirstMainPage } from '../components/FirstMainPage'
import { HeaderPart } from '../components/HeaderPart'
import { Skills } from '@/components/Skills'
import { MainExperience } from '../components/MainExperience'
import { Label } from '@/components/Label'
import { WorkText } from '@/components/WorkText'

// import { MainExperiencePart } from '@/components/MainExperiencePart'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <HeaderPart />
      <main>
        <FirstMainPage />
        <div class="py-24 px-20 w-[1440px] bg-gray-50">
          <div class="px-8 flex flex-col gap-12">
            <div class="flex justify-center items-center">
              <div class="py-1 px-5 rounded-xl bg-[#E5E7EB]">About me</div>
            </div>
            <div class="flex gap-12">
              <div class="flex flex-col items-start flex-[1_0_0] self-stretch">
                <img class="shadow-[-40px_40px_#E5E7EB]" src='Pic2.png' />
              </div>
              <div className='flex flex-col gap-6'>
                <h1 class="text-3xl font-semibold ">Curious about me? Here you have it:</h1>
                <About />
              </div>
            </div>
          </div>
        </div>
        <div class="py-24 px-20 w-[1440px]">
          <div class="flex flex-col gap-12 px-8">
            <Label label="Skills" text="The skills, tools and technologies I am really good at:" />
            <div>
              <Skills />
            </div>
          </div>
        </div>
        <MainExperience />
        <div class="w-[1440px] py-24 px-20">
          <div class="px-8 flex flex-col gap-12 justify-center items-center">
            <Label label="Work" text="Some of the noteworthy projects I have built:" />
            <div class="flex shadow-[0px_2px_2px_0px_grey] rounded-xl">
              <div class="p-12 w-[50%]"><img src='Picture.png' /></div>
              <WorkText />
            </div>
            <div class="flex shadow-[0px_2px_2px_0px_grey] rounded-xl">
              <WorkText />
              <div class="p-12 w-[50%]"><img src='Picture.png' /></div>
            </div>
            <div class="flex shadow-[0px_2px_2px_0px_grey] rounded-xl">
              <div class="p-12 w-[50%]"><img src='Picture.png' /></div>
              <WorkText />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
