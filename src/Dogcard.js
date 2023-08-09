export function Dog(){
    return(
        <>
        <p>jai hind</p>
        </>
    )
}

export function Aj(){
    return(
        <>
        sun meri baat
        </>
    )
}

function LL(){
    return(
        <>
        sun li bhai
        </>
    )
}

export default LL

export function Image(props){
    return(
        <>
        <h3>{props.name}</h3>
        <img src= {props.image}/>
        
        </>
    )
}
export function Image2({image,name}){
    return(
   <>
    <h3>{name}</h3>
     <img src={image}/>
   </>
    )
}