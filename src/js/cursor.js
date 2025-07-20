const floatingCursor = document.getElementById("floating-cursor");
const customTarget = document.getElementById("custom-cursor");

document.addEventListener("mousemove", (e) => {
  const isInside = customTarget.contains(e.target);

  if (isInside) {
    floatingCursor.classList.add("opacity-100", "scale-100");
    floatingCursor.classList.remove("opacity-0", "scale-95");

    const cursorWidth = floatingCursor.offsetWidth;
    const cursorHeight = floatingCursor.offsetHeight;

    floatingCursor.style.left = `${e.clientX - cursorWidth / 2}px`;
    floatingCursor.style.top = `${e.clientY - cursorHeight / 2}px`;
  } else {
    floatingCursor.classList.remove("opacity-100", "scale-100");
    floatingCursor.classList.add("opacity-0", "scale-95");
  }
});
