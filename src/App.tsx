import React, { useState, useEffect } from "react"
import {
  Container,
  Grid,
  TextareaAutosize,
  Typography,
  Paper
} from "@mui/material"
import { marked } from "marked"
import DOMPurify from "dompurify"

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(() => {
    return localStorage.getItem("markdown") || ""
  })
  const [sanitizedHtml, setSanitizedHtml] = useState<string>("")

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newMarkdown = e.target.value
    setMarkdown(newMarkdown)
    localStorage.setItem("markdown", newMarkdown)
  }

  useEffect(() => {
    const processMarkdown = async () => {
      const rawMarkup = await marked(markdown)
      const sanitizedMarkup = DOMPurify.sanitize(rawMarkup)
      setSanitizedHtml(sanitizedMarkup)
    }

    processMarkdown()
  }, [markdown])

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Markdown Editor
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6" gutterBottom>
              Preview
            </Typography>
            <div
              data-testid="preview"
              dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
