import Image from 'next/image'
import { CardProps } from '@/types'

export default function Card({ plan, handleClick }: CardProps) {
  return (
    <div key={plan.id} className='card'>
      {plan.isFav && <div className='topbar'>Önerilen</div>}
      <div className='logo'>
        <Image alt='Fixpack Logo' src='/fixpack.svg' width={76} height={21} />
      </div>
      <h4 className='name'>{plan.name}</h4>
      <h3>{plan.price}</h3>
      <div className='line'></div>
      <div className='features'>
        {plan.features.map(feature => {
          return (
            <div key={feature.id} className='feature'>
              <Image
                alt='Feature Status Icon'
                src={
                  feature.icon === 'checkMark'
                    ? '/checkMark.svg'
                    : feature.icon === 'xMark'
                    ? '/xMark.svg'
                    : ''
                }
                width={24}
                height={24}
              />

              <div className={`text ${feature.icon != 'checkMark' && 'faded'}`}>
                {feature.name}
              </div>
            </div>
          )
        })}
      </div>
      <div
        onClick={() => {
          handleClick(plan)
        }}
        className='btn'>
        Planı Seç
      </div>
    </div>
  )
}
