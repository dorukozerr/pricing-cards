'use client'

import { useState } from 'react'
import Image from 'next/image'
import './page.scss'
import plans from './plans.json'

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<null | {
    id: number
    name: string
    price: string
    features: { id: string; name: string; icon: string }[]
    isFav: boolean
  }>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className='page'>
      <div className='cardsContainer'>
        {plans.map(plan => {
          return (
            <div key={plan.id} className='card'>
              <div className='logo'>
                <Image
                  alt='Fixpack Logo'
                  src='/fixpack.svg'
                  width={76}
                  height={21}
                />
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

                      <div
                        className={`text ${
                          feature.icon != 'checkMark' && 'faded'
                        }`}>
                        {feature.name}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div
                onClick={() => {
                  setIsModalOpen(true)
                  setSelectedPlan(plan)
                  console.log(plan)
                }}
                className='btn'>
                Planı Seç
              </div>
            </div>
          )
        })}
      </div>
      {isModalOpen && (
        <div className='modalBg'>
          <div className='modal'>
            <Image
              alt='Green Check Mark'
              src='/greenCheckMark.svg'
              width={120}
              height={120}
            />
            <p className='t1'>Bu siparişi verdiğiniz için çok teşekkürler.</p>
            <p className='t2'>
              <span>FIX123456</span> sipariş numaralı sigorta paketiniz
              ürününüzle başarıyla eşleştirildi. Aşağıda sipariş hakkında tüm
              detayları bulacaksınız. Kafanıza takılan herhangi bir sorunuz
              olursa canlı sohbet üzerinden 7/24 iletişime geçebilirsiniz. Bu
              arada, satın alınımızı paylaşabilir ve mağaza kredisi
              kazanabilirsiniz.
            </p>
            <div className='line'></div>
            <p className='t3'>Sipariş Özeti</p>
            <div className='infoBox'>
              <div className='info1'>{selectedPlan?.features[2].name}</div>
              <div className='info2'>{selectedPlan?.price}</div>
            </div>
            <div className='filler'></div>
            <div
              className='btn'
              onClick={() => {
                setIsModalOpen(false)
                setSelectedPlan(null)
              }}>
              Uygulamaya Dön
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
