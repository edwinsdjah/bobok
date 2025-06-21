import React from 'react';
import Image from 'next/image';

const HeaderSection = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <header className='relative h-60 text-white overflow-hidden'>
      <div className='absolute inset-0'>
        <Image
          src='/hero.jpg'
          alt='hero-image'
          fill
          className='object-cover objcet-center w-full h-full'
        />
        <div className='absolute inset-0 bg-black opacity-50'></div>
        <div className='relative flex flex-col justify-center items-center h-60 text-center pt-14'>
          <h1 className='text-5xl font-bold leading-tight capitalize'>
            {title}
          </h1>
          <p className='text-xl font-gray-300'>{subTitle}</p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
