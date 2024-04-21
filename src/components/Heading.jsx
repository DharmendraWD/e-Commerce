import userContext from './context/Context';
import { useContext } from 'react';


const Heading =()=>{
    const value = useContext(userContext);

    return(
        <h1 className="fs-2 text-primary text-center">{value.explore}</h1>
    )
}

export default Heading;