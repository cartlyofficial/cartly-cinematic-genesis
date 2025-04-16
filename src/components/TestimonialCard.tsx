
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  rating,
  delay = 0
}: TestimonialCardProps) {
  return (
    <motion.div
      className="glassmorphism p-6 sm:p-8 h-full flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
          />
        ))}
      </div>
      
      <blockquote className="flex-1">
        <p className="text-lg leading-relaxed italic mb-6">&ldquo;{quote}&rdquo;</p>
      </blockquote>
      
      <div className="mt-auto">
        <p className="font-bold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}, {company}</p>
      </div>
    </motion.div>
  );
}
