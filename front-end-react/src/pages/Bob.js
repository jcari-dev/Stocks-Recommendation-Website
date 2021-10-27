import React from 'react'
import { useState } from 'react'
import Backdrop from '../components/Backdrop'
import Container from '../components/Container'
function Bob() {
    const [quizResult, setquizResult] = useState('')
    return (
        <div>
            <Backdrop test={setquizResult}/>
            
            {/* <Container quizResult={quizResult}/> */}
        </div>
    )
}

export default Bob
