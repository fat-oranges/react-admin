import { iconsImgs } from "@/utils/images"
import CardTitle from "../card-title"
import { CardsWrapper } from "./style"

const Cards = () => {
  return (
    <CardsWrapper className="grid-one-item grid-common grid-c1">
      <CardTitle 
        title={`Cards`} 
        icon={iconsImgs.plus}
        alt={`plus`}
      />

      <div className="grid-c1-content">
        <p>Balance</p>
        <div className="lg-value">$22,000</div>
        <div className="card-wrapper">
          <span className="card-pin-hidden">**** **** ****</span>
          <span>1234</span>
        </div>

        <div className="card-logo-wrapper">
          <div>
            <p className="text text-silver-v1 expiry-text">Expires</p>
            <p className="text text-sm text-white">12/22</p>
          </div>

          <div className="card-logo">
            <div className="logo-shape1"></div>
            <div className="logo-shape2"></div>
          </div>
        </div>
      </div>
    </CardsWrapper>
  )
}

export default Cards