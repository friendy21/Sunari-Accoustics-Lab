import type { Metadata } from "next"
import CollectionsClientPage from "./CollectionsClientPage"

export const metadata: Metadata = {
  title: "Collections | Sunari Acoustics Lab",
  description: "Explore our curated collections of premium in-ear monitors",
}

export default function CollectionsPage() {
  return <CollectionsClientPage />
}
