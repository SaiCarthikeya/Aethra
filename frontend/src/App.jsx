import Header from "./components/Header"
import Body from "./components/Body"
import { MessageProvider } from "./context/Messages";
function App() {
  return (
    <div className="flex flex-col h-dvh box-border">
      <MessageProvider>
        <Header />
        <Body />
      </MessageProvider>
    </div>
  );
}

export default App;
