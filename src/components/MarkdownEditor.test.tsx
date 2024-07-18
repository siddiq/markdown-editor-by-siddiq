/* eslint-disable testing-library/no-unnecessary-act */
import React from "react"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import MarkdownEditor from "./MarkdownEditor"

describe("MarkdownEditor Component", () => {
  test("renders the editor section", () => {
    render(<MarkdownEditor markdown="" handleInputChange={() => {}} />)
    const editorElement = screen.getByText("Editor")
    expect(editorElement).toBeInTheDocument()
  })
})
