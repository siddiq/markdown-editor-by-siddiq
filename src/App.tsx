import React, { useState, useEffect } from "react"
import { Container, Grid, Typography } from "@mui/material"
import { marked } from "marked"
import DOMPurify from "dompurify"
import MarkdownEditor from "./components/MarkdownEditor"
import MarkdownPreview from "./components/MarkdownPreview"

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
          <MarkdownEditor
            markdown={markdown}
            handleInputChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <MarkdownPreview sanitizedHtml={sanitizedHtml} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
