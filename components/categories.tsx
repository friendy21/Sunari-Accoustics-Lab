import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    name: "Professional Series",
    description: "For studio engineers and musicians",
    image: "/placeholder.svg?height=600&width=800&query=professional+audio+studio+dark+lighting",
    href: "/shop/professional",
  },
  {
    name: "Audiophile Series",
    description: "For discerning music lovers",
    image: "/placeholder.svg?height=600&width=800&query=audiophile+listening+to+music+with+headphones+dark+room",
    href: "/shop/audiophile",
  },
  {
    name: "Custom Fit",
    description: "Personalized to your ear anatomy",
    image: "/placeholder.svg?height=600&width=800&query=custom+ear+mold+impression+for+in-ear+monitors",
    href: "/shop/custom",
  },
  {
    name: "Accessories",
    description: "Cables, cases, and more",
    image: "/placeholder.svg?height=600&width=800&query=premium+audio+cables+and+cases+for+in-ear+monitors",
    href: "/shop/accessories",
  },
]

export function Categories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link key={category.name} href={category.href} className="group relative overflow-hidden rounded-lg">
          <div className="aspect-[4/5] w-full">
            <Image
              src={category.image || "/placeholder.svg"}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              <p className="text-gray-300 text-sm mt-1">{category.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
