import '../CustomersSay.css';

function CustomersSay() {
    const testimonials = [
        {
            name: "Juan Pérez",
            feedback: "¡La comida fue increíble y el servicio excelente!",
            rating: 5
        },
        {
            name: "Ana García",
            feedback: "Una experiencia muy agradable, definitivamente volveré.",
            rating: 4
        },
        {
            name: "Carlos Rodríguez",
            feedback: "El ambiente es perfecto para una cena con amigos.",
            rating: 5
        }
    ];

    return (
        <div className="testimonials-container">
            {testimonials.map((testimonial, index) => (
                <div className="testimonial-card" key={index}>
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.feedback}</p>
                    <div className="rating">Calificación: {testimonial.rating} estrellas</div>
                </div>
            ))}
        </div>
    );
}

export default CustomersSay;