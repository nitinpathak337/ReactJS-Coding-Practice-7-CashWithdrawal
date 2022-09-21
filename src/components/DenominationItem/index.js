// Write your code here
import './index.css'

const DenominationItem = props => {
  const {item, withdraw} = props
  const {value} = item

  const withdrawAmount = () => {
    withdraw(value)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={withdrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
