import Button from './Button'
import Tasks from './Tasks'
const header = ({title, onAdd,showAdd}) => {
    const onClick=()=>{
        onAdd()
     
    }

    return (
      
        <header>
           
            <h2>{title}</h2>
            <Button color={showAdd?'red':'orange'} text={showAdd?'Close':'Add'} onClick={onClick}/>

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
