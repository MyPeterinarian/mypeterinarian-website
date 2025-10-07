import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="py-20 px-4"
        style={{
          background: 'linear-gradient(to right, #1d6896, #22c0b6)',
          color: 'white'
        }}
      >
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 style={{ color: 'white' }} className="mb-6">
              Welcome to MyPeterinarian
            </h1>
            <p className="text-xl mb-8" style={{ opacity: 0.9 }}>
              The Pet Care Experts in Copenhagen
            </p>
            <p className="text-lg mb-8" style={{ opacity: 0.8 }}>
              Professional veterinary services, grooming, and pet care solutions for your beloved companions. 
              Run by experienced veterinarians dedicated to your pet's health and happiness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/booking" 
                className="text-center"
                style={{
                  backgroundColor: '#1d6896',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  display: 'inline-block'
                }}
              >
                Book an Appointment
              </Link>
              <Link 
                href="/services" 
                className="text-center"
                style={{
                  backgroundColor: 'white',
                  color: '#1d6896',
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '700',
                  display: 'inline-block'
                }}
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16" style={{ backgroundColor: 'white' }}>
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Veterinary Services */}
            <div 
              className="p-6 rounded-lg transition-shadow hover:shadow-lg"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <h3 className="mb-4">Veterinary Services</h3>
              <p className="mb-4" style={{ color: '#555555' }}>
                Comprehensive veterinary care from experienced professionals. 
                Health checks, vaccinations, treatments, and more.
              </p>
              <Link 
                href="/services/veterinary" 
                style={{ color: '#1d6896', fontWeight: '700' }}
                className="hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Grooming */}
            <div 
              className="p-6 rounded-lg transition-shadow hover:shadow-lg"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <h3 className="mb-4">Grooming Services</h3>
              <p className="mb-4" style={{ color: '#555555' }}>
                Professional grooming for dogs and cats. Keep your pet looking 
                and feeling their best with our expert groomers.
              </p>
              <Link 
                href="/services/grooming" 
                style={{ color: '#1d6896', fontWeight: '700' }}
                className="hover:underline"
              >
                Learn More →
              </Link>
            </div>

            {/* Pet Passport & Travel */}
            <div 
              className="p-6 rounded-lg transition-shadow hover:shadow-lg"
              style={{ border: '1px solid #e5e7eb' }}
            >
              <h3 className="mb-4">Pet Passport & Travel</h3>
              <p className="mb-4" style={{ color: '#555555' }}>
                Get your pet ready for international travel. Pet passports, 
                health certificates, and travel packages available.
              </p>
              <Link 
                href="/services/travel" 
                style={{ color: '#1d6896', fontWeight: '700' }}
                className="hover:underline"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-16 px-4"
        style={{ backgroundColor: '#1d6896', color: 'white' }}
      >
        <div className="container-custom text-center">
          <h2 className="mb-6" style={{ color: 'white' }}>
            Ready to Care for Your Pet?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ opacity: 0.9 }}>
            Book an appointment today and experience professional pet care from Copenhagen's trusted veterinarians.
          </p>
          <Link 
            href="/booking"
            style={{
              backgroundColor: 'white',
              color: '#1d6896',
              padding: '16px 32px',
              borderRadius: '8px',
              fontWeight: '700',
              fontSize: '1.125rem',
              display: 'inline-block'
            }}
          >
            Book Now
          </Link>
        </div>
      </section>
    </main>
  );
}