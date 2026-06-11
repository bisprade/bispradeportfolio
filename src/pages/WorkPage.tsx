import { Helmet } from 'react-helmet-async'
import { WorkHubContent } from '@/components/work/WorkHubContent'

export default function WorkPage() {
  return (
    <>
      <Helmet>
        <title>Work - Case Studies | Pradeep Singh Bisht</title>
        <meta name="description" content="Explore my UX design case studies featuring enterprise design systems, strategic UX transformations, and full-stack solutions." />
      </Helmet>
      <WorkHubContent />
    </>
  )
}
