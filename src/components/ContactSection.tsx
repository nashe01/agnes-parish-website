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
            <Card className="shadow-lg">
              <CardContent className="p-8">
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

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-secondary mr-3" />
                  <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Monday - Thursday</span>
                    <span className="text-black">9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Friday</span>
                    <span className="text-black">9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Saturday</span>
                    <span className="text-black">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-900">Sunday</span>
                    <span className="text-black">Closed</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Parish Staff</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900">Fr. Michael Rodriguez</h4>
                    <p className="text-secondary">Pastor</p>
                    <p className="text-gray-600 text-sm">pastor@stagnesparish.org</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Deacon John Smith</h4>
                    <p className="text-secondary">Permanent Deacon</p>
                    <p className="text-gray-600 text-sm">deacon@stagnesparish.org</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Mary Johnson</h4>
                    <p className="text-secondary">Parish Administrator</p>
                    <p className="text-gray-600 text-sm">admin@stagnesparish.org</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">David Wilson</h4>
                    <p className="text-secondary">Music Director</p>
                    <p className="text-gray-600 text-sm">music@stagnesparish.org</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map and Social Section */}
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
                    <p>
                      Our parish is conveniently located in the heart of Chitungwiza City, easily accessible by public transport and car.
                    </p>
                    <p>
                      For detailed directions, please use the map above or contact us directly.
                    </p>
                  </div>
                </div>

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
                  <div className="flex gap-4 text-gray-600 mt-2">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                      <MessageSquareMore className="w-5 h-5 hover:text-green-500" />
                    </a>
                    <a href="https://facebook.com/yourparish" target="_blank" rel="noopener noreferrer" title="Facebook">
                      <Facebook className="w-5 h-5 hover:text-blue-600" />
                    </a>
                    <a href="https://instagram.com/yourparish" target="_blank" rel="noopener noreferrer" title="Instagram">
                      <Instagram className="w-5 h-5 hover:text-pink-500" />
                    </a>
                    <a href="https://twitter.com/yourparish" target="_blank" rel="noopener noreferrer" title="Twitter">
                      <Twitter className="w-5 h-5 hover:text-sky-500" />
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

