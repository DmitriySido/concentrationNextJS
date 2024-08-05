import './LoadingItem.scss'

const LoadingItem = () => {

  return(
    <div className='spinner-wrapper'>
      <div className='spinner-inner'>
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
        <p>Ждёмс...</p>
      </div>
    </div>
  )
}

export default LoadingItem