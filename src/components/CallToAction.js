// CallToAction.js
import { useNavigate } from "react-router-dom";
import '../CallToAction.css';

function CallToAction() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/booking');
    }

    return (
        <div className="call-to-action-container">
            <h1 className="call-to-action-title">Book a table NOW!!!</h1>
            <p className="call-to-action-text">Don't miss out on the opportunity to taste our delicious food!</p>
            <button className="call-to-action-button" onClick={handleClick}>Book Now!</button>
        </div>
    );
}

export default CallToAction;
