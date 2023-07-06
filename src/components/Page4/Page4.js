import React from "react";
import "../CustomMaterial";
import './Page4.css'

const Page4 = () => {
  return (
    <div className='h-[100vh] text-white text-[14px] font-[300] border-r border-white'>
      <div className="flex trig">
        <div className="bg-[#bfff07] w-[1rem] h-[100vh]">
        </div>
        <div className="pt-[6rem] pl-[5rem] w-[30rem]">
          <p>
            Getting into web development altered a lot of things for me because I've always wanted to make new things and original experiences. Since then, I've tried to push my work to new heights with each project while always putting quality first.
          </p>
        </div>
        <div className="w-[37.5rem] mr-[5rem] pt-[20rem] pl-[10rem]">
          <p>
            I decided to go freelance to work on new and exciting ideas surrounded by talented people.
            For each project I work on, I pay particular attention to the interaction, animations and performance of your site, so that your users enjoy a pleasant experience throughout their visit.
          </p>
          <p className="mt-[10px]">
            All this is just the beginning, and I can’t wait to push it even further by working with you on your next project.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page4