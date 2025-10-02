import React from 'react';
import Image from 'next/image';

type Props = {
    props?: string
}

const NavBar: React.FC<Props> = (props) => {
  return (
    <nav>
        <Image 
            src="/Logo.png"
            alt="Logo do Site"
            width={91}
            height={24}
        />
    </nav>
  )
}

export default NavBar