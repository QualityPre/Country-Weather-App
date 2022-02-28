const Filter = ({ onChange, value }) => {
  return (
    <form>
      Find Countries <input onChange={onChange} value={value} />
    </form>
  )
}
export default Filter
