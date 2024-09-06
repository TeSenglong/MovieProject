import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';
const LazyImage = ({src,alt,style,...props}) =>{
    <LazyLoadImage
    alt={alt}
    src={src}
    style={style}
    className='lazyimagecard'
    effect='blur'
    width='100%'
    {...props}
    />
}
export default LazyImage ;