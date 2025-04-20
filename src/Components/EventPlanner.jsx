import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <>
        <div className="event-planner-container">
            <header>
                <h1>Welcome to Event Planner</h1>
            </header>
            <section className='description'>
                <p>Planifica y organiza tus eventos sin esfuerzo con Event Planner. Desde
                    fiestas de cumpleaños hasta reuniones corporativas, te tenemos cubierto.</p>
                <button className='get-started-button'>Comenzar</button>
            </section>
            <section className='events_categories'>
                <ul>
                    <h2>Eventos Sociales:</h2>
                    <li>Fiesta de cumpleaños</li>
                    <li>Celebraciones de aniversario</li>
                    <li>Recepcion de boda</li>
                    <li>Baby showers</li>
                    <li>Fiesta de graduación</li>
                    <li>Reuniones familiares</li>
                </ul>
                <ul>
                    <h2>Eventos de entretenimiento:</h2>
                    <li>Conciertos</li>
                    <li>Festivales de música</li>
                    <li>Proyecciones de películas</li>
                    <li>Espectáculos de comedia</li>
                    <li>Exposiciones de arte</li>
                    <li>Eventos culturales</li>
                </ul>
                <ul>
                    <h2>Eventos comunitarios:</h2>
                    <li>Eventos de recaudación de fondos</li>
                    <li>Galas benéficas</li>
                    <li>Jornadas de voluntariado</li>
                    <li>Fiestas vecinales</li>
                    <li>Festivales comunitarios</li>
                    <li>Celebraciones culturales</li>
                </ul>

            </section>
            <section className='features'>
                <h2>Features</h2>
                <ul>
                    <li>Creación y gestión de eventos sencilla</li>
                    <li>Plantillas de eventos personalizables</li>
                    <li>Gestión de lista de invitados</li>
                    <li>Colaboración en tiempo real</li>
                    <li>Recordatorios y notificaciones</li>
                </ul>
            </section>
            <section className='testimonials'>
                <h2>Testimonials</h2>
                <div className='testimonial'>
                    <p>"Event Planner made organizing my wedding a breeze. Highly recommend!"</p>
                    <p className="author">- Emily Johnson</p>
                </div>
                <div className="testimonial">
                    <p>"I use Event Planner for all my corporate events. It saves me so much time and effort!"</p>
                    <p className="author">- John Smith</p>
                </div>
            </section>

            <section className='contact'>
                <h2>Contáctanos</h2>
                <form>
                    <input type="text" placeholder='Nombre'/>
                    <input type="email" placeholder='Correo electrónico' />
                    <textarea placeholder='Mensaje'></textarea>
                    <button className='submit-button'>Enviar</button>
                </form>
            </section>
        <Footer />
        </div>
        </>
    );
};

export default EventPlanner;
