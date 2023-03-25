interface Props {
  onHandleSearch?: (event: any) => void
  type: string
  placeholder?: string
}

const BaseInput: React.FC<Props> = ({ onHandleSearch, type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="form-control"
      onChange={onHandleSearch}
    />
  )
}

export default BaseInput
