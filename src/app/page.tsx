'use client'

import { useState } from 'react'
import Image from 'next/image'
import plans from './plans.json'
import Card from '@/components/Card'
import Modal from '@/components/Modal'
import { PlanProps } from '@/types'
import './page.scss'

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState<null | PlanProps>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (plan: PlanProps) => {
    setIsModalOpen(true)
    setSelectedPlan(plan)
    console.log(plan)
  }

  const handleModalClick = () => {
    setIsModalOpen(false)
    setSelectedPlan(null)
  }

  return (
    <div className='page'>
      <div className='cardsContainer'>
        {plans.map(plan => (
          <Card handleClick={handleCardClick} plan={plan} key={plan.id} />
        ))}
      </div>
      {isModalOpen && (
        <Modal selectedPlan={selectedPlan} handleClick={handleModalClick} />
      )}
    </div>
  )
}
