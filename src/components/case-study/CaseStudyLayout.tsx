import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Users, Target, Wrench } from 'lucide-react'

interface CaseStudyProject {
  id: string
  title: string
  subtitle: string
  hero: {
    image: string
    alt: string
  }
  overview: {
    challenge: string
    role: string
    timeline: string
    team: string
    impact: string
    tools: string[]
  }
  sections: Array<{
    id: string
    title: string
    content: Array<{
      type: 'text' | 'list' | 'quote' | 'code' | 'metrics'
      title?: string
      content?: string
      language?: string
      author?: string
      items?: string[] | Array<{ label: string; value: string; description: string }>
    }>
    images?: Array<{
      src: string
      alt: string
      caption: string
    }>
  }>
  nextProject: {
    title: string
    href: string
    image: string
  }
}

export function CaseStudyLayout({ project }: { project: CaseStudyProject }) {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute top-8 left-8 z-10">
          <Link 
            to="/work"
            className="inline-flex items-center gap-2 rounded-lg bg-background/90 backdrop-blur-sm px-4 py-2 text-sm font-medium transition-colors hover:bg-background"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>
        </div>
        
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={project.hero.image}
            alt={project.hero.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>
        
        <div className="container py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {project.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 border-b">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-3 gap-8"
            >
              {/* Challenge */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <Target className="h-6 w-6 text-primary" />
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.overview.challenge}
                  </p>
                </div>
              </div>

              {/* Project Details */}
              <div className="space-y-6">
                <div className="bg-card rounded-lg border p-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">Timeline & Role</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-muted-foreground">My Role</span>
                      <p className="font-medium">{project.overview.role}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm text-muted-foreground">Timeline</span>
                      <p className="font-medium">{project.overview.timeline}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        Team
                      </span>
                      <p className="font-medium">{project.overview.team}</p>
                    </div>
                    
                    <div>
                      <span className="text-sm text-muted-foreground">Impact</span>
                      <p className="font-medium text-primary">{project.overview.impact}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card rounded-lg border p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Wrench className="h-4 w-4" />
                    <span className="font-medium">Tools</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.overview.tools.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study Sections */}
      <div className="py-16">
        <div className="container max-w-4xl mx-auto space-y-20">
          {project.sections.map((section, sectionIndex) => (
            <motion.section
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold">
                {section.title}
              </h2>
              
              <div className="space-y-8">
                {section.content.map((content, contentIndex) => (
                  <div key={contentIndex}>
                    {content.type === 'text' && (
                      <p className="text-muted-foreground leading-relaxed">
                        {content.content}
                      </p>
                    )}
                    
                    {content.type === 'list' && (
                      <div>
                        {content.title && (
                          <h3 className="font-semibold mb-3">{content.title}</h3>
                        )}
                        <ul className="space-y-2">
                          {(content.items as string[])?.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {content.type === 'quote' && (
                      <blockquote className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                        <p className="text-lg italic text-muted-foreground mb-2">
                          {content.content}
                        </p>
                        {content.author && (
                          <cite className="text-sm font-medium">
                            — {content.author}
                          </cite>
                        )}
                      </blockquote>
                    )}
                    
                    {content.type === 'code' && (
                      <div className="bg-muted/50 rounded-lg overflow-hidden">
                        {content.title && (
                          <div className="px-4 py-2 border-b bg-muted">
                            <span className="text-sm font-medium">{content.title}</span>
                          </div>
                        )}
                        <pre className="p-4 overflow-x-auto">
                          <code className="text-sm font-mono">
                            {content.content}
                          </code>
                        </pre>
                      </div>
                    )}
                    
                    {content.type === 'metrics' && (
                      <div>
                        {content.title && (
                          <h3 className="font-semibold mb-6">{content.title}</h3>
                        )}
                        <div className="grid sm:grid-cols-2 gap-4">
                          {(content.items as Array<{ label: string; value: string; description: string }>)?.map((metric, index) => (
                            <div key={index} className="bg-card rounded-lg border p-4 text-center">
                              <div className="text-2xl font-bold text-primary mb-1">
                                {metric.value}
                              </div>
                              <div className="font-medium mb-1">
                                {metric.label}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {metric.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Section Images */}
                {section.images && section.images.length > 0 && (
                  <div className="space-y-6">
                    {section.images.map((image, imageIndex) => (
                      <figure key={imageIndex} className="space-y-3">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-muted">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <figcaption className="text-sm text-muted-foreground text-center">
                          {image.caption}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>

      {/* Next Project */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl font-bold mb-8">Next Case Study</h2>
            
            <Link to={project.nextProject.href} className="group block">
              <div className="bg-card rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={project.nextProject.image}
                    alt={project.nextProject.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all duration-200">
                    <span>{project.nextProject.title}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
