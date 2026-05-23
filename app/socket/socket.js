
import sql from "@/lib/db.connect";
import { Server } from "socket.io";
const io = new Server(3001, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("User connected:", socket.id);
    // add socket id in users-table //
    socket.on('current_user',(data)=>{
     const id = data.user_id;
    })
    
    socket.on("disconnect", () => {
        console.log("Disconnected:", socket.id);
    });
});