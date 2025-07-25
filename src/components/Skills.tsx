import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Zap, 
  Brain,
  Cpu,
  Globe,
  Layers,
  Sparkles,
  Target,
  Rocket
} from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React & Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 98 },
        { name: 'Framer Motion', level: 85 }
      ]
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Figma Design', level: 92 },
        { name: 'User Research', level: 88 },
        { name: 'Prototyping', level: 90 },
        { name: 'Design Systems', level: 85 }
      ]
    },
    {
      title: 'AI Integration',
      icon: Brain,
      color: 'from-emerald-500 to-teal-500',
      skills: [
        { name: 'Machine Learning', level: 88 },
        { name: 'AI APIs', level: 95 },
        { name: 'Automation', level: 92 },
        { name: 'Data Analysis', level: 85 }
      ]
    },
    {
      title: 'Performance',
      icon: Rocket,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'SEO Optimization', level: 90 },
        { name: 'Core Web Vitals', level: 88 },
        { name: 'Speed Optimization', level: 92 },
        { name: 'Analytics', level: 85 }
      ]
    }
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: '🔷' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind', icon: '🎨' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'AI/ML', icon: '🤖' },
    { name: 'Figma', icon: '🎯' }
  ];

  return (
    <section id="skills" className="py-20 relative">
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
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Expertise</span>
          </motion.div>
          
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient">Skills</span> & Technologies
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our hybrid approach combines cutting-edge AI capabilities with proven development 
            expertise to deliver exceptional results across all aspects of web development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:bg-card/70 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <motion.div
                  className={`bg-gradient-to-r ${category.color} p-3 rounded-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-xl font-heading font-semibold">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted/30 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold mb-8">
            Technologies We Master
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                className="bg-muted/30 hover:bg-primary/10 border border-border hover:border-primary/30 rounded-full px-6 py-3 flex items-center space-x-3 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <span className="text-2xl">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AI + Human Intelligence Showcase */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center space-x-8 mb-6">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Cpu className="w-8 h-8 text-primary" />
              <span className="text-xl font-heading font-bold">AI Power</span>
            </motion.div>
            
            <motion.div
              className="text-3xl"
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ⚡
            </motion.div>
            
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <Brain className="w-8 h-8 text-secondary" />
              <span className="text-xl font-heading font-bold">Human Touch</span>
            </motion.div>
          </div>
          
          <h4 className="text-2xl md:text-3xl font-heading font-bold mb-4">
            The Perfect <span className="text-gradient">Combination</span>
          </h4>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our unique methodology leverages AI for rapid development, testing, and optimization, 
            while human expertise ensures creativity, strategy, and that perfect user experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;