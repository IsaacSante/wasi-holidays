"use client"; // This is a client component 👈🏽

import { useState } from "react";

import { holidayEventsData } from "./utils/holiday_events";
import { familyEventsData } from "./utils/family_events";

export default function Home() {
  const [language, setLanguage] = useState("English");

  const labels = {
    English: {
      siteTitle: "Wasi Holiday Events",
      familyEvents: "Family Events",
      holidayEvents: "Holiday Events",
      date: "Date",
      time: "Time",
      borough: "Borough",
      location: "Location",
      ages: "Ages",
      moreInfo: "More Info",
      toggleButton: "Toggle to Spanish",
    },
    Spanish: {
      siteTitle: "Eventos Festivos de Wasi",
      familyEvents: "Eventos Familiares",
      holidayEvents: "Eventos de Vacaciones",
      date: "Fecha",
      time: "Hora",
      borough: "Barrio",
      location: "Ubicación",
      ages: "Edades",
      moreInfo: "Más Información",
      toggleButton: "Cambiar a Inglés",
    },
  };

  const toggleLanguage = () => {
    setLanguage(language === "English" ? "Spanish" : "English");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full font-mono text-sm">
        {/* Title and Language Toggle */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-bold">{labels[language].siteTitle}</h1>
          <button
            onClick={toggleLanguage}
            className="py-2 px-4 bg-orange-500 text-white rounded"
          >
            {labels[language].toggleButton}
          </button>
        </div>

        {/* Family Events Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold mb-4">
            {labels[language].familyEvents}
          </h2>
          {familyEventsData.map((event, index) => (
            <div
              key={index}
              className="bg-orange-500 p-4 mb-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{event.Event}</h3>
              <p>
                {labels[language].date}: {event.Date}
              </p>
              <p>
                {labels[language].time}: {event.Time}
              </p>
              <p>
                {labels[language].borough}: {event.Borough}
              </p>
              <p>
                {labels[language].location}: {event.Location}
              </p>
              {event.Ages && (
                <p>
                  {labels[language].ages}: {event.Ages}
                </p>
              )}
              {event.Link && (
                <a href={event.Link} className="text-blue-600 hover:underline">
                  {labels[language].moreInfo}
                </a>
              )}
            </div>
          ))}
        </section>

        {/* Holiday Events Section */}
        <section>
          <h2 className="text-xl font-bold mb-4">
            {labels[language].holidayEvents}
          </h2>
          {holidayEventsData.map((event, index) => (
            <div
              key={index}
              className="bg-orange-500 p-4 mb-4 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold">{event.Event}</h3>
              <p>
                {labels[language].date}: {event.Date}
              </p>
              <p>
                {labels[language].time}: {event.Time}
              </p>
              <p>
                {labels[language].borough}: {event.Borough}
              </p>
              <p>
                {labels[language].location}: {event.Location}
              </p>
              {event.Ages && (
                <p>
                  {labels[language].ages}: {event.Ages}
                </p>
              )}
              {event.Link && (
                <a href={event.Link} className="text-blue-600 hover:underline">
                  {labels[language].moreInfo}
                </a>
              )}
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
