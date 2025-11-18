import { FC } from 'react';
import {NavLink} from "react-router";
import AppLayout from "../layouts/AppLayout";
import '../styles/main.scss'
import background from '../assets/images/forest.jpg';
import  Logo  from '../assets/Biker-Map-Logo.svg';

const App: FC = () => {
    return (
        <AppLayout>
            <div className="min-h-screen bg-gray-50 text-gray-800">
                {/* Hero Section */}
                <section className="hero text-white py-20 px-6 text-center">
                    <img className='background-image' src={background}/>
                    <img
                        src={Logo}
                        alt="logo"
                        className="logo"
                    />
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">Biker-Map</h1>
                    <p className="text-lg md:text-2xl max-w-3xl mx-auto">
                        Entdecke die besten Mountainbike-Trails, Bikeparks & Shops – alles auf einer Karte.
                    </p>
                    <NavLink
                        to="/trailmap"
                    >
                        Jetzt Karte öffnen
                    </NavLink>
                </section>

                {/* Features */}
                <section className="py-16 px-6 bg-white">
                    <h2 className="text-3xl font-bold text-center mb-12">Was dich erwartet</h2>
                    <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
                        <Feature
                            title="Interaktive Karte"
                            description="Finde Trails, Parks und Shops schnell & einfach."
                            icon="🗺️"
                        />
                        <Feature
                            title="Community-Infos"
                            description="Bewertungen, Fotos & Tipps von echten Biker:innen."
                            icon="👥"
                        />
                        <Feature
                            title="Eigene Spots markieren"
                            description="Teile neue Trails oder lokale Geheimtipps."
                            icon="📌"
                        />
                    </div>
                </section>

                {/* Community */}
                <section className="bg-gray-100 py-16 px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Stimmen aus der Community</h2>
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Testimonial
                            name="Lukas"
                            text="Endlich eine Karte, die sich wirklich aufs Mountainbiken konzentriert – super gemacht!"
                        />
                        <Testimonial
                            name="Anna"
                            text="Gerade im Urlaub Gold wert. In 5 Minuten Top-Trails in der Nähe gefunden."
                        />
                    </div>
                </section>

                {/* CTA */}
                <section className="py-20 px-6 bg-green-600 text-white text-center">
                    <h2 className="text-4xl font-bold mb-4">Bereit für dein nächstes Abenteuer?</h2>
                    <p className="text-lg mb-6">Finde Trails, Parks und Shops mit nur einem Klick.</p>
                    <a
                        href="#karte"
                        className="bg-white text-green-600 font-semibold px-6 py-3 rounded-full shadow-md hover:bg-gray-100"
                    >
                        Karte entdecken
                    </a>
                </section>
            </div>
        </AppLayout>
    );
};

export default App;

interface FeatureProps {
    title: string;
    description: string;
    icon: string;
}

const Feature: FC<FeatureProps> = ({ title, description, icon }) => (
    <div className="bg-white rounded-xl shadow p-6 text-center">
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p>{description}</p>
    </div>
);

interface TestimonialProps {
    name: string;
    text: string;
}

const Testimonial: FC<TestimonialProps> = ({ name, text }) => (
    <div className="bg-white rounded-lg shadow p-6">
        <p className="italic">“{text}”</p>
        <p className="mt-2 font-semibold">– {name}</p>
    </div>
);