// src/App.jsx

import { useState } from 'react';
import { marked } from 'marked';
import Footer from './components/Footer.jsx'; // Import the footer
import './main.css';

const defaultMarkdown = `
# Welcome to My Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`javascript
// this is a multi-line code block:
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return "Hello, World!";
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
`;

function App() {
  const [markdownText, setMarkdownText] = useState(defaultMarkdown);

  marked.setOptions({
    breaks: true,
  });

  const createMarkup = () => {
    return { __html: marked(markdownText) };
  };

  return (
    // We add a wrapper to manage the flex layout with the footer
    <div className="app-wrapper">
      <div className="app-container">
        <div className="editor-pane">
          <h2 className="pane-title">Editor</h2>
          <textarea
            id="editor"
            value={markdownText}
            onChange={(e) => setMarkdownText(e.target.value)}
          />
        </div>
        <div className="preview-pane">
          <h2 className="pane-title">Preview</h2>
          <div
            id="preview"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
      <Footer /> {/* Here is our shiny new footer! */}
    </div>
  );
}

export default App;