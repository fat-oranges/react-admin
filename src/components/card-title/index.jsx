import PropTypes from 'prop-types'
import { CardTitleWrapper } from "./style"

const CardTitle = ({title, icon, alt}) => {
  return (
    <CardTitleWrapper>
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">{title}</h3>
        <button className="grid-c-title-icon">
          <img src={icon} alt={alt} />
        </button>
      </div>
    </CardTitleWrapper>
  )
}

CardTitle.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  alt: PropTypes.string
}

export default CardTitle