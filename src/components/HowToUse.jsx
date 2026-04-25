import useInView from '../hooks/useInView'

const steps = [
  {
    step: '01',
    icon: '⚖️',
    title: 'Measure',
    description: 'Add ½ to 1 teaspoon of Namcha powder to your cup, shaker, or blender.',
  },
  {
    step: '02',
    icon: '🥄',
    title: 'Mix',
    description: 'Pour in hot water, milk, or your favourite plant-based milk. Stir or froth until dissolved.',
  },
  {
    step: '03',
    icon: '👁️',
    title: 'Watch',
    description: 'The liquid blooms to a deep blue. Squeeze lemon or add hibiscus to shift it to violet or pink.',
  },
  {
    step: '04',
    icon: '🍵',
    title: 'Enjoy',
    description: 'Sip as a latte, iced tea, cocktail base, or fold into smoothies, bakes, and pastas.',
  },
]

const recipes = [
  {
    name: 'Blue Butterfly Latte',
    prep: '3 min',
    tag: 'Hot or Iced',
    tagColor: 'text-namcha-blue bg-namcha-blue/10',
    description: 'Blend 1 tsp Namcha with warm oat milk and a touch of honey.',
  },
  {
    name: 'Pink Lemon Sparkle',
    prep: '2 min',
    tag: 'Refreshing',
    tagColor: 'text-namcha-pink bg-namcha-pink/10',
    description: 'Mix Namcha in sparkling water, squeeze lemon, watch it turn pink.',
  },
  {
    name: 'Butterfly Pea Pasta',
    prep: '20 min',
    tag: 'Creative',
    tagColor: 'text-namcha-sage bg-namcha-sage/10',
    description: 'Add 1 tbsp to your pasta dough for a stunning natural blue colour.',
  },
]

function Step({ step, delay }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-in-up ${isVisible ? 'is-visible' : ''} flex flex-col items-center text-center relative`}
    >
      {/* Icon circle */}
      <div className="w-20 h-20 rounded-full bg-namcha-blue/10 flex items-center justify-center text-4xl mb-4 shrink-0">
        {step.icon}
      </div>

      <span className="font-display font-bold text-namcha-blue text-sm tracking-widest mb-1">
        {step.step}
      </span>
      <h3 className="font-display text-xl font-bold text-namcha-navy mb-2">{step.title}</h3>
      <p className="font-body text-namcha-earth/70 text-sm leading-relaxed max-w-[200px]">
        {step.description}
      </p>
    </div>
  )
}

function RecipeCard({ recipe, delay }) {
  const [ref, isVisible] = useInView()

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`fade-in-up ${isVisible ? 'is-visible' : ''} bg-white rounded-2xl p-6 border-t-4 border-namcha-blue/30 shadow-sm hover:shadow-md transition-shadow duration-300`}
    >
      <div className="flex items-center justify-between mb-3">
        <span className={`text-xs font-body font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${recipe.tagColor}`}>
          {recipe.tag}
        </span>
        <span className="text-xs font-body text-namcha-earth/40">{recipe.prep}</span>
      </div>
      <h4 className="font-display text-base font-bold text-namcha-navy mb-2">{recipe.name}</h4>
      <p className="font-body text-namcha-earth/70 text-sm leading-relaxed">{recipe.description}</p>
    </div>
  )
}

export default function HowToUse() {
  const [headingRef, headingVisible] = useInView()

  return (
    <section id="how-to-use" className="py-24 px-6 bg-namcha-cream">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`fade-in-up ${headingVisible ? 'is-visible' : ''} text-center mb-16`}
        >
          <p className="font-body text-namcha-blue uppercase tracking-widest text-sm font-semibold mb-4">
            Getting Started
          </p>
          <h2 className="section-heading">Make It Your Own</h2>
          <p className="section-subheading">
            Four simple steps to your first Namcha creation — then explore a world of recipes.
          </p>
        </div>

        {/* Steps grid — 2×2 on tablet, 4-col on desktop, stacked on mobile */}
        <div className="relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[10%] right-[10%] h-px bg-namcha-blue/15" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <Step key={step.step} step={step} delay={index * 120} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-20 flex items-center gap-6">
          <div className="flex-1 h-px bg-namcha-blue/15" />
          <span className="font-body text-namcha-earth/40 text-sm uppercase tracking-widest">Recipe Inspiration</span>
          <div className="flex-1 h-px bg-namcha-blue/15" />
        </div>

        {/* Recipe cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard key={recipe.name} recipe={recipe} delay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
