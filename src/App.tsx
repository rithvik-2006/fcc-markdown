import React, { useState } from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';

function App() {
  const defaultMarkdown = `
  # Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)


This is just a basic example. Feel free to modify and experiment with different Markdown syntax to see how your Markdown previewer handles various formatting and content types.`;

  const [MarkdownText, setMarkdownText] = useState<string>(defaultMarkdown);

  

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Markdown Previewer</h1>
      <div className="boxes-container">
        {/* Textarea for input markdown */}
        <textarea
          name="editor"
          id="editor"
          value={MarkdownText}
          onChange={(e)=>{setMarkdownText(e.target.value)}}
          placeholder="Type your Markdown here..."
        ></textarea>
        
        {/* Container for displaying markdown preview */}
        <div id="preview">
          <ReactMarkdown>{MarkdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

export default App;
