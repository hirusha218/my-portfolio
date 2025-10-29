"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button"; 
import { Briefcase, Code2, Award, Github, Linkedin, Mail, CheckCircle, Sparkles, Target, Rocket } from "lucide-react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: Rocket,
      title: "Full-Stack Development",
      description: "End-to-end web and mobile solutions with modern frameworks",
    },
    {
      icon: Sparkles,
      title: "AI/ML Integration",
      description: "Smart features powered by cutting-edge AI technologies",
    },
    {
      icon: Target,
      title: "User-Centric Design",
      description: "Intuitive interfaces that users love to interact with",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="gradient-text">About Me</span>
              </h2>
            </motion.div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-secondary mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {/* Profile Card - Spans 1 column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:col-span-1"
            >
              <Card className="glass-card p-6 h-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="relative group mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                  <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-border/50">
                    <img
                      src="/WhatsApp_Image_2025-10-09_at_13.36.25_bc6ed6c7-removebg-preview.png"
                      alt="Hirusha profile"
                      className="h-full w-full object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-center">Chamodya Hirusha</h3>
                <p className="text-center text-muted-foreground mb-4">Full-Stack Developer</p>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs">
                    🇱🇰 Sri Lanka
                  </span>
                  <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs">
                    Available
                  </span>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                    <Briefcase className="h-5 w-5 mx-auto mb-1 text-primary" />
                    <div className="text-xl font-bold">1+</div>
                    <div className="text-xs text-muted-foreground">Years</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                    <Code2 className="h-5 w-5 mx-auto mb-1 text-accent" />
                    <div className="text-xl font-bold">10+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20">
                    <Award className="h-5 w-5 mx-auto mb-1 text-secondary" />
                    <div className="text-xl font-bold">100%</div>
                    <div className="text-xs text-muted-foreground">Quality</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex flex-col gap-2">
                  <Button size="sm" className="w-full glass-card glow-border" asChild>
                    <a href="https://github.com/hirusha218" target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full glass-card border-primary/50 hover:border-primary" asChild>
                    <a href="https://linkedin.com/in/hirusha218" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4 mr-2" /> LinkedIn
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="w-full glass-card border-green-500/50 hover:border-green-500" asChild>
                    <a href="https://wa.me/94766094691" target="_blank" rel="noopener noreferrer">
                      <Briefcase className="h-4 w-4 mr-2" /> WhatsApp
                    </a>
                  </Button>
                  <Button size="sm" variant="ghost" className="w-full glass-card" asChild>
                    <a href="mailto:chamodyahirusha21@gmail.com">
                      <Mail className="h-4 w-4 mr-2" /> Email
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Bio & Highlights - Spans 2 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Bio */}
              <Card className="glass-card p-8 border-2 border-border/50 hover:border-primary/30 transition-all duration-300">
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-3">
                  <span className="h-1 w-12 bg-gradient-to-r from-primary to-accent rounded-full" />
                  My Story
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg">
                    Hi! I'm <span className="text-foreground font-semibold">Chamodya Hirusha</span>, a passionate Full-Stack and Mobile App Developer based in Sri Lanka. 
                    I specialize in building modern, scalable applications that solve real-world problems.
                  </p>
                  <p>
                    With expertise spanning across <span className="text-primary font-medium">React, Node.js, React Native,</span> and 
                    <span className="text-accent font-medium"> AI/ML technologies</span>, I bring ideas to life through clean code and thoughtful design. 
                    My approach focuses on creating seamless user experiences while maintaining high performance and code quality.
                  </p>
                  <p>
                    I believe in continuous learning and staying ahead of the curve. Whether it's implementing AI features, 
                    optimizing database queries, or crafting pixel-perfect UIs, I'm committed to delivering excellence in every project.
                  </p>
                </div>

                {/* Key Points */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {[
                    "🎯 Full-stack web & mobile development",
                    "🤖 AI/ML integration & automation",
                    "🚀 Performance optimization expert",
                    "♿ Accessibility-first approach",
                    "🔧 Clean, maintainable code",
                    "📱 Cross-platform solutions",
                  ].map((point, idx) => (
                    <motion.div
                      key={point}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all"
                    >
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-sm font-medium">{point}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>

              {/* Highlights */}
              <div className="grid md:grid-cols-3 gap-4">
                {highlights.map((highlight, idx) => {
                  const Icon = highlight.icon;
                  return (
                    <motion.div
                      key={highlight.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.9 + idx * 0.1 }}
                    >
                      <Card className="glass-card p-6 h-full hover:-translate-y-1 transition-all duration-300 group border-2 border-border/50 hover:border-primary/30">
                        <div className="mb-4">
                          <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:from-primary/30 group-hover:to-accent/30 transition-all">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                        </div>
                        <h4 className="font-bold mb-2 text-lg">{highlight.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {highlight.description}
                        </p>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
