function toggleFaq(button) {
  const allFaqs = document.querySelectorAll(".faq-item");
  const content = button.nextElementSibling;
  const icon = button.querySelector("svg");
  const isOpen = content.style.maxHeight;

  // Fecha todos antes
  allFaqs.forEach((item) => {
    const btn = item.querySelector(".faq-button");
    const cnt = item.querySelector(".faq-content");
    const svg = item.querySelector("svg");
    btn.classList.remove("bg-slate-800");
    svg.classList.remove("rotate-180");
    cnt.style.maxHeight = null;
    cnt.style.opacity = 0;
  });

  // Se não estava aberto, reabre
  if (!isOpen) {
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.opacity = 1;
    button.classList.add("bg-slate-800");
    icon.classList.add("rotate-180");
  }
}
