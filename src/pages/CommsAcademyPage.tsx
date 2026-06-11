import { Helmet } from 'react-helmet-async'
import { CaseStudyLayout } from '@/components/case-study/CaseStudyLayout'
import { commsAcademyData } from '@/lib/case-studies/comms-academy'

export default function CommsAcademyPage() {
  return (
    <>
      <Helmet>
        <title>Comms Academy WebApp | UX Case Study | Pradeep Singh Bisht</title>
        <meta name="description" content="Enterprise-scale design system delivering 40% improvement in user satisfaction for Amazon's internal communications platform." />
      </Helmet>
      <CaseStudyLayout project={commsAcademyData as any} />
    </>
  )
}
