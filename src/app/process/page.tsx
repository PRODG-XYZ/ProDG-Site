//Process page

import { type Metadata } from 'next'

import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
  title,
  image,
  children,
}: {
  title: string
  image: React.ComponentPropsWithoutRef<typeof StylizedImage>
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Discover() {
  return (
    <Section title="Discover" image={{ src: imageWhiteboard }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          We work closely with our clients to uncover{' '}
          <strong className="font-semibold text-neutral-950">untapped </strong>, opportunities embedding ourselves within your operations to reveal what{' '}
          <strong className="font-semibold text-neutral-950">truly</strong> drives success.
        </p>
        <p>
          Our team of digital strategists and business analysts spends weeks with your leadership—reviewing processes, analyzing overlooked data, and leveraging innovative research techniques to expose hidden potential. Their insights fuel our strategic planning, ensuring that every facet of your business is primed for transformation.
        </p>
        <p>
          Once the full assessment is complete, we deliver a detailed blueprint—complete with <strong className="font-semibold text-neutral-950">actionable</strong> recommendations and a clearly defined budget—to pave the way for sustainable growth.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <TagList className="mt-4">
        <TagListItem>In-depth discovery sessions</TagListItem>
        <TagListItem>Market & technology assessments</TagListItem>
        <TagListItem>Digital transformation audits</TagListItem>
        <TagListItem>Stakeholder interviews</TagListItem>
        <TagListItem>Concept validation & prototyping</TagListItem>
        <TagListItem>Strategic planning & budgeting</TagListItem>
      </TagList>
    </Section>
  )
}

function Build() {
  return (
    <Section title="Build" image={{ src: imageLaptop, shape: 1 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Based on the insights from the Discover phase, we craft a detailed roadmap that transforms your vision into a tangible product. Our technical team then gets to work, blending innovative design with agile development practices to build a scalable, high-performance solution.
        </p>
        <p>
          Each client is paired with a dedicated project lead who ensures open, transparent communication while our engineers translate strategic plans into robust, custom code—leveraging both cutting-edge frameworks and refined open-source solutions.
        </p>
        <p>
          Our regular progress updates and milestone reviews keep you fully informed, empowering you to focus on growth while we turn your blueprint into a market-ready reality.
        </p>
      </div>

      <Blockquote
        author={{ name: 'Micheal Houghton', role: 'CEO of Community Wolf' }}
        className="mt-12"
      >
        ProDG Studio’s meticulous approach and transparent communication turned our vision into a reality far beyond our expectations.
      </Blockquote>
    </Section>
  )
}

function Deliver() {
  return (
    <Section title="Deliver" image={{ src: imageMeeting, shape: 2 }}>
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          About halfway through the Build phase, we recalibrate based on final market insights and client feedback—refining the product scope and ensuring every core feature is <strong className="font-semibold text-neutral-950">polished</strong> for launch.
        </p>
        <p>
          Our team leverages proven, high-performance frameworks for the core structure, while dedicating focused resources during the final phase to perfect <strong className="font-semibold text-neutral-950">every</strong> detail.
        </p>
        <p>
          We ensure that essential functionalities are{' '}
          <strong className="font-semibold text-neutral-950">
            fully refined
          </strong>{' '}
          for launch, with supplementary features continuously optimized through our ongoing{' '}
          <strong className="font-semibold text-neutral-950">
            maintenance
          </strong>{' '}
          and enhancement services.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this phase
      </h3>
      <List className="mt-8">
        <ListItem title="Testing">
          Rigorous validation processes ensure every component performs flawlessly.
        </ListItem>
        <ListItem title="Infrastructure">
          We deploy scalable, cutting-edge cloud solutions tailored to your unique performance requirements.
        </ListItem>
        <ListItem title="Support">
          Our dedicated ongoing assistance ensure your product remains at the forefront of technology, always evolving to meet your changing needs.
        </ListItem>
      </List>
    </Section>
  )
}

function Values() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Our values"
        title="Balancing vision and execution"
      >
        <p>
          We combine breakthrough ideas with strategic discipline to deliver solutions that are both innovative and reliable. Our core values guide every decision, ensuring we stay ahead in digital transformation while remaining true to your business objectives.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Meticulous">
            Every project begins with a deep dive into your unique vision—ensuring every detail is thoughtfully designed and executed.
          </GridListItem>
          <GridListItem title="Efficient">
            Our agile workflows and streamlined processes mean we deliver high-quality results on time, every time.
          </GridListItem>
          <GridListItem title="Adaptable">
            We tailor our strategies to fit the evolving needs of your business, ensuring our solutions grow alongside you.
          </GridListItem>
          <GridListItem title="Transparent">
            With clear communication and honest processes, we keep you informed and involved at every stage.
          </GridListItem>
          <GridListItem title="Collaborative">
            We build lasting partnerships that extend beyond project delivery, fostering mutual growth and shared success.
          </GridListItem>
          <GridListItem title="Innovative">
           Constantly exploring cutting-edge technologies and creative solutions, we drive forward-thinking results that set you apart.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Our Proven Process',
  description:
    'Learn how our strategic, three-phase approach transforms ideas into scalable, high-impact solutions.',
}

export default function Process() {
  return (
    <>
      <PageIntro eyebrow="Our Process" title="From Discovery to Delivery: Transforming Ideas into Impact">
        <p>
          Our methodical approach ensures every project delivers measurable value. By merging deep industry expertise with innovative technology, we turn complex challenges into transformative opportunities.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Discover />
        <Build />
        <Deliver />
      </div>

      <Values />

      <ContactSection />
    </>
  )
}
