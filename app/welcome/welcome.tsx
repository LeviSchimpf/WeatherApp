import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";
import WeatherImage from "./WeatherImage.jpg";
import {GcdsRadios} from '/node_modules/@gcds-core/components-react';
import { GcdsButton } from "/node_modules/@gcds-core/components-react";
import '/node_modules/@gcds-core/components-react/gcds.css';


export function Welcome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <div className="w-[500px] max-w-[100vw] p-4">
            <h2 className="mx-auto flex max-w-sm items-center gap-x-4 rounded-xl bg-white p-6 shadow-lg outline outline-black/5
             dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
              Welcome To Levi's Weather Application!</h2>
            <img
              src={WeatherImage}
              alt="Weather Image"
              className="block w-full dark:hidden"
            />
            <img
              src={WeatherImage}
              alt="Weather Image"
              className="hidden w-full dark:block"
            />
          </div>
        </header>
        <div className="max-w-[300px] w-full space-y-6 px-4">
          
          <nav className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
            <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
              Weather API Used:
            </p>
            <a href="https://open-meteo.com/">Open-Meteo</a>
            <div>
              <p>Daily Weather</p><NavigationButton />
              <p>Weekly Weather</p><NavigationButton />
            </div>
          </nav>
        </div>
      </div>
    </main>
  );
}

const resources = [
  {
    href: "https://reactrouter.com/docs",
    text: "React Router Docs",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="stroke-gray-600 group-hover:stroke-current dark:stroke-gray-300"
      >
        <path
          d="M9.99981 10.0751V9.99992M17.4688 17.4688C15.889 19.0485 11.2645 16.9853 7.13958 12.8604C3.01467 8.73546 0.951405 4.11091 2.53116 2.53116C4.11091 0.951405 8.73546 3.01467 12.8604 7.13958C16.9853 11.2645 19.0485 15.889 17.4688 17.4688ZM2.53132 17.4688C0.951566 15.8891 3.01483 11.2645 7.13974 7.13963C11.2647 3.01471 15.8892 0.951453 17.469 2.53121C19.0487 4.11096 16.9854 8.73551 12.8605 12.8604C8.73562 16.9853 4.11107 19.0486 2.53132 17.4688Z"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    href: "https://open-meteo.com/en/docs/gem-api?bounding_box=-90,-180,90,180&latitude=49.69&longitude=112&timezone=auto",
    text: "Weather API",
    icon: (
      <div>
      <head>
        <link href=
        "https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </head>
      <body>
      
      <span class="material-icons">cloud</span>
      </body>
      </div>
    ),
  },
];

export default function NavigationHeader() {
  return (
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>

    </ul>
  );
}

export function NavigationButton () {
  
  const handleClick = (): void => {
    window.location.href = "http://localhost:5173/weatherWeek"
  }
  return (
    <GcdsButton type="button" buttonId="WeatherReport" onclick={handleClick}>
              Weather Report
    </GcdsButton>
  )
}