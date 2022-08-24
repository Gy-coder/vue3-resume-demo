import { defineComponent, ref } from 'vue';
import Codemirror from 'codemirror-editor-vue3';

// language
// import 'codemirror/mode/md';

// theme
import 'codemirror/theme/dracula.css';

import "codemirror/mode/markdown/markdown.js";



const cmOptions = {
  mode: 'markdown', // Language mode
  // theme: 'dracula', // Theme
  lineNumbers: true, // Show line number
  smartIndent: true, // Smart indent
  indentUnit: 4, // The smart indent unit is 2 spaces in length
  foldGutter: true, // Code folding
  matchBrackets: true,
  autoCloseBrackets: true,
  styleActiveLine: true, // Display the style of the selected row
};

const App = defineComponent({
  setup() {
    const md = ref('');
    const onChange = (val: string) => {
      console.log('run', val);
    };
    return () => (
      <>
        {md.value}
        <Codemirror
          value={md.value}
          options={cmOptions}
          border
          placeholder="test placeholder"
          height="1500"
          width="100%"
          onChange={onChange}
        />
      </>
    );
  },
});

export default App;
