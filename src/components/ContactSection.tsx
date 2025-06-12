'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  MessageSquareMore,
} from 'lucide-react';

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const handleGetDirections = () => {
    setLoading(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const destination = 'Zengeza 3 Roman Catholic Church, Chitungwiza';
          const mapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${encodeURIComponent(
            destination
          )}&travelmode=driving`;
          window.open(mapsUrl, '_blank');
          setLoading(false);
        },
        (error) => {
          alert('Unable to retrieve your location. Please ensure location services are enabled.');
          setLoading(false);
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">We're here to serve and welcome you</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Parish Office & Office Hours */}
          <div className="flex flex-col space-y-6">
            {/* Parish Office */}
            <Card className="shadow-lg h-full">
              <CardContent className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <MapPin className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Parish Office</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Address</h4>
                    <p className="text-gray-600">
                      123 Parish Street<br />
                      Catholic City, State 12345<br />
                      United States
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Phone & Email</h4>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 text-secondary mr-2" />
                        <span className="text-gray-600">(555) 123-4567</span>
                      </div>
                      <div className="flex items-center">
                        <Mail className="w-4 h-4 text-secondary mr-2" />
                        <span className="text-gray-600">info@stagnesparish.org</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Office Hours */}
            <Card className="shadow-lg h-full">
              <CardContent className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  {[
                    ['Monday - Thursday', '9:00 AM - 5:00 PM'],
                    ['Friday', '9:00 AM - 12:00 PM'],
                    ['Saturday', 'By Appointment'],
                    ['Sunday', 'Closed'],
                  ].map(([day, time]) => (
                    <div className="flex justify-between" key={day}>
                      <span className="font-medium text-gray-900">{day}</span>
                      <span className="text-black">{time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Directions */}
          <div className="flex flex-col h-full">
            <Card className="shadow-lg h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Directions</h3>
                <div className="rounded-lg overflow-hidden h-72 mb-6">
                  <iframe
                    title="Zengeza 3 Roman Catholic Church Location"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.553148050983!2d31.0578896!3d-18.0074889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x193199c10e8c6935%3A0x8e85a27ae711ba25!2sZengeza%203%20Roman%20Catholic%20Church%2C%20Chitungwiza!5e0!3m2!1sen!2szw!4v1717680000000"
                  ></iframe>
                </div>

                {/* Restored Text Below Map */}
                <p className="text-gray-700 mb-4">
  Looking for the easiest way to visit us? Just tap the button below and you'll get personalized, turn-by-turn directions from your current location straight to our parish. Whether you're coming by car, public transport, or walking, we want to make sure your journey here is simple and stress-free.
</p>


                {/* Get Directions Button */}
                <button
                  onClick={handleGetDirections}
                  disabled={loading}
                  className={`text-white font-semibold px-6 py-2 rounded-lg transition flex items-center justify-center w-fit ${
                    loading
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-sky-500 hover:bg-gradient-to-r from-sky-500 to-sky-800'
                  }`}
                >
                  <MapPin className="inline mr-2 -mt-1" />
                  {loading ? 'Getting location...' : 'Get Directions'}
                </button>
              </CardContent>
            </Card>
          </div>

          {/* Parish Staff */}
          <div className="flex flex-col h-full">
            <Card className="shadow-lg h-full">
              <CardContent className="p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Parish Staff</h3>
                <div className="space-y-4">
                  {[
                    ['Fr. Michael Rodriguez', 'Pastor', 'pastor@stagnesparish.org'],
                    ['Deacon John Smith', 'Permanent Deacon', 'deacon@stagnesparish.org'],
                    ['Mary Johnson', 'Parish Administrator', 'admin@stagnesparish.org'],
                    ['David Wilson', 'Music Director', 'music@stagnesparish.org'],
                  ].map(([name, title, email]) => (
                    <div key={name}>
                      <h4 className="font-semibold text-gray-900">{name}</h4>
                      <p className="text-secondary">{title}</p>
                      <p className="text-gray-600 text-sm">{email}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message Form */}
          <div className="flex flex-col h-full">
            <Card className="shadow-lg h-full">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Us a Message</h3>
                  <form className="space-y-4">
                    {[
                      ['Name', 'text', 'Your Name'],
                      ['Email', 'email', 'you@example.com'],
                    ].map(([label, type, placeholder]) => (
                      <div key={label}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                    ))}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        rows={4}
                        placeholder="Type your message..."
                        className="w-full border border-blue-200 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Social Media */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Connect With Us</h4>
                  <div className="flex gap-6 text-sky-500 mt-3 text-3xl">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                      <MessageSquareMore className="hover:text-green-500" />
                    </a>
                    <a href="https://facebook.com/yourparish" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <Facebook className="hover:text-blue-600" />
                    </a>
                    <a href="https://instagram.com/yourparish" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <Instagram className="hover:text-pink-500" />
                    </a>
                    <a href="https://twitter.com/yourparish" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <Twitter className="hover:text-sky-600" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

