import { Helmet } from 'react-helmet-async'
import { AboutContent } from '@/components/about/AboutContent'

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Me | Pradeep Singh Bisht</title>
        <meta name="description" content="Learn about my journey from Visual Design to becoming a T-shaped Product/UX Designer at Amazon, specializing in design systems and frontend development." />
      </Helmet>
      <AboutContent />
    </>
  )
}
