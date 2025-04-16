
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Brush, Globe, Code, Zap, BarChart, ChevronDown } from 'lucide-react';

import Navbar from '@/components/Navbar';
import ThreeDCube from '@/components/ThreeDCube';
import ServiceCard from '@/components/ServiceCard';
import PricingCard from '@/components/PricingCard';
import TestimonialCard from '@/components/TestimonialCard';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  // Refs for scroll behavior
  const servicesRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const testimonialRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  // Handle hash navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#services' && servicesRef.current) {
        servicesRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#about' && aboutRef.current) {
        aboutRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#pricing' && pricingRef.current) {
        pricingRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#testimonials' && testimonialRef.current) {
        testimonialRef.current.scrollIntoView({ behavior: 'smooth' });
      } else if (hash === '#contact' && contactRef.current) {
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Handle initial hash on page load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-radial from-cartly-purple/20 to-transparent opacity-30"></div>
          <div className="absolute top-20 right-0 w-96 h-96 bg-cartly-blue/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-cartly-purple/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-shadow">
                  Elevate Your <span className="text-gradient">Digital Presence</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-xl">
                  Transforming businesses with cutting-edge branding, SEO, and web development that drives real results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="btn-primary">
                    Get Started
                  </a>
                  <a 
                    href="#services" 
                    className="flex items-center justify-center px-8 py-3 font-medium border border-primary text-primary rounded-full hover:bg-primary/10 transition-colors"
                  >
                    Our Services
                  </a>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full lg:w-1/2 h-[400px] lg:h-[500px] relative">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full h-full"
              >
                <ThreeDCube className="animate-pulse-glow" />
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <a href="#services" className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors">
              <span className="text-sm mb-2">Scroll Down</span>
              <ChevronDown size={20} />
            </a>
          </motion.div>
        </div>
      </section>
      
      {/* Services Section */}
      <section ref={servicesRef} id="services" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our <span className="text-gradient">Services</span>
            </motion.h2>
            <motion.p 
              className="section-subheading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We deliver cutting-edge solutions with a results-driven approach, helping businesses thrive in the digital landscape.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ServiceCard 
              title="Branding & Identity" 
              description="Create a powerful, cohesive brand identity that resonates with your audience and sets you apart from competitors."
              icon={Brush}
              delay={0.1}
            />
            <ServiceCard 
              title="SEO & Digital Marketing" 
              description="Drive qualified traffic and increase conversions with data-driven digital marketing strategies and SEO optimization."
              icon={BarChart}
              delay={0.2}
            />
            <ServiceCard 
              title="Web Development" 
              description="Custom, responsive websites and web applications built with cutting-edge technologies for optimal performance."
              icon={Code}
              delay={0.3}
            />
            <ServiceCard 
              title="Content Strategy" 
              description="Engage your audience with compelling content that tells your story and drives meaningful engagement."
              icon={Globe}
              delay={0.4}
            />
            <ServiceCard 
              title="UI/UX Design" 
              description="Create intuitive, beautiful user experiences that delight customers and keep them coming back."
              icon={Zap}
              delay={0.5}
            />
            <ServiceCard 
              title="Tech Consulting" 
              description="Expert guidance on technology implementation and digital transformation for your business."
              icon={Cpu}
              delay={0.6}
            />
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section ref={aboutRef} id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-cartly-dark/50 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="section-heading">
                We Create <span className="text-gradient">Next-Gen</span> Digital Solutions
              </h2>
              <p className="text-lg mb-8 text-muted-foreground leading-relaxed">
                At Cartly, we're not just another digital agency. We're a team of forward-thinking innovators passionate about crafting digital experiences that push boundaries and deliver tangible results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glassmorphism p-6">
                  <h4 className="text-xl font-display font-bold mb-3">Our Mission</h4>
                  <p className="text-muted-foreground">
                    To empower businesses with cutting-edge digital solutions that drive growth and create lasting impact.
                  </p>
                </div>
                <div className="glassmorphism p-6">
                  <h4 className="text-xl font-display font-bold mb-3">Our Vision</h4>
                  <p className="text-muted-foreground">
                    To be the global leader in innovative digital transformations that reshape industries.
                  </p>
                </div>
              </div>
              
              <div className="mt-10">
                <a href="#contact" className="btn-primary">
                  Work With Us
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              className="w-full lg:w-1/2 glassmorphism p-8 relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/30 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold mb-6">Why Choose Cartly?</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Zap size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Cutting-Edge Technology</h4>
                      <p className="text-muted-foreground">
                        We leverage the latest technologies to deliver innovative, future-proof solutions.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <Brush size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Creative Excellence</h4>
                      <p className="text-muted-foreground">
                        Our award-winning design team creates visually stunning, high-converting experiences.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <BarChart size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Results-Driven Approach</h4>
                      <p className="text-muted-foreground">
                        We focus on measurable outcomes and continuous improvement to maximize ROI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section ref={pricingRef} id="pricing" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-40 left-20 w-96 h-96 bg-cartly-purple/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cartly-blue/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Simple, Transparent <span className="text-gradient">Pricing</span>
            </motion.h2>
            <motion.p 
              className="section-subheading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose the perfect plan for your business needs with our flexible pricing options.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <PricingCard
              title="Starter"
              description="Perfect for small businesses just getting started"
              price="$999"
              features={[
                { text: "Basic Brand Identity", included: true },
                { text: "Responsive Website (5 pages)", included: true },
                { text: "SEO Basics Setup", included: true },
                { text: "1 Month Support", included: true },
                { text: "Content Creation", included: false },
                { text: "Advanced Marketing", included: false },
                { text: "Conversion Optimization", included: false }
              ]}
              delay={0.1}
            />
            
            <PricingCard
              title="Growth"
              description="Ideal for growing businesses ready to scale"
              price="$2,499"
              features={[
                { text: "Complete Brand Identity", included: true },
                { text: "Custom Website (10+ pages)", included: true },
                { text: "Advanced SEO Optimization", included: true },
                { text: "3 Months Support & Maintenance", included: true },
                { text: "Content Strategy & Creation", included: true },
                { text: "Social Media Management", included: true },
                { text: "Conversion Optimization", included: false }
              ]}
              isPopular={true}
              delay={0.2}
            />
            
            <PricingCard
              title="Enterprise"
              description="For established businesses with complex needs"
              price="Custom"
              features={[
                { text: "Comprehensive Brand Strategy", included: true },
                { text: "Custom Web Application", included: true },
                { text: "Full-Scale SEO & Marketing", included: true },
                { text: "12 Months Support & Maintenance", included: true },
                { text: "Content Strategy & Creation", included: true },
                { text: "Comprehensive Digital Marketing", included: true },
                { text: "Advanced Analytics & Reporting", included: true }
              ]}
              ctaText="Contact Us"
              delay={0.3}
            />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact us</a> for a tailored quote.
            </p>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialRef} id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-cartly-dark/50 to-background relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              What Our <span className="text-gradient">Clients Say</span>
            </motion.h2>
            <motion.p 
              className="section-subheading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Don't just take our word for it. Here's what our clients have to say about working with Cartly.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <TestimonialCard
              quote="Cartly completely transformed our online presence. Their team delivered a website that not only looks stunning but has significantly increased our conversion rates."
              author="Sarah Johnson"
              role="CEO"
              company="TechStart Inc."
              rating={5}
              delay={0.1}
            />
            
            <TestimonialCard
              quote="We've worked with several agencies before, but the level of creativity and technical expertise at Cartly is unmatched. They truly understand how to build brands for the digital age."
              author="Michael Chen"
              role="Marketing Director"
              company="Nova Innovations"
              rating={5}
              delay={0.2}
            />
            
            <TestimonialCard
              quote="The SEO strategy developed by Cartly has dramatically improved our search rankings and driven a 200% increase in qualified leads. Their data-driven approach delivers real results."
              author="Jessica Williams"
              role="Operations Manager"
              company="Elevate Solutions"
              rating={5}
              delay={0.3}
            />
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section ref={contactRef} id="contact" className="py-20 md:py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-cartly-blue/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-40 right-10 w-96 h-96 bg-cartly-purple/20 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <motion.h2 
              className="section-heading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>
            <motion.p 
              className="section-subheading"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to transform your digital presence? Get in touch with our team to start the conversation.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
