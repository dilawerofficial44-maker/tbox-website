import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { LogoCloud } from '@/components/logo-cloud'
import { Services } from '@/components/services'
import { CaseStudies } from '@/components/case-studies'
import { StatementSection } from '@/components/statement-section'
import { Process } from '@/components/process'
import { Testimonials } from '@/components/testimonials'
import { Team } from '@/components/team'
import { Insights } from '@/components/insights'
import { ContactCta } from '@/components/contact-cta'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <LogoCloud />
        <Services />
        <CaseStudies />
        <StatementSection />
        <Process />
        <Testimonials />
        <Team />
        <Insights />
        <ContactCta />
      </main>
      <SiteFooter />
    </div>
  )
}
