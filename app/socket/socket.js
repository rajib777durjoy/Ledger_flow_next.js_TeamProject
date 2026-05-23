import { Server } from "socket.io";

const io = new Server(3001, {
  cors: {
    origin: ["http://localhost:3000"],
  },
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("current_user", (data) => {
    console.log("User ID:", data.user_id);

    // example: save socket.id with user_id
  });

  socket.on("disconnect", () => {
    console.log("Disconnected:", socket.id);
  });
});