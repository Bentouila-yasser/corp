import homeImg from '../../public/images/home.jpg';
import Hero from '@/components/hero';


export default function Home() {
  return <div>
    <Hero imgData={homeImg} imgAlt='car factory' title='proffesional cloud hosting'/>
  </div>;
}
