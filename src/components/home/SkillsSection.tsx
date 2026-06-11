'use client'

import { motion } from 'framer-motion'
import { 
  Palette, 
  Search, 
  Layout, 
  Users, 
  Accessibility, 
  Code, 
  Cpu, 
  Zap,
  Heart,
  MessageSquare,
  Target
} from 'lucide-react'

const uxSkills = [
  { name: 'User Research', icon: Search },
  { name: 'Information Architecture', icon: Layout },
  { name: 'Wireframing & Prototyping', icon: Palette },
  { name: 'Usability Testing', icon: Users },
  { name: 'Design Systems', icon: Target },
  { name: 'Accessibility (WCAG 2.1 AA)', icon: Accessibility }
]

const tShapeSkills = [
  { name: 'JavaScript', icon: Code },
  { name: 'CSS Frameworks', icon: Palette },
  { name: 'React', icon: Cpu },
  { name: 'Component Libraries', icon: Layout },
  { name: 'Performance Optimization', icon: Zap },
  { name: 'Code Implementation', icon: Code }
]

const leadershipSkills = [
  { name: 'Mentoring Designers', icon: Heart },
  { name: 'Cross-functional Collaboration', icon: Users },
  { name: 'Stakeholder Management', icon: MessageSquare }
]

export function SkillsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep UX design expertise combined with frontend development skills for complete product ownership
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* UX Design Core */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UX Design Core</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Deep expertise in user-centered design methodologies
              </p>
            </div>

            <div className="space-y-4">
              {uxSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border hover:shadow-sm transition-shadow"
                  >
                    <Icon className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* T-Shape Advantage */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">T-Shape Advantage</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Frontend development skills enabling seamless design-to-code collaboration
              </p>
            </div>

            <div className="space-y-4">
              {tShapeSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border hover:shadow-sm transition-shadow"
                  >
                    <Icon className="h-5 w-5 text-accent-foreground flex-shrink-0" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Leadership */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-secondary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Mentorship & Leadership</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Experience leading teams and mentoring the next generation of designers
              </p>
            </div>

            <div className="space-y-4">
              {leadershipSkills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-card border hover:shadow-sm transition-shadow"
                  >
                    <Icon className="h-5 w-5 text-secondary-foreground flex-shrink-0" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </motion.div>
                )
              })}
            </div>

            {/* Visual Design Foundation */}
            <div className="pt-6 border-t">
              <h4 className="font-semibold mb-3 text-sm text-muted-foreground uppercase tracking-wider">
                Visual Design Foundation
              </h4>
              <div className="flex flex-wrap gap-2">
                {['Visual Systems', 'Motion Design', 'Communication Design'].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
