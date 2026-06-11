'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect, useState } from 'react'

const stats = [
  {
    number: 8,
    suffix: '+',
    label: 'Years in Design',
    description: 'Experience across enterprise and consumer products'
  },
  {
    number: 40,
    suffix: '%',
    label: 'User Satisfaction',
    description: 'Improvement in enterprise design systems'
  },
  {
    number: 50,
    suffix: '%',
    label: 'Error Rate Reduction',
    description: 'Achieved through strategic UX improvements'
  },
  {
    number: 100,
    suffix: '%',
    label: 'WCAG 2.1 AA',
    description: 'Compliant design systems delivered'
  }
]

function AnimatedNumber({ 
  target, 
  suffix = '', 
  duration = 2000 
}: { 
  target: number
  suffix?: string
  duration?: number 
}) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (!inView) return

    let startTime: number
    let animationId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOutCubic * target))

      if (progress < 1) {
        animationId = requestAnimationFrame(animate)
      }
    }

    animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [inView, target, duration])

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Impact by Numbers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable results from strategic design decisions and T-shaped collaboration
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-background border shadow-sm"
            >
              <div className="mb-4">
                <AnimatedNumber 
                  target={stat.number} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {stat.label}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-3xl mx-auto p-8 rounded-lg bg-card border">
            <h3 className="text-xl font-semibold mb-4">
              T-Shaped Designer Advantage
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              My unique combination of deep UX expertise and frontend development skills enables 
              seamless collaboration with engineering teams, faster iteration cycles, and more 
              feasible design solutions that actually ship.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
