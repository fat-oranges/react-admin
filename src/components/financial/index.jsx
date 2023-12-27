import { iconsImgs } from "@/utils/images"
import CardTitle from "../card-title"
import { FinancialWrapper } from "./style"

const Financial = () => {
  return (
    <FinancialWrapper className="subgrid-two-item grid-common grid-c8">
      <CardTitle 
        title={`Financial Advice`}
        icon={iconsImgs.plus}
        alt={`plus`}
      />

      <div className="grid-c8-content">
        <p className="text text-silver-v1">Ipsum dolor sit amet consectetur, adispiscing elit. Iste, vitae ...</p>
      </div>
    </FinancialWrapper>
  )
}

export default Financial