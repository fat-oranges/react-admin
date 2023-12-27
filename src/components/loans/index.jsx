import { iconsImgs } from "@/utils/images"
import CardTitle from "../card-title"
import { LoansWrapper } from "./style"

const Loans = () => {
  return (
    <LoansWrapper className="subgrid-two-item grid-common grid-c7">
      <CardTitle 
        title={`Loans`}
        icon={iconsImgs.plus}
        alt={`plus`}
      />

      <div className="grid-c7-content">
        <div className="progress-bar">
          <div className="percent">
            <svg>
              <circle cx="105" cy="105" r="50"></circle>
              <circle cx="105" cy="105" r="50" style={{
                "--percent": "50"
              }}></circle>
            </svg>
            <div className="number">
              <h3>50<span>%</span></h3>
            </div>
          </div>
        </div>

        <ul className="data-list">
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Savings</span>
            <span className="data-item-value">$500,000</span>
          </li>
          <li className="data-item text-silver-v1">
            <span className="data-item-text">Target Reached</span>
            <span className="data-item-value">$250,000</span>
          </li>
        </ul>
      </div>
    </LoansWrapper>
  )
}

export default Loans