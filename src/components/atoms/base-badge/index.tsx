import Alert from 'react-bootstrap/Alert'

interface Props {
  content: string
  keyName: string
  variant: string
  show: boolean
}

const BaseBadge: React.FC<Props> = ({ content, variant, keyName, show }) => {
  return (
    <Alert key={keyName} variant={variant} show={show}>
      {content}
    </Alert>
  )
}

export default BaseBadge
