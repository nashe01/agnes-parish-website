
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Church Mission */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To be a welcoming Catholic community that celebrates the love of God, 
                grows in faith through worship and service, and shares the Gospel message 
                with all people. We strive to be disciples of Jesus Christ in our daily lives.
              </p>
            </CardContent>
          </Card>

          {/* Lenten Message */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Lenten Message 2024</h3>
              <p className="text-gray-300 leading-relaxed">
                "Remember that you are dust, and to dust you shall return." This Lent, 
                let us journey together in prayer, fasting, and almsgiving. May this season 
                of preparation lead us to a deeper relationship with Christ and a renewal 
                of our baptismal promises.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="bg-gray-800 border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-secondary mr-3" />
                  <span className="text-gray-300">123 Parish Street, City, State 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-secondary mr-3" />
                  <span className="text-gray-300">(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-secondary mr-3" />
                  <span className="text-gray-300">info@stagnesparish.org</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 St. Agnes Parish. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors">Terms of Service</a>
              <a href="#donations" className="text-gray-400 hover:text-secondary transition-colors">Donate</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
