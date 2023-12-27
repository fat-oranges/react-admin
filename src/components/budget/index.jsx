import { budget } from "@/data/data"
import { iconsImgs } from "@/utils/images"
import CardTitle from "../card-title"
import { BudgetWrapper } from "./style"

const Budget = () => {
  return (
    <BudgetWrapper className="grid-two-item grid-common grid-c4">
      <CardTitle 
        title={`Budget`}
        icon={iconsImgs.plus}
        alt={`plus`}
      />
      
      <div className="grid-c-top text-silver-v1">
        <h2 className="lg-value">Cash</h2>
        <span className="lg-value">$10,000</span>
      </div>

      <div className="grid-c4-content bg-jet">
        <div className="grid-items">
          {
            budget?.map(item => (
              <div className="grid-item" key={item.id}>
                <div className="grid-item-l">
                  <div className="icon">
                    <img src={iconsImgs.check} alt="check" />
                  </div>
                  <p className="text text-silver-v1">
                    {item.title}
                    <span>{item.type}</span>
                  </p>
                </div>

                <div className="grid-item-r">
                  <span className="text-silver-v1">${item.amount}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </BudgetWrapper>
  )
}

export default Budget