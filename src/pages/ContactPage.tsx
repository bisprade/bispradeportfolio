import { Helmet } from 'react-helmet-async'
import { ContactContent } from '@/components/contact/ContactContent'

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact | Pradeep Singh Bisht</title>
        <meta name="description" content="Get in touch for UX Design opportunities, collaboration, or mentorship. Currently open to roles focusing on enterprise design systems and frontend development." />
      </Helmet>
      <ContactContent />
    </>
  )
}
