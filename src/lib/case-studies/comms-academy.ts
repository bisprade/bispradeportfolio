export const commsAcademyData = {
  id: 'comms-academy',
  title: 'Comms Academy WebApp',
  subtitle: 'Enterprise-scale design system delivering 40% improvement in user satisfaction',
  
  hero: {
    image: '/images/projects/comms-academy-hero.jpg',
    alt: 'Comms Academy design system interface mockup'
  },
  
  overview: {
    challenge: 'Amazon\'s internal communications platform lacked a unified design system, leading to inconsistent user experiences and decreased productivity among L7+ leadership teams.',
    role: 'Lead UX Designer & Frontend Developer',
    timeline: '6 months (2025)',
    team: '4 designers, 6 engineers, 2 product managers',
    impact: '40% improvement in user satisfaction, 60% faster development cycles',
    tools: ['Figma', 'React', 'TypeScript', 'Storybook', 'Amazon Internal Tools']
  },
  
  sections: [
    {
      id: 'problem',
      title: 'Understanding the Challenge',
      content: [
        {
          type: 'text' as const,
          content: 'Amazon\'s internal communications platform served over 10,000 L7+ employees but suffered from fragmented user experiences. Each team had developed their own interface patterns, leading to confusion and inefficiency.'
        },
        {
          type: 'list' as const,
          title: 'Key Pain Points Identified:',
          items: [
            'Inconsistent navigation patterns across different sections',
            'Varying design standards causing cognitive load',
            'No centralized component library for development teams',
            'Accessibility gaps in existing implementations'
          ]
        },
        {
          type: 'quote' as const,
          content: '"Every time I switch between different sections of the platform, I have to relearn how to navigate. It\'s incredibly frustrating when I\'m trying to communicate critical information quickly."',
          author: 'Senior Principal Engineer, AWS'
        }
      ],
      images: [
        {
          src: '/images/case-studies/comms-academy/problem-analysis.jpg',
          alt: 'User journey mapping showing pain points',
          caption: 'User journey analysis revealing key friction points in the existing system'
        }
      ]
    },
    
    {
      id: 'research',
      title: 'Uncovering Insights',
      content: [
        {
          type: 'text',
          content: 'I conducted comprehensive user research involving 45 L7+ employees across different business units to understand their workflow patterns and pain points.'
        },
        {
          type: 'list',
          title: 'Research Methodology:',
          items: [
            'In-depth interviews with 15 high-frequency users',
            'Usability testing sessions on current platform',
            'Competitive analysis of internal Amazon tools',
            'Accessibility audit of existing components'
          ]
        },
        {
          type: 'text',
          content: 'The research revealed that users spent 23% of their time navigating between different sections, with most confusion stemming from inconsistent interaction patterns and visual hierarchy.'
        }
      ],
      images: [
        {
          src: '/images/case-studies/comms-academy/research-findings.jpg',
          alt: 'Research insights dashboard',
          caption: 'Key findings from user research highlighting navigation and consistency issues'
        },
        {
          src: '/images/case-studies/comms-academy/user-personas.jpg',
          alt: 'User personas for L7+ employees',
          caption: 'Primary personas representing different user workflows and pain points'
        }
      ]
    },
    
    {
      id: 'strategy',
      title: 'Defining the Approach',
      content: [
        {
          type: 'text',
          content: 'Based on research insights, I established design principles focused on consistency, accessibility, and efficiency. The strategy involved creating a unified component library that could scale across all platform sections.'
        },
        {
          type: 'list',
          title: 'Design Principles:',
          items: [
            'Consistency: Unified patterns across all touchpoints',
            'Accessibility: WCAG 2.1 AA compliance from the ground up',
            'Efficiency: Reduce cognitive load and task completion time',
            'Scalability: Components that work across different contexts'
          ]
        },
        {
          type: 'text',
          content: 'I developed a comprehensive information architecture that prioritized the most common user workflows while maintaining flexibility for edge cases.'
        }
      ],
      images: [
        {
          src: '/images/case-studies/comms-academy/information-architecture.jpg',
          alt: 'Information architecture diagram',
          caption: 'New information architecture optimized for L7+ user workflows'
        }
      ]
    },
    
    {
      id: 'design',
      title: 'Crafting the Experience',
      content: [
        {
          type: 'text',
          content: 'The design solution centered around a comprehensive component library built with React and TypeScript. Each component was designed with accessibility and reusability in mind.'
        },
        {
          type: 'list',
          title: 'Key Design Decisions:',
          items: [
            'Unified navigation system with contextual breadcrumbs',
            'Consistent color system aligned with Amazon brand guidelines',
            'Accessible form components with clear validation states',
            'Responsive grid system optimized for different screen sizes'
          ]
        }
      ],
      images: [
        {
          src: '/images/case-studies/comms-academy/design-system.jpg',
          alt: 'Design system components',
          caption: 'Component library showcasing navigation, forms, and data visualization elements'
        },
        {
          src: '/images/case-studies/comms-academy/responsive-design.jpg',
          alt: 'Responsive design showcases',
          caption: 'Responsive layouts optimized for desktop, tablet, and mobile devices'
        }
      ]
    },
    
    {
      id: 'implementation',
      title: 'Bringing Design to Life',
      content: [
        {
          type: 'text',
          content: 'As the T-shaped designer on this project, I worked directly with the engineering team to implement the design system. This hands-on approach ensured design fidelity and faster iteration cycles.'
        },
        {
          type: 'code',
          language: 'tsx',
          title: 'Example Component Implementation',
          content: `// NavigationBreadcrumb.tsx
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  label: string
  href?: string
  current?: boolean
}

export function NavigationBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1">
      <Home className="h-4 w-4 text-muted-foreground" />
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-1">
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          {item.href && !item.current ? (
            <a 
              href={item.href}
              className="text-sm font-medium text-primary hover:underline"
            >
              {item.label}
            </a>
          ) : (
            <span 
              className={cn(
                "text-sm font-medium",
                item.current ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}`
        },
        {
          type: 'list',
          title: 'Technical Implementation Highlights:',
          items: [
            'Built with React 18 and TypeScript for type safety',
            'Storybook integration for component documentation',
            'Automated accessibility testing with axe-core',
            'Performance optimization reducing bundle size by 30%'
          ]
        }
      ],
      images: [
        {
          src: '/images/case-studies/comms-academy/storybook.jpg',
          alt: 'Storybook component documentation',
          caption: 'Comprehensive component documentation in Storybook for developer adoption'
        }
      ]
    },
    
    {
      id: 'testing',
      title: 'Validating & Refining',
      content: [
        {
          type: 'text',
          content: 'I conducted extensive usability testing with the new design system, involving both moderated sessions and unmoderated testing through Amazon\'s internal testing platform.'
        },
        {
          type: 'list',
          title: 'Testing Methodology:',
          items: [
            'A/B testing comparing old vs new navigation patterns',
            'Moderated usability sessions with 20 L7+ users',
            'Accessibility testing with screen reader users',
            'Performance monitoring across different devices'
          ]
        },
        {
          type: 'text',
          content: 'The testing revealed significant improvements in task completion time and user satisfaction, with some users completing common tasks 45% faster than before.'
        }
      ],
      images: [
        {
          src: '/images/case-studies/comms-academy/usability-testing.jpg',
          alt: 'Usability testing session',
          caption: 'Moderated usability testing session showing improved task completion rates'
        }
      ]
    },
    
    {
      id: 'results',
      title: 'Measuring Success',
      content: [
        {
          type: 'text',
          content: 'The new design system launched successfully across all Amazon internal communications platforms, with immediate positive impact on user experience and development velocity.'
        },
        {
          type: 'metrics',
          title: 'Key Results:',
          items: [
            { label: 'User Satisfaction', value: '40%', description: 'Increase in CSAT scores' },
            { label: 'Task Completion Time', value: '35%', description: 'Reduction in average task time' },
            { label: 'Development Velocity', value: '60%', description: 'Faster component development' },
            { label: 'Accessibility Score', value: '100%', description: 'WCAG 2.1 AA compliance' }
          ]
        },
        {
          type: 'quote',
          content: '"The new design system has transformed how our team works. Everything feels intuitive now, and I can focus on the content rather than figuring out how to navigate."',
          author: 'VP of Engineering, Alexa'
        }
      ],
      images: [
        {
          src: '/images/case-studies/comms-academy/success-metrics.jpg',
          alt: 'Success metrics dashboard',
          caption: 'Analytics dashboard showing improved user engagement and task completion rates'
        }
      ]
    },
    
    {
      id: 'reflection',
      title: 'Lessons Learned',
      content: [
        {
          type: 'text',
          content: 'This project reinforced the value of my T-shaped approach to design. By being involved in both the design and implementation phases, I could ensure the final product matched the design vision while being technically feasible.'
        },
        {
          type: 'list',
          title: 'Key Learnings:',
          items: [
            'Early collaboration with engineering leads to better design decisions',
            'Accessibility considerations from day one prevent costly retrofitting',
            'Component documentation is crucial for adoption at enterprise scale',
            'Regular user feedback loops enable rapid iteration and improvement'
          ]
        },
        {
          type: 'text',
          content: 'The success of this project has led to its adoption as a template for other internal Amazon platforms, with the component library being reused across multiple teams and significantly reducing development time for new features.'
        }
      ]
    }
  ],
  
  nextProject: {
    title: 'Amazon Business Consulting',
    href: '/work/amazon-business',
    image: '/images/projects/amazon-business-hero.jpg'
  }
}
