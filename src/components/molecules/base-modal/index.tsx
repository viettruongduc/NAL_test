import { ReactElement } from 'react'
import { Modal } from 'react-bootstrap'

interface Props {
  children: ReactElement
  title?: string
  onHide: () => void
  show: boolean
}

const BaseModal: React.FC<Props> = ({ title, children, onHide, show }) => {
  return (
    <div>
      <Modal show={show} onHide={onHide} className="custom-modal">
        <Modal.Header>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </div>
  )
}

export default BaseModal
