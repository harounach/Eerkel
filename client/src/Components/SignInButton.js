import "./SignInButton.scss";
import { Link } from "react-router-dom";

function SignInButton(props) {
  return (
    <Link to="/signin" className="signin-btn">
      Sign In
    </Link>
  );
}

export default SignInButton;
