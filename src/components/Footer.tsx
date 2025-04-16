
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cartly-dark py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-display font-bold text-gradient">Cartly</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Helping businesses create powerful digital identities with cutting-edge technology and creative solutions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm">
                <MapPin size={18} className="shrink-0 text-primary mt-0.5" />
                <span className="text-muted-foreground">123 Tech Lane, Digital City</span>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Mail size={18} className="text-primary" />
                <a href="mailto:cartlyofficial@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  cartlyofficial@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-sm">
                <Phone size={18} className="text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Branding & Identity
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  SEO & Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Content Strategy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-muted rounded-full hover:bg-primary/20 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
            <h3 className="font-display font-bold text-sm mb-2">Subscribe to our newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-muted text-sm rounded-l-md focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-primary text-primary-foreground px-3 py-2 text-sm rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-muted flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
            © {currentYear} Cartly. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
