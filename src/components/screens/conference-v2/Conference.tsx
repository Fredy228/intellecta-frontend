"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { v4 } from "uuid";

import socket from "@/services/socket";
import { Actions } from "@/enums/socket/actions";

const Conference = () => {
  const [rooms, setRooms] = useState<string[]>([]);
  const router = useRouter();
  const rootNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on(Actions.SHARE_ROOMS, ({ roomsCurr = [] } = {}) => {
      if (rootNode.current) {
        setRooms(roomsCurr);
      }
    });
  }, []);

  const joinRoom = (roomID: string) => {
    router.push(`/dashboard/conference/${roomID}`);
  };

  const createRoom = (roomID: string) => {
    router.push(`/dashboard/conference/${roomID}`);
  };

  return (
    <div ref={rootNode}>
      <h2>Відео конференція</h2>
      <button type={"button"} onClick={() => createRoom(v4())}>
        Create room
      </button>
      <ul>
        {rooms.map((roomID) => (
          <li key={roomID}>
            {roomID}
            <button type={"button"} onClick={() => joinRoom(roomID)}>
              Join room
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Conference;
