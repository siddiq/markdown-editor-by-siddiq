# Markdown Editor

## Technical Decisions

- React and MUI is used for UI - https://mui.com/material-ui/
- JS library for the markdown used - https://github.com/markedjs/marked
- Localstorage is used to keep the original markdown text available
- Live rendering is supported
- Sanitized HTML input using dompurify - https://github.com/cure53/DOMPurify

### Suggested improvements

- we can use a date library (date-fns etc) to format properly

## Local Development SEtup

```
npm start
```

## Test

```
npm test
```
