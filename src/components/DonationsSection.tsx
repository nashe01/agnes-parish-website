
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Church, Users, BookOpen } from 'lucide-react';
import { SectionFadeIn } from './SectionFadeIn';

const DonationsSection = () => {
  const donationOptions = [
    {
      amount: "$25",
      description: "Support weekly parish activities",
      popular: false
    },
    {
      amount: "$50",
      description: "Help fund community outreach programs",
      popular: true
    },
    {
      amount: "$100",
      description: "Contribute to facility maintenance",
      popular: false
    },
    {
      amount: "Custom",
      description: "Choose your own amount",
      popular: false
    }
  ];

  const fundingAreas = [
    {
      icon: Church,
      title: "Church Maintenance",
      description: "Keeping our sacred space beautiful and functional for all parishioners",
      percentage: 35
    },
    {
      icon: Users,
      title: "Community Outreach",
      description: "Supporting local families in need and community service programs",
      percentage: 30
    },
    {
      icon: BookOpen,
      title: "Religious Education",
      description: "Funding programs for children, youth, and adult faith formation",
      percentage: 25
    },
    {
      icon: Heart,
      title: "Special Projects",
      description: "Supporting special initiatives and emergency needs as they arise",
      percentage: 10
    }
  ];

  return (
    <section id="donations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Support Our Parish</h2>
          <p className="text-xl text-gray-600">Your generosity helps us serve God and our community</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Options */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Donation</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {donationOptions.map((option, index) => (
                  <SectionFadeIn key={index} direction="up" delay={index * 0.08}>
                    <Button
                      variant={option.popular ? "default" : "outline"}
                      className={`h-auto p-4 flex flex-col items-center ${
                        option.popular 
                          ? "bg-secondary hover:bg-secondary/90 text-white" 
                          : "border-secondary text-secondary hover:bg-secondary hover:text-white"
                      }`}
                    >
                      <span className="text-lg font-bold mb-1">{option.amount}</span>
                      <span className="text-xs text-center leading-tight">{option.description}</span>
                      {option.popular && (
                        <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                          Popular
                        </span>
                      )}
                    </Button>
                  </SectionFadeIn>
                ))}
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-900">Payment Methods Available:</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <SectionFadeIn direction="up" delay={0}>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">
                        EcoCash
                      </div>
                    </div>
                  </SectionFadeIn>
                  <SectionFadeIn direction="up" delay={0.08}>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium">
                        ZipIt
                      </div>
                    </div>
                  </SectionFadeIn>
                  <SectionFadeIn direction="up" delay={0.16}>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded text-sm font-medium">
                        Bank Transfer
                      </div>
                    </div>
                  </SectionFadeIn>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Proceed to Secure Payment
                  </Button>
                </div>
                
                <p className="text-xs text-gray-500 text-center">
                  All donations are processed securely. You will receive a receipt via email.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Impact Information */}
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Where Your Donations Go</h3>
              <div className="space-y-6">
                {fundingAreas.map((area, index) => (
                  <SectionFadeIn key={index} direction="up" delay={index * 0.08}>
                    <div className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-start mb-3">
                        <area.icon className="w-6 h-6 text-secondary mr-3 mt-1" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-1">{area.title}</h4>
                          <p className="text-gray-600 text-sm mb-2">{area.description}</p>
                          <div className="flex items-center">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                              <div 
                                className="bg-secondary h-2 rounded-full transition-all duration-500"
                                style={{ width: `${area.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium text-gray-700">{area.percentage}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SectionFadeIn>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-3 gap-6">
          <SectionFadeIn direction="up" delay={0}>
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Tax Deductible</h3>
                <p className="text-gray-600 text-sm">All donations are tax-deductible. You will receive a receipt for your records.</p>
              </CardContent>
            </Card>
          </SectionFadeIn>

          <SectionFadeIn direction="up" delay={0.08}>
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Recurring Giving</h3>
                <p className="text-gray-600 text-sm">Set up monthly donations to provide consistent support for our parish mission.</p>
              </CardContent>
            </Card>
          </SectionFadeIn>

          <SectionFadeIn direction="up" delay={0.16}>
            <Card className="text-center shadow-lg">
              <CardContent className="p-6">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Church className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Special Collections</h3>
                <p className="text-gray-600 text-sm">Support special diocesan collections and emergency relief efforts throughout the year.</p>
              </CardContent>
            </Card>
          </SectionFadeIn>
        </div>
      </div>
    </section>
  );
};

export default DonationsSection;
