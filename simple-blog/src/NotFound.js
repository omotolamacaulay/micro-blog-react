import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Houston we have a problem!</h2>
      <p>Page cannot be found</p>
      <Link to='/'>Back to home...</Link>
    </div>
  );
}
 
export default NotFound;