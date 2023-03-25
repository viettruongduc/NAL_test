interface Props {
  onClick: (event: any) => void
  dataTarget: string
  buttonName: string
}

const BaseButton: React.FC<Props> = ({ onClick, dataTarget, buttonName }) => {
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={onClick}
      data-toggle="modal"
      data-target={dataTarget}
    >
      {buttonName}
    </button>
  )
}

export default BaseButton
