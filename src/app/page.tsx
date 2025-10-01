import Image from 'next/image';
import Button from '@/components/Button/Button';
import FeatureCard from '@/components/FeatureCard/FeatureCard';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Home from '@/components/Home/Home';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[var(--color-background-content)] text-white">
      <Header />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Home />
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            A modern music streaming platform built with React. Experience your
            favorite music like never before.
          </p>
        </div>

        {/* Product Image */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-2xl overflow-hidden border-2 border-blue-500/30 shadow-2xl shadow-blue-500/20">
            <Image
              src="/image.png"
              alt="RSync Platform Preview"
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
            Why Choose RSync?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon="🎵"
              title="High-Quality Audio"
              description="Stream your favorite tracks in crystal-clear quality with our advanced audio processing technology."
            />
            <FeatureCard
              icon="⚡"
              title="Lightning Fast"
              description="Built with Next.js and React for blazing-fast performance and seamless user experience."
            />
            <FeatureCard
              icon="🎨"
              title="Beautiful Interface"
              description="Modern, intuitive design that makes discovering and playing music a pleasure."
            />
            <FeatureCard
              icon="📱"
              title="Cross-Platform"
              description="Access your music library anywhere, on any device with our responsive design."
            />
            <FeatureCard
              icon="🔒"
              title="Secure & Private"
              description="Your data is protected with industry-standard security measures and encryption."
            />
            <FeatureCard
              icon="🚀"
              title="Built with React"
              description="Leveraging the power of React and modern web technologies for optimal performance."
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-900/30 to-blue-700/30 rounded-2xl p-12 border border-blue-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start your music journey?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Join thousands of users already enjoying RSync
          </p>
          <Button href="/login" variant="primary">
            Get Started Now
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
