import Image from "next/image";
import React from 'react'

export default function Home() {
  return (
    <div className="border shadow-2xl rounded-3xl mt-10 ml-96 mr-96 ">
      <div className="text-[30px] p-3 font-bold text-center">Frequent Questions</div>
      <div className="flex items-start  mt-6">
        <p className="ml-5 font-semibold bg-red-600 text-white w-[50px] h-[30px] rounded-md flex justify-center p-1">1</p>
        <div className="ml-4 flex flex-col">
          <p className="font-semibold">Whom is this event intended for?</p>
          <p className="font-light mt-2 mr-6">Rose event is organized for both aspiring and
            accomplished designers, developers and marketers around the world.
          </p>
        </div>
      </div>
      <div className="flex items-start mt-6">
        <p className="ml-5 font-semibold bg-red-600 text-white w-[50px] h-[30px] rounded-md flex justify-center p-1">2</p>
        <div className="ml-4 flex flex-col">
          <p className="font-semibold">Why should I come maybe it's a waste of time?</p>
          <p className="font-light mt-2 mr-6">You should come to Rose this year because it will be
            one of the most information packed events of the year.
          </p>
        </div>
      </div>
      <div className="flex items-start mt-6 mb-8">
        <p className="ml-5 font-semibold bg-red-600 text-white w-[50px] h-[30px] rounded-md flex justify-center p-1">3</p>
        <div className="ml-4 flex flex-col">
          <p className="font-semibold">Any restrictions that I should ba aware of?</p>
          <p className="font-light mt-2 mr-6">Yes you definitely need to leave your preconceptions
            behind, keep an open mind and enjoy the presentations.
          </p>
        </div>
      </div>
    </div>
  )
}
// Whom is this event intended for?



// 
