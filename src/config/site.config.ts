/**
 * site.config.ts — JEDYNE miejsce z danymi klienta.
 * Nowy klient = zmiana tego pliku + tekstów w sekcjach.
 *
 * UWAGA: to projekt demonstracyjny. Firma „Ciepłomir” jest fikcyjna,
 * a dane kontaktowe i rejestrowe są zastępcze.
 */
export const site = {
  demo: true, // pokazuje pasek „projekt demonstracyjny”

  nazwa: "Ciepłomir",
  nazwaPrawna: "Ciepłomir Instalacje (firma fikcyjna)",
  slogan: "Pompy ciepła i fotowoltaika dla domów jednorodzinnych",
  opis:
    "Dobór, montaż i serwis pomp ciepła powietrze–woda w Lublinie i okolicach. Bezpłatna wizja lokalna, pomoc w formalnościach dotacyjnych, gwarancja na montaż.",

  nip: "000-000-00-00",
  regon: "000000000",

  telefon: "+48000000000", // format E.164 do linków tel:
  telefonWyswietlany: "000 000 000",
  email: "kontakt@example.com",

  adres: {
    ulica: "ul. Przykładowa 1",
    kod: "20-000",
    miasto: "Lublin",
    wojewodztwo: "lubelskie",
  },
  obszarDzialania: ["Lublin", "Świdnik", "Lubartów", "Łęczna", "Puławy", "Kraśnik"],

  godziny: [
    { dni: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], od: "08:00", do: "17:00", etykieta: "Pon–Pt" },
    { dni: ["Saturday"], od: "09:00", do: "13:00", etykieta: "Sobota" },
  ],
  geo: { lat: 51.2465, lng: 22.5684 },

  profilGoogle: "",
  social: { facebook: "", instagram: "" },

  typSchema: "HVACBusiness", // LocalBusiness → np. Dentist / Plumber / LegalService

  // Formularz: wstaw endpoint Formspree / Web3Forms. Pusty = tryb demo (bez wysyłki).
  formularzEndpoint: "",

  analityka: "brak" as "plausible" | "umami" | "ga4" | "brak",

  autor: { nazwa: "Tomasz Zacharczuk", github: "https://github.com/TomaszZach-git" },
};

export type Site = typeof site;
