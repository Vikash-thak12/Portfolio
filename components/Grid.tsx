import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about' className='mb-10'>
      <BentoGrid className='w-full'>
        {gridItems.map(
          ({
            id, title, description, className, imgClassName, titleClassName, img, spareImg
          }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              img={img}
              spareImg={spareImg}
            />
          )
        )}
      </BentoGrid>
    </section>
  )
}

export default Grid