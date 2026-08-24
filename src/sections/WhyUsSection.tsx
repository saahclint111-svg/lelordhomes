import { motion } from 'framer-motion';
import { Compass, BarChart2, Home, Heart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const pillars = [
  {
    icon: Compass,
    title: 'EXPERT GUIDANCE',
    description: 'Informed, experienced advice to navigate every stage of your property journey.',
  },
  {
    icon: BarChart2,
    title: 'CLEAR STRATEGY',
    description: 'A structured, goal-oriented approach that keeps your property decisions on track.',
  },
  {
    icon: Home,
    title: 'PROPERTY-FOCUSED SUPPORT',
    description: 'Dedicated support that understands the nuances of the UK property landscape.',
  },
  {
    icon: Heart,
    title: 'CLIENT-FIRST APPROACH',
    description: 'Your goals are at the centre of everything we do. No one-size-fits-all solutions.',
  },
];

export default function WhyUsSection() {
  return (
    <section
      aria-labelledby="why-us-heading"
      className="bg-[#111111] py-24 md:py-32 px-6 sm:px-10 lg:px-16 xl:px-24"
    >
      <div className="max-w-[1440px] mx-auto">
        <SectionHeading heading="WHY LE LÖRD HOMES?" />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                className="bg-[#151515] border border-[rgba(200,164,93,0.12)] p-8 flex flex-col gap-5 hover:border-[rgba(200,164,93,0.4)] transition-colors duration-300"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className="w-11 h-11 flex items-center justify-center border border-[rgba(200,164,93,0.2)]">
                  <Icon size={20} className="text-[#C8A45D]" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg tracking-wide text-white">{pillar.title}</h3>
                <p className="font-body text-[#A5A5A5] text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
