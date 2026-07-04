"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("id-ID", {
  timeZone: "Asia/Jakarta",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

export function IndonesiaClock() {
  const [time, setTime] = useState("--.--");

  useEffect(() => {
    const sync = () => setTime(formatter.format(new Date()).replace(":", "."));
    sync();
    const interval = window.setInterval(sync, 15_000);
    return () => window.clearInterval(interval);
  }, []);

  return <span className="indonesia-clock">Indonesia, WIB {time}</span>;
}
