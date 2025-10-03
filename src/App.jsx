import React from "react";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-white shadow-md p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Trillion Web Solutions</h1>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-700 hover:text-blue-700">Home</a></li>
            <li><a href="#services" className="text-gray-700 hover:text-blue-700">Services</a></li>
            <li><a href="#portfolio" className="text-gray-700 hover:text-blue-700">Portfolio</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-blue-700">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <section id="home" className="text-center p-8">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to Trillion Tech</h2>
          <p className="text-xl text-gray-600">A Digital Solutions Company</p>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 Trillion Web Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
