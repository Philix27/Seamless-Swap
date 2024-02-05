"use client";

import { SetStateAction, useEffect, useState } from "react";
import { trpc } from "./trpc";

export default function Clientside() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    trpc.hello.query({}).then((response: any) => {
      setGreeting(response);
    });
  });
  return <div>I am client side - {greeting}</div>;
}
