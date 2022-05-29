import {
  ReactFlowProvider
} from "react-flow-renderer";
import { FlowCanvas } from './Pages';
import { ThemeProvider } from '@mui/system';
import theme from './assets/Theme';

function App() {
  return (
    <ReactFlowProvider>
      <ThemeProvider theme={theme}>
        <FlowCanvas />
      </ThemeProvider>

    </ReactFlowProvider>
  );
}

export default App;
