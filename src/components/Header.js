import Button from './Button'
import Tasks from './Tasks'
const header = ({title}) => {
    const onClick=()=>{
        console.log('Click')
        alert("Clicked")
    }

    return (
      
        <header>
           
            <h2>{title}</h2>
            <Button color='orange' text='Add' onClick={onClick}/>

        </header>
        
    )
}

Headers.defaultProps={
    title:'New Library',
}

// Headers.propTypes={
//     title: PropTypes.string.isRequired,
// }

//CSS in JS
// const headingStyle={
//     color:'orange',
//     backgroundColor:'black',
 
// }

export default header
