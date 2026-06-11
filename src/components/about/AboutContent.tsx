


import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, Heart } from 'lucide-react'

export function AboutContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Hi, I'm Pradeep
              </h1>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a Product/UX Designer at Amazon who believes in the power of T-shaped design. 
                  My journey began in Visual Design, but I quickly realized that understanding code 
                  makes me a better designer.
                </p>
                <p>
                  What drives me is creating experiences that don't just look beautiful, but actually 
                  work in the real world. My frontend development skills allow me to bridge the gap 
                  between design vision and technical reality.
                </p>
                <p>
                  Currently, I'm focused on building scalable design systems that serve thousands 
                  of Amazon employees while maintaining the highest standards of accessibility and usability.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden bg-muted">
                <img
                  src="images/pradeep.jpg"
                  alt="Pradeep Singh Bisht - Product/UX Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Experience Timeline
            </h2>
            
            <div className="space-y-12">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Calendar className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">2022 - Present</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Sr. Visual Designer → Product/UX Designer, Amazon
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Led design system initiatives for internal communication platforms. 
                    Collaborated with L7+ leadership teams to improve user experiences across 
                    multiple business units. Achieved 40% improvement in user satisfaction 
                    through strategic UX improvements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs">Design Systems</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs">Enterprise UX</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs">Frontend Development</span>
                  </div>
                </div>
                <div>
                  <div className="mb-2">
                    <span className="text-sm text-muted-foreground">2018 - 2022</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    Visual Designer → Amazon
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Led design system initiatives for internal communication platforms. 
                    Collaborated with L7+ leadership teams to improve user experiences across 
                    multiple business units. Achieved 40% improvement in user satisfaction 
                    through strategic UX improvements.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-xs">Visual Design</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs">Communication Design</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-xs">Motion and Graphics Design</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Breakdown */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Skills & Expertise
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg border p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">UX Design (Deep Expertise)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• User Research & Testing</li>
                  <li>• Information Architecture</li>
                  <li>• Interaction Design</li>
                  <li>• Design Systems</li>
                  <li>• Accessibility (WCAG 2.1 AA)</li>
                  <li>• Prototyping</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg border p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Frontend Development (T-Shape)</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• JavaScript & TypeScript</li>
                  <li>• React & Next.js</li>
                  <li>• CSS Frameworks</li>
                  <li>• Component Libraries</li>
                  <li>• Performance Optimization</li>
                  <li>• Code Implementation</li>
                </ul>
              </div>

              <div className="bg-card rounded-lg border p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Leadership & Collaboration</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Mentoring Designers</li>
                  <li>• Cross-functional Collaboration</li>
                  <li>• Stakeholder Management</li>
                  <li>• Design System Governance</li>
                  <li>• Workshop Facilitation</li>
                  <li>• Strategic Planning</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Outside of Work
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <MapPin className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Photography</h3>
                <p className="text-sm text-muted-foreground">
                  Capturing moments and exploring composition through street and landscape photography.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Mentorship</h3>
                <p className="text-sm text-muted-foreground">
                  Helping emerging designers develop their skills and navigate their career paths.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold">Open Source</h3>
                <p className="text-sm text-muted-foreground">
                  Contributing to design system libraries and sharing knowledge with the community.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
