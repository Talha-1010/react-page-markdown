import Markdown from 'react-page-markdown-plugin';
import Editor from '@react-page/editor';
import '@react-page/editor/lib/index.css';
import { useState } from 'react';
import { CopyBlock,CodeBlock,dracula } from "react-code-blocks";
const cellPlugins = [Markdown]

function App() {
  const [value, setValue] = useState('');


  return (

    <div style={{background:"lightgray" , display:"flex-col" , flexDirection:"center",borderRadius: "25px",  padding: "25px 50px 75px 100px"}} >

        <div className='intro'>
            <h1>
            react-page-markdown-plugin
            </h1>
            <p>This Markdown plugin allows one to render markdown in a ReactPage component. It uses the react-markdown library to render user-inputted markdown, basic and advanced, on-the-fly.</p>
            <h2>
            What is Markdown, even?
            </h2>
            <p>
            It is a format which allows a user to easily define headings, lists and images etc, right through simple syntax. This README is written in Markdown too!
            </p>
            <h2>
            Installation
            </h2>
            <p>
            using npm
            </p>

            

            <div style={{ fontFamily: 'IBM Plex Mono' }}>
              <CopyBlock
                text={`npm i react-page-markdown-plugin`}
                codeBlock
                language="powershell"
                theme={dracula}
              />
            </div>

            <p>
              or using yarn
            </p>

            <div style={{ fontFamily: 'IBM Plex Mono' }}>
              <CopyBlock
                text={`yarn add react-page-markdown-plugin`}
                codeBlock
                language="powershell"
                theme={dracula}
              />
            </div>

            <h2>Instantiation</h2>
            <p>Define the <code style={{background:"lightgray"}}>react-page-markdown-plugin </code>  as part of the cellPlugins list.</p>

            <div style={{ fontFamily: 'IBM Plex Mono' }}>
              <CopyBlock
                text={`import Markdown from './testing.tsx';
const cellPlugins = [
// Other cell plugins as usual
Markdown
];
                `}
                codeBlock
                language="js"
                theme={dracula}
              />
            </div>

            <h2>Usage Example</h2>

            <div style={{ fontFamily: 'IBM Plex Mono' }}>
              <CopyBlock
                text={`import Markdown from './testing.tsx'
import Editor from '@react-page/editor';

const cellPlugins = [Markdown];

export default function SimpleExample() {
  const [value, setValue] = useState("");

  return (
    <div>
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
    </div>
  );
}`}
                codeBlock
                language="js"
                theme={dracula}
              />
            </div>  
           
           <h2>About ReactPage</h2>
           <p>ReactPage is a smart, extensible and modern editor (“WYSIWYG”) for the web written in React. If you are fed up with the limitations of contenteditable, visit the <a href='https://react-page.github.io/docs/#/'>official documentation</a> of ReactPage.</p>
           <h3>ReactPage Demo</h3>
           <p>A demo can be found on <a href='https://react-page.github.io/'>Demo</a> which reflects the stable release channel on npm. the current beta version is also available as a demo: <a href='https://react-page.github.io/beta/'>beta Demo</a></p>
        
        </div>
  
        <div className="demo">
           <h2>
           Markdown Plugin Demo:
           </h2>
           <div >
            <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
           </div>
        </div>


        
    </div>

    
  );
}

export default App;
