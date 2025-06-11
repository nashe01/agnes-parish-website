import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, MessageSquareMore } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">We're here to serve and welcome you</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            {/* Parish Office Card */}
            {/* ... (same content as before) */}

            {/* Office Hours Card */}
            {/* ... (same content as before) */}

            {/* Parish Staff Card */}
            {/* ... (same content as before) */}
          </div>

          {/* Map, Directions, Email Form and Social Section */}
          <div>
            <Card className="shadow-lg h-full">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Directions</h3>
                  <div className="rounded-lg overflow-hidden h-96 mb-6">
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

                  <h4 className="font-semibold text-gray-900 mb-3">Getting Here</h4>
                  <div className="space-y-2 text-gray-600 text-sm mb-6">
                    <p>Our parish is conveniently located in the heart of Chitungwiza City, easily accessible by public transport and car.</p>
                    <p>For detailed directions, please use the map above or contact us directly.</p>
                  </div>

                  {/* Email Form */}
                  <h4 className="font-semibold text-gray-900 mb-3">Send Us a Message</h4>
                  <form className="space-y-4 mb-8">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Name</label>
                      <input
                        type="text"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Email</label>
                      <input
                        type="email"
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea
                        rows={4}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-sky-600 text-white rounded-md hover:bg-sky-700 transition"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                {/* Social Media Section */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Connect With Us</h4>
                  <p className="text-gray-600 text-sm mb-3">
                    Reach out anytime or follow us online to stay updated!
                  </p>
                  <a
                    href="mailto:info@stagnesparish.org"
                    className="inline-block text-primary hover:underline text-sm font-medium mb-4"
                  >
                    📩 info@stagnesparish.org
                  </a>
                  <div className="flex gap-4 text-sky-500 mt-2">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                      <MessageSquareMore className="w-6 h-6 hover:text-sky-700" />
                    </a>
                    <a href="https://facebook.com/yourparish" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <Facebook className="w-6 h-6 hover:text-sky-700" />
                    </a>
                    <a href="https://instagram.com/yourparish" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <Instagram className="w-6 h-6 hover:text-sky-700" />
                    </a>
                    <a href="https://twitter.com/yourparish" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <Twitter className="w-6 h-6 hover:text-sky-700" />
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


