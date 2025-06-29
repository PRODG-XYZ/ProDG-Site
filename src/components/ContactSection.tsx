//Contact section component
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Contact Us
              </Button>
            </div>
          </div>
          
          <div className="mt-16 border-t border-white/10 pt-10">
            <h3 className="font-display text-xl font-semibold text-white text-center mb-10">
              Our Global Offices
            </h3>
            <Offices invert />
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
