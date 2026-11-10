"use client";

import { useEffect, useState } from "react";

export default function FooterYear() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <p className="text-sm text-gray-600">
      © {year} France Queenie Boncodin. All Rights Reserved.
    </p>
  );
}