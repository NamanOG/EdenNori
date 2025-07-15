import { DarkHero } from "@/components/dark-hero"
import { NeonMenuCategories } from "@/components/neon-menu-categories"
import { DynamicFoodShowcase } from "@/components/dynamic-food-showcase"
import { GlowingSpecials } from "@/components/glowing-specials"
import { NeonIngredients } from "@/components/neon-ingredients"
import { DarkTestimonials } from "@/components/dark-testimonials"
import { FloatingStats } from "@/components/floating-stats"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <DarkHero />
      <FloatingStats />
      <NeonMenuCategories />
      <DynamicFoodShowcase />
      <GlowingSpecials />
      <NeonIngredients />
      <DarkTestimonials />
    </main>
  )
}
