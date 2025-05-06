"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function ProductFilters() {
  const [priceRange, setPriceRange] = useState([0, 1500])

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-4">Filters</h3>
        <Accordion type="multiple" className="w-full" defaultValue={["category", "price"]}>
          <AccordionItem value="category" className="border-b border-zinc-800">
            <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-4">
              Category
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="professional" />
                  <Label htmlFor="professional" className="text-gray-300">
                    Professional Series
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="audiophile" />
                  <Label htmlFor="audiophile" className="text-gray-300">
                    Audiophile Series
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="custom" />
                  <Label htmlFor="custom" className="text-gray-300">
                    Custom Fit
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="accessories" />
                  <Label htmlFor="accessories" className="text-gray-300">
                    Accessories
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="price" className="border-b border-zinc-800">
            <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-4">
              Price Range
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-1">
                <Slider
                  defaultValue={[0, 1500]}
                  max={1500}
                  step={10}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="py-4"
                />
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-300">${priceRange[0]}</span>
                  <span className="text-sm text-gray-300">${priceRange[1]}</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="features" className="border-b border-zinc-800">
            <AccordionTrigger className="text-white hover:text-amber-400 hover:no-underline py-4">
              Features
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 pt-1">
                <div className="flex items-center space-x-2">
                  <Checkbox id="balanced-armature" />
                  <Label htmlFor="balanced-armature" className="text-gray-300">
                    Balanced Armature
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dynamic-driver" />
                  <Label htmlFor="dynamic-driver" className="text-gray-300">
                    Dynamic Driver
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="hybrid" />
                  <Label htmlFor="hybrid" className="text-gray-300">
                    Hybrid
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="detachable-cable" />
                  <Label htmlFor="detachable-cable" className="text-gray-300">
                    Detachable Cable
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="wireless" />
                  <Label htmlFor="wireless" className="text-gray-300">
                    Wireless Compatible
                  </Label>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}
