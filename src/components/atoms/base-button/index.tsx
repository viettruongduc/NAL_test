interface Props {
  onClick: (event: any) => void
  buttonName: string
  className: string
}

const BaseButton: React.FC<Props> = ({ onClick, buttonName, className }) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      {buttonName}
    </button>
  )
}

export default BaseButton
