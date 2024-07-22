import { Button, Container } from "@mui/material"

interface PreviewProps {
  onClose: () => void
  sanitizedHtml: string
}

export const Preview: React.FC<PreviewProps> = (props) => {
  return (
    <Container maxWidth="lg">
      <div
        data-testid="full-preview"
        dangerouslySetInnerHTML={{ __html: props.sanitizedHtml }}
      />
      <Button variant="text" onClick={props.onClose}>
        Close
      </Button>
    </Container>
  )
}
