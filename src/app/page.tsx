import Image from "next/image";
import { Fragment } from "react";

export default function Home() {
  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h1 className="text-4xl tracking-tight font-bold text-gray-800 sm:text-5xl md:text-6xl">
            <span className="block">Get Organized with</span>
            <span className="block text-blue-500">Todos App</span>
          </h1>
          <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Manage your tasks and be more productive with our simple yet
            powerful Todos app. Stay on top of your daily to-dos and achieve
            your goals faster.
          </p>
          <div className="mt-8 flex justify-center sm:justify-start">
            <a
              href="#"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg mr-2"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-block bg-transparent hover:bg-gray-300 text-blue-500 font-bold py-3 px-6 rounded-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
