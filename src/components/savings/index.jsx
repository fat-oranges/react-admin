import { SavingsWrapper } from "./style"

import { savings } from "@/data/data"
import CardTitle from "../card-title"
import { iconsImgs, personsImgs } from "@/utils/images"

const Savings = () => {
  return (
    <SavingsWrapper className="subgrid-two-item grid-common grid-c6">
      <CardTitle 
        title={`Savings`}
        icon={iconsImgs.plus}
        alt={`plus`}
      />

      <div className="grid-c6-content">
        <div className="grid-items">
          {
            savings?.map(item => (
              <div className="grid-item" key={item.id}>
                <div className="grid-item-top">
                  <div className="grid-item-top-l">
                    <div className="avatar img-fit-cover">
                      <img src={personsImgs.person_one} alt="" />
                    </div>
                    <p className="text text-silver-v1">{item.title}</p>
                  </div>

                  <div className="grid-item-top-r">
                    <span className="text-silver-v1">
                      ${item.saving_amount}
                    </span>
                  </div>
                </div>

                <div className="grid-item-bottom">
                  <div className="grid-item-badges">
                    <span className="grid-item-badge">
                      Date taken {item.date_taken}
                    </span>
                    <span className="grid-item-badge">
                      Amount left ${item.amount_left}
                    </span>
                  </div>

                  <div className="grid-item-progress">
                    <div className="grid-item-fill">
                      
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </SavingsWrapper>
  )
}

export default Savings