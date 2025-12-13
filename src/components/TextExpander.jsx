import { useState } from "react";

function TextExpander({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const displayText = isExpanded
    ? children
    : children.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <span>
      {displayText}{" "}
      <button
        className="border-b leading-3 pb-1"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "show less" : "show more"}
      </button>
    </span>
  );
}

export default TextExpander;
