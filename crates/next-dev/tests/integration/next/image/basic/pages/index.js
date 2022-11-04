import Image from 'next/image'
import img from '../public/triangle-black.png';

export default function Home() {
  return [
    <Image alt="screenshot" src={img} width="100" height="100" />,
    <Image alt="screenshot" src="/triangle-black.png" width="100" height="100" />,
  ];
}

// TODO: assertions
