import Slader1 from "@/assets/images/Slader1.png"
import Slader2 from "@/assets/images/Slader2.png"
import Slader3 from "@/assets/images/Slader3.png"


import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {

  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
const images = [Slader1, Slader2, Slader3]
export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  return (
    <div className="flex justify-center">
      <Carousel
        plugins={[plugin.current]}
        className="w-[1280px] h-[300px]"
       
      >
        <CarouselContent className="flex justify-center items-center">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <div className="flex justify-center items-center">
                <Card>
                  <CardContent className="w-full h-full object-cover">

                   
                      <img
                        src={images[index % images.length]}
                        alt={`slider-${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                   

                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}