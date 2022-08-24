import { defineComponent, ref, computed } from 'vue';
import Codemirror from 'codemirror-editor-vue3';
import { debounce } from 'lodash';
import MarkdownIt from 'markdown-it';
const markdownIt = new MarkdownIt();

// language
// import 'codemirror/mode/md';

// theme
import 'codemirror/theme/dracula.css';

import 'codemirror/mode/markdown/markdown.js';

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
      md.value = val;
    };
    const html = computed(() => {
      return markdownIt.render(md.value);
    });
    return () => (
      <>
        <div v-html={html.value}></div>
        <Codemirror
          value={md.value}
          options={cmOptions}
          border
          placeholder="test placeholder"
          height="1500"
          width="100%"
          onChange={debounce(onChange, 300)}
        />
      </>
    );
  },
});

export default App;
