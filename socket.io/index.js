const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  res.sendFile("./public/index.html");
});

app.get("/about", (req, res) => {
  res.send(`
    <div style="display:flex; justify-content:center; flex-wrap:wrap; gap:20px; padding:40px; background:#f0f0f0;">
  
  <!-- Left Section -->
  <section style="flex:1; min-width:700px; max-width:1500px; background-color:#ffffff; padding:30px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.1); font-family:Segoe UI, Tahoma, Geneva, Verdana, sans-serif;">
    <h2 style="text-align:center; color:#333;">Why Use <code>Socket.IO</code> in Node.js?</h2>
    <p style="font-size:16px; line-height:1.8; color:#444;">
      Normally, HTTP ek <strong>request-response</strong> model pe kaam karta hai — client request bhejta hai, server response deta hai, aur connection close ho jaata hai.<br/>
      Lekin real-time apps ko chahiye continuous 2-way communication. Yahin pe <strong>Socket.IO</strong> ka use hota hai.
    </p>
    <h3 style="color:#222;">📌 Long Polling Overkill?</h3>
    <p style="font-size:16px; line-height:1.8; color:#444;">
      Pehle hum real-time ke liye <strong>long polling</strong> use karte the, jisme client baar-baar server se poochta tha: "kuch naya hai kya?"<br/>
      Isse network pe unnecessary load padta tha (overkill), aur latency bhi zyada hoti thi.
    </p>
    <h3 style="color:#222;">⚡ WebSocket: Real Solution</h3>
    <p style="font-size:16px; line-height:1.8; color:#444;">
      <strong>WebSocket</strong> ek protocol hai jo HTTP se shuru hota hai, lekin ek baar connection establish ho jaane ke baad, ye duplex mode me chalne lagta hai. <br/>
      Server & client dono ek dusre ko <strong>real-time messages</strong> bhej sakte hain bina bar-bar connection open-close kiye.
    </p>
    <h3 style="color:#222;">🚀 Socket.IO Kya Karta Hai?</h3>
    <ul style="font-size:16px; line-height:1.8; color:#444;">
      <li>WebSocket par built hai, lekin fallback ke liye polling bhi support karta hai.</li>
      <li>Custom events, broadcasting, rooms, namespaces, etc. support karta hai.</li>
      <li>Multiple browser support aur error-handling ke sath aata hai.</li>
    </ul>
    <h3 style="color:#222;">🛠️ Node.js Server-side Code (Only)</h3>
    <pre style="background-color:#f5f5f5; padding:10px; border-radius:6px; overflow-x:auto; font-size:13px;">
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("Ek user connect hua");

  socket.on("chat-message", (msg) => {
    console.log("User bol raha hai:", msg);
    io.emit("chat-message", msg);
  });

  socket.on("disconnect", () => {
    console.log("User gaya");
  });
});

server.listen(3000, () => {
  console.log("Server chal gaya port 3000 pe");
});
    </pre>
    <p style="font-size:16px; line-height:1.8; color:#444;">
      <strong>Conclusion:</strong> Socket.IO aapke Node.js app me easily real-time communication add kar deta hai — bina manually WebSocket handle kiye.
    </p>
  </section>

  <!-- Right Section -->
  <section style="flex:1; min-width:700px; max-width:1500px; background-color:#ffffff; padding:30px; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.1); font-family:Segoe UI, Tahoma, Geneva, Verdana, sans-serif;">
    <h2 style="text-align:center; color:#333333; margin-bottom:20px;">Socket.IO Explained (Hinglish)</h2>
    <p style="font-size:16px; line-height:1.8; color:#444444;">
      <strong>Socket.IO</strong> ek JavaScript library hai jo <strong>real-time, bidirectional</strong> aur event-based communication allow karti hai between browser aur server.
    </p>
    <p style="font-size:16px; line-height:1.8; color:#444444;">
      Jab hume real-time features chahiye hote hain jaise ki <strong>chat apps, live notifications, real-time location tracking, multiplayer games</strong>, tab Socket.IO use hota hai.
    </p>
    <h3 style="color:#222222;">Kaise kaam karta hai?</h3>
    <ul style="font-size:16px; line-height:1.8; color:#444444;">
      <li>Client aur server ke beech ek <strong>WebSocket connection</strong> establish hota hai.</li>
      <li>Agar browser WebSocket support nahi karta, to fallback mechanism se <strong>long polling</strong> use hota hai.</li>
      <li>Dono sides (client & server) par aap events define kar sakte ho jaise: <code>socket.on('message')</code> ya <code>socket.emit('chat')</code>.</li>
    </ul>
    <h3 style="color:#222222;">Server-side Setup (Node.js):</h3>
    <pre style="background-color:#f5f5f5; padding:10px; border-radius:6px; overflow-x:auto; font-size:13px;">
const http = require("http");
const express = require("express");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("chatMessage", (msg) => {
    io.emit("chatMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(3000);
    </pre>
    <h3 style="color:#222222;">Client-side Example:</h3>
    <pre style="background-color:#f5f5f5; padding:10px; border-radius:6px; overflow-x:auto; font-size:13px;">
&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
&lt;script&gt;
  const socket = io();

  socket.on("chatMessage", (msg) => {
    console.log("Message from server:", msg);
  });

  // Send message
  socket.emit("chatMessage", "Hello server!");
&lt;/script&gt;
    </pre>
    <h3 style="color:#222222;">Socket.IO ke Fayde:</h3>
    <ul style="font-size:16px; line-height:1.8; color:#444444;">
      <li>Real-time communication bina page reload ke</li>
      <li>Custom events define kar sakte ho</li>
      <li>Broadcasting (ek message sab clients ko bhejna)</li>
      <li>Fallback system (agar WebSocket fail ho jaye)</li>
      <li>Room and namespace feature for grouping</li>
    </ul>
    <p style="font-size:16px; line-height:1.8; color:#444444;">
      Summary me, <strong>Socket.IO</strong> aapko enable karta hai ki aap <strong>live, engaging</strong> web apps bana sako jisme fast updates aur real-time feedback mile.
    </p>
  </section>
</div>  
  `);
});

io.on("connection", (socket) => {
  console.log("user connected", socket.id);
  socket.on("user-send-message", (message) => {
    console.log("New message is :", message);
    io.emit("message", message);
  });
});

server.listen(8100, () => {
  console.log("Server listening at port 8100");
});
