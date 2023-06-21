import './App.css'
import WebSocketClient from './components/WebSocketClient'
import  useWebSocket  from 'react-use-websocket'

function App() {
  
  const WS_URL = 'ws://127.0.0.0:4000'
  useWebSocket(WS_URL, {
    onOpen: () => {
      console.log("Connection established")
    }
  })

  return (
    <>
      <WebSocketClient/>
    </>
  )
}

export default App


// A connection to a ws server cannot be created by just making a request from the browser's address bar
