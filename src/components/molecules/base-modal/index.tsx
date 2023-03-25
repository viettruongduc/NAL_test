import { ReactElement } from 'react'
import { Modal } from 'react-bootstrap'

interface Props {
  children: ReactElement
  title: string
  onCloseModal: () => void
  show: boolean
}

const BaseModal: React.FC<Props> = ({
  title,
  children,
  onCloseModal,
  show
}) => {
  return (
    <Modal show={show} onHide={onCloseModal}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  )
}

export default BaseModal
