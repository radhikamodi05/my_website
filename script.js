const revealNodes = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.14, rootMargin: "0px 0px -40px 0px" }
  );

  revealNodes.forEach((node) => io.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}
