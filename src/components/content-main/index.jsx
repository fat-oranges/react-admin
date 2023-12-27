import Budget from "../budget"
import Cards from "../cards"
import Financial from "../financial"
import Loans from "../loans"
import Report from "../report"
import Savings from "../savings"
import Subscriptions from "../subscriptions"
import Transactions from "../transactions"
import { ContentMainWrapper } from "./style"

const ContentMain = () => {
  return (
    <ContentMainWrapper className="main-content-holder">
      <div className="content-grid-one">
        <Cards/>
        <Transactions />
        <Report/>
      </div>

      <div className="content-grid-two">
        <Budget/>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Subscriptions />
            <Savings />
          </div>
        </div>
        <div className="grid-two-item">
          <div className="subgrid-two">
            <Loans />
            <Financial />
          </div>
        </div>
      </div>
    </ContentMainWrapper>
  )
}

export default ContentMain