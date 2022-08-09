import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p>{year} &copy; Nidup</p>
    </div>
  );
}
