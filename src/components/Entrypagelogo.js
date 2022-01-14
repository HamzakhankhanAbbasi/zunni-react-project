import React from 'react'
import { Link } from 'react-router-dom'
import GifLoader from 'react-gif-loader';

export default function Entrypagelogo(props) {

    const loadingVal = props.loadingVal;
    // if (loadingVal==null){
    //     loadingVal=true;
    // }
    return (     
        <div className="loaderImg">
            <GifLoader
                loading={loadingVal}
                imageSrc="peter_kahn.gif"
                overlayBackground="rgba(0,0,0,0.5)"
            />
        </div>
    )
}
