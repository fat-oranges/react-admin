import { SubscriptionsWrapper } from "./style"
import { subscriptions } from "@/data/data"
import { iconsImgs } from "@/utils/images"
import CardTitle from "../card-title"

const Subscriptions = () => {
  return (
    <SubscriptionsWrapper className="subgrid-two-item grid-common grid-c5">
      <CardTitle 
        title={`Subscriptions`}
        icon={iconsImgs.plus}
        alt={`plus`} 
      />

      <div className="grid-c5-content">
        <div className="grid-items">
          {
            subscriptions?.map(item => (
              <div className="grid-item" key={item.id}>
                <div className="grid-item-l">
                  <div className="icon">
                    <img src={iconsImgs.alert} alt="alert" />
                  </div>
                  <div className="text text-silver-v1">
                    {item.title}<span>due {item.due_date}</span>
                  </div>
                  <div className="grid-item r">
                    <span className="text-silver-v1">
                      ${item.amount}
                    </span>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </SubscriptionsWrapper>
  )
}

export default Subscriptions