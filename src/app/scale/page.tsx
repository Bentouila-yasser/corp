import scaleImg from '../../../public/images/scale.jpg';
import Hero from '@/components/hero';


export default function ScalePage() {
  return <div>
    <Hero imgData={scaleImg} imgAlt='steel factory' title='scale you app to infinity'/>
  </div>;
}
