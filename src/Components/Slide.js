import React from 'react'
import Image from 'next/image';
import { Carousel } from 'antd';
import pic1 from "/public/assets/1.jpg"
import pic2 from "/public/assets/2.jpg"
import pic3 from "/public/assets/3.jpg"
import pic4 from "/public/assets/4.jpg"
const contentStyle = {
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',

};
const App = () => (
  <Carousel autoplay>
    <div>
      <Image
      style={contentStyle}
      src={pic1}
      alt="Picture of the web developmen"
    />
    </div>
    <div>
    <Image 
      style={contentStyle}
      src={pic2}
      alt="Picture of the marketting"
    />
    </div>
    <div>
    <Image 
      style={contentStyle}
      src={pic3}
      alt="Picture of the SEO"
    />
    </div>
    <div>
    <Image 
      style={contentStyle}
      src={pic4}
      alt="Picture of the app"
    />
    </div>
  </Carousel>
);
export default App;

