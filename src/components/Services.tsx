import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Globe,
  Layers,
  Target,
  Rocket,
  Brain,
  Cpu
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Custom web applications built with modern frameworks and AI-enhanced development processes.',
      features: [
        'React & Next.js Development',
        'TypeScript Implementation',
        'Performance Optimization',
        'AI-Powered Testing'
      ],
      price: 'From $2,999',
      gradient: 'from-blue-500 to-cyan-500',
      popular: false
    },
    {
      icon: Globe,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to maximize your conversion rates and user engagement.',
      features: [
        'Conversion-Optimized Design',
        'A/B Testing Setup',
        'Analytics Integration',
        'Mobile-First Approach'
      ],
      price: 'From $1,499',
      gradient: 'from-purple-500 to-pink-500',
      popular: true
    },
    {
      icon: Layers,
      title: 'Portfolio Websites',
      description: 'Stunning portfolio websites that showcase your work and personal brand with style and sophistication.',
      features: [
        'Custom Design System',
        'Interactive Animations',
        'CMS Integration',
        'SEO Optimization'
      ],
      price: 'From $1,999',
      gradient: 'from-emerald-500 to-teal-500',
      popular: false
    },
    {
      icon: Rocket,
      title: 'Full-Stack Solutions',
      description: 'Complete web applications with backend integration, databases, and AI-powered features.',
      features: [
        'Custom Backend Development',
        'Database Design & Setup',
        'AI/ML Integration',
        'Cloud Deployment'
      ],
      price: 'From $4,999',
      gradient: 'from-orange-500 to-red-500',
      popular: false
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your needs, target audience, and business goals to create a comprehensive project strategy.',
      icon: Target
    },
    {
      step: '02',
      title: 'AI-Enhanced Design',
      description: 'Our AI tools help us rapidly prototype and iterate on designs while maintaining human creativity.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Smart Development',
      description: 'We leverage AI for code generation, testing, and optimization while ensuring human oversight.',
      icon: Cpu
    },
    {
      step: '04',
      title: 'Launch & Optimize',
      description: 'We deploy your project and continuously optimize performance using AI-driven analytics.',
      icon: Rocket
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Services</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            What We <span className="text-gradient">Create</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to launch, we deliver exceptional web solutions that combine 
            cutting-edge AI technology with human creativity and expertise.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className={`relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:bg-card/70 transition-all duration-300 ${
                service.popular ? 'ring-2 ring-primary/50' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-1 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Most Popular
                </motion.div>
              )}

              {/* Service Header */}
              <div className="flex items-center space-x-4 mb-6">
                <motion.div
                  className={`bg-gradient-to-r ${service.gradient} p-4 rounded-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-2">
                    {service.title}
                  </h3>
                  <div className="text-2xl font-bold text-gradient">
                    {service.price}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (index * 0.1) + (featureIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:shadow-lg transition-all duration-300`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold mb-4">
              Our <span className="text-gradient">Process</span>
            </h3>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A streamlined workflow that combines AI efficiency with human expertise 
              to deliver exceptional results every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Step Number */}
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-secondary text-white rounded-full text-xl font-bold mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {step.step}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                >
                  <step.icon className="w-8 h-8 text-primary" />
                </motion.div>

                {/* Content */}
                <h4 className="text-xl font-heading font-bold mb-3">
                  {step.title}
                </h4>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-heading font-bold mb-4">
            Ready to Transform Your Digital Presence?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and discover how our AI-enhanced approach 
            can deliver exceptional results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </motion.button>
            <motion.button
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;