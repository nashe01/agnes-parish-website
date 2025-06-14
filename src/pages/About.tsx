
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import LeadershipSection from '@/components/about/LeadershipSection';
import HistoryCards from '@/components/about/HistoryCards';
import SectionsDisplay from '@/components/about/SectionsDisplay';
import GuildsDisplay from '@/components/about/GuildsDisplay';

const About = () => {
  const navigate = useNavigate();

  /* ───── page should open at top ───── */
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ───── extra styles for scrolling tracks ───── */}
      <style>{`
        @keyframes scroll-left-50 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-left-35 {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left-50 {
          animation: scroll-left-50 15s linear infinite;
        }
        .animate-scroll-left-35 {
          animation: scroll-left-35 35s linear infinite;
        }
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      {/* ───── MAIN ───── */}
      <main className="pt-20">

        {/* Back to Home */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center bg-gradient-to-r from-sky-500 to-sky-800 hover:from-sky-600 hover:to-sky-900 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back&nbsp;to&nbsp;Home
          </button>
        </div>

        {/* ───── LEADERSHIP ───── */}
        <LeadershipSection />

        {/* ───── HISTORY CARDS ───── */}
        <HistoryCards />

        {/* ───── SECTIONS ───── */}
        <SectionsDisplay />

        {/* ───── GUILDS ───── */}
        <GuildsDisplay />
      </main>
    </div>
  );
};

export default About;
