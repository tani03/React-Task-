import React from 'react'
import Button from './Button'
const MainHeader = () => {
    const onClickHome=()=>{
        alert("Menu");
    }

    return (
        <header className='header'>
            <h1>Library</h1>
            <Button color='orange' text='Home' onClick={onClickHome}/>
        </header>
    )
}

export default MainHeader
