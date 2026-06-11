import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Filter, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'

const filters = ['All Projects', 'UX Design', 'Platform Design', 'Research']

const projects = [
  {
    id: 'virtual-onboarding',
    title: 'On-Demand Virtual Onboarding Platform',
    description: 'Replaced a costly third-party platform (VFairs) with a custom-built internal onboarding experience for CS leaders, achieving 90% task completion and 30% conversion lift.',
    tags: ['UX Design', 'Research', 'Platform Design'],
    image: '/images/projects/Onboarding_Platform.png',
    year: '2025',
    role: 'Sole UX Designer & Researcher',
    impact: '+30% conversion, 90% completion',
    metrics: [
      { label: 'Task Completion', value: '90%' },
      { label: 'Conversion Lift', value: '+30%' },
      { label: 'Cost Savings', value: 'Eliminated vendor fees' },
    ],
  },
  {
    id: 'caboodle',
    title: 'Caboodle — Design Asset Management Platform',
    description: 'Centralized design asset distribution for Amazon CS teams. Transformed a fragmented folder system into a self-service platform with team-based navigation, growing users from 800 to 5,200.',
    tags: ['UX Design', 'Platform Design', 'Research'],
    image: '/images/projects/Caboodle.png',
    year: '2025',
    role: 'Lead UX Designer',
    impact: '550% user growth, 81% download rate',
    metrics: [
      { label: 'User Growth', value: '800 → 5,200' },
      { label: 'Download Rate', value: '36% → 81%' },
      { label: 'Adoption', value: '+70%' },
    ],
  },
  {
    id: 'cs-discovery',
    title: 'CS Discovery — Leadership Development Platform',
    description: 'Research-driven UI improvements for Amazon CS\'s learning platform. Applied RICE prioritization to transform a static content repository into a role-aware, card-based learning experience.',
    tags: ['UX Design', 'Research', 'Platform Design'],
    image: '/images/projects/CS Discovery.png',
    year: '2026',
    role: 'UX Designer',
    impact: 'Engagement: 58% → 70%',
    metrics: [
      { label: 'Engagement', value: '58% → 70%' },
      { label: 'Framework', value: 'RICE Methodology' },
      { label: 'Methods', value: 'Interviews, Surveys, Focus Groups' },
    ],
  },
]

export function WorkHubContent() {
  const [activeFilter, setActiveFilter] = useState('All Projects')

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All Projects') return true
    return project.tags.includes(activeFilter)
  })

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              As a T-shaped designer, I bridge the gap between user needs and technical implementation.
              My approach combines deep UX research with hands-on frontend development, enabling me to
              deliver solutions that are both user-centered and technically feasible.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <span>UX Research</span>
              <span>•</span>
              <span>Platform Design</span>
              <span>•</span>
              <span>Design Systems</span>
              <span>•</span>
              <span>RICE Framework</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground mr-2" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <article className="bg-card rounded-lg border shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                    {/* Year Badge */}
                    <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium">
                      {project.year}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-grow">
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

                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-t border-b">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="text-center">
                          <p className="text-xs text-muted-foreground">{metric.label}</p>
                          <p className="text-sm font-semibold text-primary">{metric.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>{project.role}</span>
                      </div>

                      {/* Request Case Study CTA */}
                      <Link
                        to="/contact"
                        className="flex items-center justify-center gap-2 w-full rounded-md bg-primary/10 border border-primary/20 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                      >
                        <Lock className="h-3.5 w-3.5" />
                        <span>Request Full Case Study</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground">
                No projects found for the selected filter.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Case Study Access Note */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <Lock className="h-8 w-8 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Full Case Studies Available on Request
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Due to NDA and confidentiality agreements, detailed case studies including
              research findings, wireframes, and high-fidelity designs are shared on a
              request basis. Get in touch to discuss any project in detail.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
