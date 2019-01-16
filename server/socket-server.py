# Uses https://github.com/dpallot/simple-websocket-server

from SimpleWebSocketServer import SimpleWebSocketServer, WebSocket

clients = []
class Broadcaster(WebSocket):

    def handleMessage(self):
        message = self.data
        if message in ['1', '2', '3', '4']:
            for client in clients:
                if client != self:
                    client.sendMessage(message)

    def handleConnected(self):
        print(self.address, 'connected')
        for client in clients:
            client.sendMessage(self.address[0] + u' - connected')
        clients.append(self)
        print(clients)

    def handleClose(self):
        clients.remove(self)
        print(self.address, 'closed')
        for client in clients:
            client.sendMessage(self.address[0] + u' - disconnected')

server = SimpleWebSocketServer('', 5000, Broadcaster)
server.serveforever()
