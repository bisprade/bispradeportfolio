import { Link } from 'react-router-dom'
import { ArrowRight, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const featuredProjects = [
  {
    id: 'virtual-onboarding',
    title: 'On-Demand Virtual Onboarding Platform',
    description: 'Custom-built onboarding experience replacing VFairs — 90% task completion, 30% conversion lift.',
    tags: ['UX Design', 'Research', 'Platform Design'],
    image: '/images/projects/Onboarding_Platform.png',
  },
  {
    id: 'caboodle',
    title: 'Caboodle — Asset Management Platform',
    description: 'Centralized design asset hub for Amazon CS — 550% user growth, 81% download rate.',
    tags: ['UX Design', 'Platform Design', 'Research'],
    image: '/images/projects/Caboodle.png',
  },
  {
    id: 'cs-discovery',
    title: 'CS Discovery — Leadership Platform',
    description: 'Research-driven UI transformation using RICE framework — engagement from 58% to 70%.',
    tags: ['UX Design', 'Research', 'RICE Framework'],
    image: '/images/projects/CS Discovery.png',
  },
]

export function FeaturedProjects() {
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
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my latest work in UX design, user research, and platform design
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card rounded-lg border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                {/* Project Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <Link
                    to="/contact"
                    className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200"
                  >
                    <Lock className="h-3.5 w-3.5" />
                    <span>Request Case Study</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Work CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-medium transition-all hover:bg-accent hover:text-accent-foreground hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 group"
          >
            View All Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
