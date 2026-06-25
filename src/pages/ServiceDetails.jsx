
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

// Mock data (would be fetched from an API in a real app)
const SERVICES = {
  's1': {
    id: 's1',
    name: 'Exterior Wash',
    description: 'A meticulous hand wash using pH-neutral soap, followed by a streak-free dry and tire dressing.',
    duration: '45 min',
    price: 'R$50',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Removes surface dirt and grime safely',
      'Prevents swirl marks using two-bucket method',
      'Leaves a glossy finish',
      'Tires dressed for a wet look'
    ]
  },
  's2': {
    id: 's2',
    name: 'Interior Cleaning',
    description: 'Deep vacuuming, leather conditioning, and thorough dashboard detailing for a showroom finish.',
    duration: '2 hours',
    price: 'R$120',
    image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Eliminates odors and dust',
      'Restores leather suppleness',
      'UV protection for dashboard and plastics',
      'Streak-free interior glass'
    ]
  },
  's3': {
    id: 's3',
    name: 'Paint Protection',
    description: 'Professional ceramic coating application offering months of protection and unmatched gloss.',
    duration: '4 hours',
    price: 'R$400',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    benefits: [
      'Hydrophobic barrier repels water and dirt',
      'Protects against UV rays and oxidation',
      'Deep, mirror-like gloss',
      'Easier maintenance washes'
    ]
  }
};

export const ServiceDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const service = SERVICES[id];

  if (!service) {
    return (
      <div className="container py-24 text-center">
        <h1 className="text-headline-lg">Service Not Found</h1>
        <Button className="mt-8" onClick={() => navigate('/')}>Back to Services</Button>
      </div>
    );
  }

  return (
    <div className="container py-8 max-w-5xl">
      {/* Breadcrumb */}
      <button 
        onClick={() => navigate('/')}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary mb-8 transition-colors font-medium text-sm"
      >
        <span className="material-symbols-outlined text-[18px]">arrow_back</span>
        Back to Services
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div className="flex flex-col gap-4">
          <div 
            className="w-full aspect-[4/3] bg-surface-container-high rounded-2xl bg-cover bg-center shadow-card border border-outline-variant"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="grid grid-cols-3 gap-4">
            <div className="aspect-square bg-surface-container-high rounded-xl bg-cover bg-center opacity-80 hover:opacity-100 cursor-pointer transition-opacity border border-outline-variant" style={{ backgroundImage: `url(${service.image})` }} />
            <div className="aspect-square bg-surface-container-high rounded-xl bg-cover bg-center opacity-80 hover:opacity-100 cursor-pointer transition-opacity border border-outline-variant" style={{ backgroundImage: `url(${service.image})` }} />
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col">
          <span className="text-label-sm uppercase tracking-widest text-primary font-bold mb-3">Premium Detail</span>
          <h1 className="text-display mb-4">{service.name}</h1>
          <p className="text-body-lg text-on-surface-variant mb-8">
            {service.description}
          </p>

          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant mb-8 flex items-center justify-between shadow-card">
            <div className="flex flex-col">
              <span className="text-label-sm text-on-surface-variant mb-1 uppercase tracking-wide">Estimated Time</span>
              <span className="text-headline-md font-semibold">{service.duration}</span>
            </div>
            <div className="w-[1px] h-12 bg-outline-variant/50"></div>
            <div className="flex flex-col text-right">
              <span className="text-label-sm text-on-surface-variant mb-1 uppercase tracking-wide">Base Price</span>
              <span className="text-headline-md font-bold text-primary">{service.price}</span>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-headline-md mb-6">What's Included</h3>
            <ul className="flex flex-col gap-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                  <span className="text-body-md text-on-surface">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto">
            <Button 
              size="lg" 
              className="w-full shadow-inner-btn" 
              style={{ padding: '16px 24px', fontSize: '18px' }}
              onClick={() => navigate('/book')}
            >
              Add to Cart & Continue Booking
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
