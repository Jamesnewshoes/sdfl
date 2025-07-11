
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="p-10 text-center space-y-6">
      <h1 className="text-4xl font-bold">Sustainable Design for Living (SDFL)</h1>
      <p className="text-lg">Where recovery meets renewal. A modern approach to transitional aftercare.</p>
      <Button className="mt-4">Schedule a Tour</Button>
    </div>
  );
}

function About() {
  return (
    <div className="p-10 space-y-4">
      <h2 className="text-3xl font-semibold">About SDFL</h2>
      <p>
        SDFL is a modern transitional aftercare program rooted in sustainability, human dignity,
        and personalized recovery. Founded by James and Gary, our mission is to create elegant,
        healing spaces where individuals can thrive after treatment.
      </p>
    </div>
  );
}

function Services() {
  return (
    <div className="p-10 space-y-4">
      <h2 className="text-3xl font-semibold">Our Services</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Sober Living Residences</li>
        <li>Transitional Aftercare Programs</li>
        <li>Life & Career Coaching</li>
        <li>Integrated Therapy & Wellness</li>
        <li>Community and Alumni Engagement</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div className="p-10 space-y-4">
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <p>Email: info@sdflrecovery.com</p>
      <p>Phone: (555) 123-4567</p>
      <p>Location: San Fernando Valley, CA</p>
      <Button>Schedule a Call</Button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <nav className="flex justify-center space-x-8 p-6 bg-white shadow">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/services" className="hover:underline">Services</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}
