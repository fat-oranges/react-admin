import { iconsImgs } from "@/utils/images"
import { TransactionsWrapper } from "./style"
import { transactions } from "@/data/data"
import CardTitle from "../card-title"

const Transactions = () => {
  return (
    <TransactionsWrapper className="grid-on-item grid-common grid-c2">
      <CardTitle 
        title={`All Transactions`} 
        icon={iconsImgs.plus}
        alt={`plus`}
      />

      <div className="grid-content">
        <div className="grid-items">
          {
            transactions?.map(item => (
              <div className="grid-item" key={item.id}>
                <div className="grid-item-l">
                  <div className="avatar img-fit-cover">
                    <img src={item.image} alt="" />
                  </div>
                  <p className="text">
                    {item.name}
                    <span>{item.date}</span>
                  </p>
                </div>

                <div className="grid-item-r">
                  <span className="text-scarlet">${item.amount}</span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </TransactionsWrapper>
  )
}

export default Transactions