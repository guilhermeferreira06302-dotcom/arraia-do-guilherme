
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent, CardFooter } from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';

const SERVICES = [
  {
    id: 's1',
    name: 'Exterior Wash',
    description: 'A meticulous hand wash using pH-neutral soap, followed by a streak-free dry and tire dressing.',
    duration: '45 min',
    price: 'R$50',
    image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's2',
    name: 'Interior Cleaning',
    description: 'Deep vacuuming, leather conditioning, and thorough dashboard detailing for a showroom finish.',
    duration: '2 hours',
    price: 'R$120',
    image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 's3',
    name: 'Paint Protection',
    description: 'Professional ceramic coating application offering months of protection and unmatched gloss.',
    duration: '4 hours',
    price: 'R$400',
    image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="bg-surface-container-low border-b border-outline-variant py-24 px-4">
        <div className="container flex flex-col items-center text-center gap-6 max-w-3xl">
          <span className="text-label-sm bg-primary/10 text-primary px-3 py-1 rounded-full uppercase tracking-widest font-bold">
            Premium Care
          </span>
          <h1 className="text-display text-on-surface">
            Precision Detailing for <br /> Discerning Owners
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Book your exclusive car wash experience with LuxeWash Pro. We combine cutting-edge techniques with meticulous attention to detail.
          </p>
          
          <div className="flex items-center gap-4 mt-4">
            <Button size="lg" onClick={() => navigate('/book')} style={{ padding: '16px 32px', fontSize: '18px' }}>
              Schedule a Wash
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth'})} style={{ padding: '16px 32px', fontSize: '18px' }}>
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-headline-lg mb-2">Our Signature Services</h2>
            <p className="text-on-surface-variant">Select a base package to start your booking.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map(service => (
            <Card key={service.id} className="flex flex-col hover:border-primary transition-colors cursor-pointer group" onClick={() => navigate(`/service/${service.id}`)}>
              <div 
                className="h-48 bg-surface-container-high bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-headline-md text-on-surface">{service.name}</h3>
                  <span className="text-body-lg font-bold text-primary">{service.price}</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-on-surface-variant">
                  <span className="text-label-sm uppercase tracking-wider">{service.duration}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-0">
                <p className="text-body-md text-on-surface-variant">
                  {service.description}
                </p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={(e) => {
                  e.stopPropagation();
                  navigate('/book');
                }}>
                  Add to Booking
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};
