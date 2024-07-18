import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import MarkdownPreview from "./MarkdownPreview"

describe("MarkdownPreview Component", () => {
  test("renders the preview section", () => {
    render(<MarkdownPreview sanitizedHtml="" />)
    const previewElement = screen.getByText("Preview")
    expect(previewElement).toBeInTheDocument()
  })
})
