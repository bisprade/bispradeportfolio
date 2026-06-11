import { Helmet } from 'react-helmet-async'
import { HeroSection } from '@/components/home/HeroSection'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { StatsSection } from '@/components/home/StatsSection'
import { SkillsSection } from '@/components/home/SkillsSection'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home | Pradeep Singh Bisht</title>
        <meta name="description" content="Product/UX Designer at Amazon specializing in scalable design systems and frontend development. Designing scalable experiences that ship." />
      </Helmet>
      <HeroSection />
      <FeaturedProjects />
      <StatsSection />
      <SkillsSection />
    </>
  )
}
