import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header"
import Body from "./components/Body"
import { MessageProvider } from "./context/Context";
function App() {
  return (
    <div className="flex flex-col h-dvh box-border overflow-hidden">
    <MessageProvider>
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Body />
      </div>
    </MessageProvider>
    <ToastContainer position="bottom-right" />
  </div>

  );
}

export default App;
