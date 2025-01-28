import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { PrevButton, NextButton, usePrevNextButtons } from './ArrowButtons'

export function EmblaCarousel({images}) {
  const [emblaRef,emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)
  const imgs = images

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])

  return (
    <div className="carousel">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {
              imgs.map((img)=>(
                  <div className="embla__slide">
                      <img src={img} alt="" />
                  </div>        
              ))
          }
          
        </div>
      </div>
      <div className="embla__buttons">
        <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
      </div>

    </div>
  )
}
