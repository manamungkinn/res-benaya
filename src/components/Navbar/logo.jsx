import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div className="shadow-lg container min-[1300px]:max-w-screen-2xl">
    <div className="px-6 justify-center items-center lg:justify-start flex md:flex-row flex-col item-center">
      <Link href="/" className="py-[22px] text-2xl font-bold text-main-primary">
        Rs Benaya
      </Link>
    </div>
  </div>
  )
}

export default Logo