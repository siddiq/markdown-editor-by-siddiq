import React from "react"
import { Typography, Paper } from "@mui/material"

interface MarkdownPreviewProps {
  sanitizedHtml: string
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ sanitizedHtml }) => {
  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6" gutterBottom>
        Preview
      </Typography>
      <div
        data-testid="preview"
        dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
      />
    </Paper>
  )
}

export default MarkdownPreview
