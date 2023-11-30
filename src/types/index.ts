export interface PlanProps {
  id: number
  name: string
  price: string
  features: {
    id: string
    name: string
    icon: string
  }[]
  isFav: boolean
}

export interface CardProps {
  plan: PlanProps
  handleClick: (plan: PlanProps) => void
}

export interface ModalProps {
  selectedPlan: {
    id: number
    name: string
    price: string
    features: {
      id: string
      name: string
      icon: string
    }[]
    isFav: boolean
  } | null
  handleClick: () => void
}
