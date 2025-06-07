
1. First, stop any running instances of your NestJS application and the HTTP server.
2. Start your NestJS application:
```sh
npm run start:dev
```
3. In a new terminal, start the HTTP server:
```sh
npx http-server -p 8080
```
4. Open your browser and go to http://localhost:8080/test.html
5. Open your browser's developer tools (F12 or right-click -> Inspect) and go to the Console tab to see detailed connection logs.
6. Click the "Connect" button and you should see:
   - Connection success message in the console
   - Welcome message from the server
   - You can then send messages and see the server's echo responses