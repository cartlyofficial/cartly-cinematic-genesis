
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export default function ServiceCard({ 
  title, 
  description, 
  icon: Icon,
  delay = 0 
}: ServiceCardProps) {
  return (
    <motion.div 
      className="glassmorphism p-6 relative overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700"></div>
      
      <div className="mb-6 p-4 inline-flex rounded-2xl bg-primary/10 text-primary">
        <Icon size={24} />
      </div>
      
      <h3 className="text-xl font-display font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
      
      <div className="mt-6">
        <a href="#contact" className="text-sm font-medium inline-flex items-center text-primary hover:underline">
          Learn more <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}
