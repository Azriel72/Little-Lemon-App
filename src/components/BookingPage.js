import { useState } from 'react';
import '../BookingPage.css';
import Alert from './Alert';

function BookingPage() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const [occasion, setOccasion] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (date && time && numberOfGuests && occasion) {
            setAlertMessage(`Booking confirmed for ${numberOfGuests} guests on ${date} at ${time} for the occasion of ${occasion}`);
            setShowAlert(true);
            setDate('');
            setTime('');
            setNumberOfGuests(0);
            setOccasion('');
        }
    }

    const handleCloseAlert = () => {
        setShowAlert(false);
    }

    return (
        <div className="booking-page">
            <h1>Booking Page</h1>
            {showAlert && <Alert message={alertMessage} onClose={handleCloseAlert} />}
            <form onSubmit={submitHandler}>
                <label htmlFor="date">Date
                    <input required type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </label>
                <label htmlFor="time">Time
                    <input required type="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
                </label>
                <label htmlFor="numberOfGuests">Number of Guests
                    <input required type="number" id="numberOfGuests" value={numberOfGuests} onChange={(e) => setNumberOfGuests(e.target.value)} />
                </label>
                <label htmlFor="occasion">Occasion
                    <input required type="text" id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)} />
                </label>
                <button type="submit">Submit!</button>
            </form>
        </div>
    );
}

export default BookingPage;
