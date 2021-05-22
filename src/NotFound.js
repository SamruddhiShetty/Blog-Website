import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Sorry this page is not found.</p>
            <Link to="/">Back To Homepage...</Link>
        </div>
     );
}
 
export default NotFound;