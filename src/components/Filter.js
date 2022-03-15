import { FaSearch } from 'react-icons/fa'

const Filter = ({ onChange, value }) => {
  return (
    <form className="form-control">
      <div className="input-group">
        <input
          type="text"
          placeholder="Type your country here"
          className="input input-primary w-full max-w-xs"
          onChange={onChange}
          value={value}
        />
        <button className="mx-1 btn btn-square">
          <FaSearch className="inline text-2xl" />
        </button>
      </div>
    </form>
  )
}
export default Filter
