import Image from 'next/image'
import { ModalProps } from '@/types'

export default function Modal({ selectedPlan, handleClick }: ModalProps) {
  return (
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
          <span>FIX123456</span> sipariş numaralı sigorta paketiniz ürününüzle
          başarıyla eşleştirildi. Aşağıda sipariş hakkında tüm detayları
          bulacaksınız. Kafanıza takılan herhangi bir sorunuz olursa canlı
          sohbet üzerinden 7/24 iletişime geçebilirsiniz. Bu arada, satın
          alınımızı paylaşabilir ve mağaza kredisi kazanabilirsiniz.
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
            handleClick()
          }}>
          Uygulamaya Dön
        </div>
      </div>
    </div>
  )
}
