/* eslint-disable testing-library/no-unnecessary-act */
import React from "react"
import { render, screen, fireEvent, act } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import App from "./App"

describe("App Component", () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test("renders Markdown Editor title", () => {
    render(<App />)
    const titleElement = screen.getByText(/Markdown Editor/i)
    expect(titleElement).toBeInTheDocument()
  })

  test("renders editor and preview sections", () => {
    render(<App />)
    const editorElement = screen.getByText("Editor")
    expect(editorElement).toBeInTheDocument()

    const previewElement = screen.getByText("Preview")
    expect(previewElement).toBeInTheDocument()
  })

  test("loads markdown from local storage and updates preview", async () => {
    localStorage.setItem("markdown", "# loaded from local storage")

    await act(async () => {
      render(<App />)
    })

    const textarea = await screen.findByTestId("input")
    expect(textarea).toHaveValue("# loaded from local storage")

    const previewHtml = await screen.findByTestId("preview")
    expect(previewHtml).toHaveTextContent("loaded from local storage")
  })

  test("updates preview as markdown is typed", async () => {
    render(<App />)
    const textarea = await screen.findByTestId("input")

    const previewHtml = await screen.findByTestId("preview")
    expect(previewHtml).not.toContainHTML("<h1>Heading</h1>")
    expect(previewHtml).not.toContainHTML("<li>List Item 123 123 123</li>")
    expect(previewHtml).not.toContainHTML("<li>List Item 456 789</li>")

    await act(async () => {
      fireEvent.change(textarea, {
        target: {
          value: [
            "# Heading",
            "",
            "* List Item 123 123 123",
            "* List Item 456 789"
          ].join("\n")
        }
      })
    })

    expect(previewHtml).toContainHTML("<h1>Heading</h1>")
    expect(previewHtml).toContainHTML("<li>List Item 123 123 123</li>")
    expect(previewHtml).toContainHTML("<li>List Item 456 789</li>")
  })
})
