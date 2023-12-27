import { iconsImgs } from "@/utils/images"
import { ReportWrapper } from "./style"

import { reportData } from "@/data/data"
import CardTitle from "../card-title"

const Report = () => {
  return (
    <ReportWrapper className="grid-one-item grid-common grid-c3">
      <CardTitle
        title={`Report`}
        icon={iconsImgs.plus}
        alt={`plus`}
      />

      <div className="grid-c3-content">
        <div className="grid-chart">
          <div className="chart-vert-value">
            <span>100</span>
            <span>75</span>
            <span>50</span>
            <span>25</span>
            <span>0</span>
          </div>
          {
            reportData?.map(item => (
              <div className="grid-chart-bar" key={item.id}>
                <div className="bar-wrapper">
                  <div className="bar-item1" 
                       style={{height: `${item.value1 !== null ? '40%' : ''}`}}
                  >
                  </div>
                  <div className="bar-item2" 
                       style={{height: `${item.value2 !== null ? '60%' : ''}`}}
                  >
                  </div>
                </div>
                <span className="grid-hortz-value">jay</span>
              </div>
            ))
          }
        </div>
      </div>
    </ReportWrapper>
  )
}

export default Report