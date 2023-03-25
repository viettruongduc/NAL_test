import { ReactElement } from 'react'

interface Props {
  children: ReactElement
  title: string
  onCloseModal: () => void
  showModalClassName: string
}

const BaseModal: React.FC<Props> = ({
  title,
  children,
  onCloseModal,
  showModalClassName
}) => {
  return (
    <div
      className={`modal fade ${showModalClassName}`}
      id="createModal"
      aria-labelledby="createModalLabel"
      aria-hidden="true"
      data-show={true}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createModalLabel">
              {title}
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              style={{ color: '#000' }}
              onClick={onCloseModal}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  )
}

export default BaseModal
