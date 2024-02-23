import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../styles/navbar.css"

const navbar = () => {
  return (
    <nav>
        <ul>
            <li id='title'>
                <Link href="/">LandB</Link>
            </li>
            <li id='mypage'>
              <Link href="/Mypage">
              <Image
                src="/images/akaExample.png"
                alt="説明文"
                width={60} 
                height={60}
              />
              </Link>
            </li>
        </ul>
    </nav>
  )
}

export default navbar
