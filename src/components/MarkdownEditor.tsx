import React from "react"
import { TextareaAutosize, Typography, Paper } from "@mui/material"

interface MarkdownEditorProps {
  markdown: string
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  markdown,
  handleInputChange
}) => {
  return (
    <Paper elevation={3} style={{ padding: "16px" }}>
      <Typography variant="h6" gutterBottom>
        Editor
      </Typography>
      <TextareaAutosize
        data-testid="input"
        minRows={10}
        value={markdown}
        onChange={handleInputChange}
        placeholder="Markdown input ..."
        data-gramm="false"
        style={{ width: "100%" }}
      />
    </Paper>
  )
}

export default MarkdownEditor
