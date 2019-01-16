# This script can be used to test connection to the websocket server.

import websocket

SOCKET_ADDR = "wss://neo-edu.io/websocket"

def on_message(ws, message):
    if len(message) > 200:
        message = message[:200]+'..'
    print(message)

def on_error(ws, error):
    print(error)

def on_close(ws):
    print("### socket connection closed ###")

def on_open(ws):
    print("### socket connection opened ###")


if __name__ == "__main__":
    websocket.enableTrace(True)
    ws = websocket.WebSocketApp(SOCKET_ADDR,
                              on_message = on_message,
                              on_error = on_error,
                              on_close = on_close)
    ws.on_open = on_open
    ws.run_forever()
