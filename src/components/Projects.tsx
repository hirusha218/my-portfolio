"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "BCD_AS_BidStack",
    description:
      "A bidding and task-posting platform where workers can bid for listed jobs. Includes real-time updates and secure user authentication.",
    tech: ["Java", "Hibernate", "Firebase"],
    gradient: "from-primary/20 to-cyan-500/20",
    github: "https://github.com/hirusha218/BCD_AS_BidStack",
    demo: "#",
    image: "",
  },
  {
    title: "expo-app-BunyChata",
    description:
      "A React Native mobile app for chatting with real-time messaging, media sharing, and Firebase authentication.",
    tech: ["React Native", "Expo", "TypeScript", "MySQL"],
    gradient: "from-secondary/20 to-purple-500/20",
    github: "https://github.com/hirusha218/expo-app-BunyChata",
    demo: "#",
    image: "",
  },
  {
    title: "android-project-SkillLink",
    description:
      "A job-matching app connecting skilled workers with customers. Features profile management, job search, and direct contact options.",
    tech: ["Java", "Firebase", "Android Studio"],
    gradient: "from-accent/20 to-emerald-500/20",
    github: "https://github.com/hirusha218/android-project-SkillLink",
    demo: "#",
    image: "/Skill_link_app.png",
  },
  {
    title: "mta_sa_cyber_yakku_web",
    description:
      "A community website with member authentication, role-based access, and modern UI designed for online gaming communities.",
    tech: ["React", "Next.js", "Shadcn UI"],
    gradient: "from-orange-500/20 to-red-500/20",
    github: "https://github.com/hirusha218/mta_sa_cyber_yakku_web",
    demo: "#",
    image: "/cyber_yakkku_mta.png",
  },
  {
    title: "Bank_System",
    description:
      "Core banking system simulation including user accounts, secure login, transaction management, and admin dashboard.",
    tech: ["Java", "Hibernate", "Bootstrap"],
    gradient: "from-pink-500/20 to-rose-500/20",
    github: "https://github.com/hirusha218/Bank_System",
    demo: "#",
    image: "",
  },
  {
    title: "admin-app-SL-Admin-app",
    description:
      "Administration dashboard for SkillLink with user management, job analytics, job approvals, and Firebase-powered backend.",
    tech: ["React", "Android", "Firebase"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    github: "https://github.com/hirusha218/admin-app-SL-Admin-app",
    demo: "#",
    image: "/admin-app-SL-Admin-app.png",
  },
];


const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16" />

          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={item}>
                <Card className="glass-card p-6 h-full flex flex-col">
                  <div className={`aspect-video rounded-lg mb-4 flex items-center justify-center overflow-hidden bg-transparent`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-6xl opacity-50">View Github</div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 glow-text">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 text-xs rounded-full border border-border/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="w-full border-primary/50 hover:border-primary" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                    {(project.title === "BCD_AS_BidStack" || project.title === "expo-app-BunyChata" || project.title === "Bank_System") && (
                      <Button variant="outline" size="sm" className="border-primary/50 hover:border-primary" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
