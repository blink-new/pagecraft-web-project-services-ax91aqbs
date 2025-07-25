import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Cpu, Users, Zap, Target, Award } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'Human Intelligence',
      description: 'Creative problem-solving, intuitive design, and strategic thinking that only humans can provide.'
    },
    {
      icon: Cpu,
      title: 'AI Precision',
      description: 'Lightning-fast development, data-driven optimization, and consistent quality at scale.'
    },
    {
      icon: Users,
      title: 'Collaborative Approach',
      description: 'Seamless integration of AI capabilities with human expertise for superior results.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'AI Availability' },
    { number: '3x', label: 'Faster Delivery' }
  ];

  return (
    <section id="about" className="py-20 relative">
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
            className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">About Pagecraft</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            The Perfect <span className="text-gradient">Fusion</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're pioneering the future of web development by combining the limitless potential 
            of artificial intelligence with the irreplaceable creativity of human intelligence.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">
              Redefining Web Development
            </h3>
            
            <p className="text-lg text-muted-foreground mb-6">
              At Pagecraft, we believe the future belongs to those who can harness both artificial 
              and human intelligence. Our unique approach combines AI's computational power with 
              human creativity to deliver web solutions that are not just functional, but extraordinary.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Every project benefits from AI-driven optimization, automated testing, and rapid 
              prototyping, while maintaining the human touch that makes designs truly resonate 
              with your audience.
            </p>

            <div className="flex items-center space-x-4">
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Target className="w-5 h-5 text-primary" />
                <span className="font-semibold">Mission-Driven</span>
              </motion.div>
              <motion.div
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="w-5 h-5 text-secondary" />
                <span className="font-semibold">Award-Winning</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Features */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="bg-primary/10 p-3 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-heading font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl md:text-4xl font-heading font-bold text-gradient mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;