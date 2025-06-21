import HeaderSection from '../../components/headerSection';
import Image from 'next/image';
import { IoEyeOutline, IoLocateOutline } from 'react-icons/io5';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Who Are We',
};

const AboutPage = () => {
  return (
    <div>
      <HeaderSection title='About Us' subTitle='Lorem ipsum dolor sit amet.' />
      <div className='max-w-screen-xl mx-auto py-20 px-4'>
        <div className='grid md:grid-cols-2 gap-8'>
          <Image
            src='/about-image.jpg'
            width={650}
            height={578}
            alt='about Image'
          />
          <div>
            <h1 className='text-5xl font-semibold text-gray-900 mb-4'>
              Who Are We?
            </h1>
            <p className='text-gray-700 py-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              ducimus asperiores voluptate facilis dicta quo laborum incidunt
              aspernatur repellendus laboriosam!
            </p>
            <ul className='list-item space-y-6 pt-8'>
              <li className='flex gap-5'>
                <div className='flex-none mt-1'>
                  <IoEyeOutline className='size-7' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-large font-semibold mb-1'>Vision : </h4>
                  <p className='text-gray-600'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Quae a maxime odio asperiores odit nostrum!
                  </p>
                </div>
              </li>
              <li className='flex gap-5'>
                <div className='flex-none mt-1'>
                  <IoLocateOutline className='size-7' />
                </div>
                <div className='flex-1'>
                  <h4 className='text-large font-semibold mb-1'>Mission : </h4>
                  <p className='text-gray-600'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Debitis provident aliquid impedit necessitatibus natus
                    mollitia ab excepturi illum praesentium enim?
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
