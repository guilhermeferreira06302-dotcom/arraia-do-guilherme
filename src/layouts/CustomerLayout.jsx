
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export const CustomerLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-surface-container-lowest/80 backdrop-blur-md border-b border-outline-variant">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="text-headline-md text-primary font-bold tracking-tight">
              LuxeWash<span className="text-on-surface">Pro</span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-body-md text-on-surface font-medium hover:text-primary transition-colors">Services</Link>
              <Link to="/membership" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">Membership</Link>
              <Link to="/about" className="text-body-md text-on-surface-variant hover:text-primary transition-colors">About Us</Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/login" className="text-body-md text-on-surface font-medium hover:text-primary hidden sm:block">Sign In</Link>
            <Link to="/book">
              <Button>Book Now</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="bg-surface-container-low border-t border-outline-variant py-12">
        <div className="container flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h2 className="text-headline-md font-bold mb-4">LuxeWash Pro</h2>
            <p className="text-on-surface-variant max-w-sm">
              The ultimate detailing experience for your luxury vehicle. Precision, quality, and care in every drop.
            </p>
          </div>
          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="text-label-sm uppercase tracking-widest text-outline mb-2">Company</span>
              <Link to="/" className="text-on-surface hover:text-primary">Services</Link>
              <Link to="/about" className="text-on-surface hover:text-primary">Our Story</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-label-sm uppercase tracking-widest text-outline mb-2">Legal</span>
              <Link to="/terms" className="text-on-surface hover:text-primary">Terms</Link>
              <Link to="/privacy" className="text-on-surface hover:text-primary">Privacy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
