import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header"
import Body from "./components/Body"
import { MessageProvider } from "./context/Context";
function App() {
  return (
    <div className="flex flex-col h-dvh box-border">
      <MessageProvider>
        <Header />
        <Body />
      </MessageProvider>
      <ToastContainer position="bottom-right"/>
    </div>
  );
}

export default App;
