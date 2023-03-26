interface Props {
  type: string
  onChange?: (event: any) => void
  placeholder?: string
  className?: string
}

const BaseInput: React.FC<Props> = ({
  type,
  onChange,
  placeholder,
  className
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      onChange={onChange}
    />
  )
}

export default BaseInput
