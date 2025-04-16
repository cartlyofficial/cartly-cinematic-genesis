
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: PricingFeature[];
  isPopular?: boolean;
  delay?: number;
  ctaText?: string;
}

export default function PricingCard({
  title,
  description,
  price,
  features,
  isPopular = false,
  delay = 0,
  ctaText = "Get Started"
}: PricingCardProps) {
  return (
    <motion.div
      className={`glassmorphism p-8 flex flex-col h-full ${
        isPopular ? 'border-primary/30 ring-2 ring-primary/20' : ''
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      {isPopular && (
        <div className="py-1 px-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide rounded-full inline-block self-start mb-4">
          Most Popular
        </div>
      )}
      
      <h3 className="text-xl font-display font-bold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      
      <div className="mt-6 mb-6">
        <span className="text-4xl font-display font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground">/mo</span>}
      </div>
      
      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <span className={`mr-2 rounded-full p-1 ${feature.included ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
              <Check size={16} />
            </span>
            <span className={feature.included ? '' : 'text-muted-foreground'}>{feature.text}</span>
          </li>
        ))}
      </ul>
      
      <a 
        href="#contact" 
        className={`text-center rounded-lg py-3 px-4 font-medium transition-all ${
          isPopular 
            ? 'bg-gradient-to-r from-cartly-purple to-cartly-blue text-white hover:shadow-lg'
            : 'border border-primary/50 hover:bg-primary/10'
        }`}
      >
        {ctaText}
      </a>
    </motion.div>
  );
}
