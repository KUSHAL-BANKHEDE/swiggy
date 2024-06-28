import { useRouteError } from 'react-router-dom'
import './error.css'
const Error = () =>{
    const err = useRouteError();
    console.log(err);
 return (
    <div className="se">
    <div className="error-contaner">
        <div className="a-1"> Page Not Found </div>
        <div className="a-2">Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh.</div>
        <a href="/" className="a-3"> GO HOME</a>
    </div>
    </div>
 )
}
export default Error