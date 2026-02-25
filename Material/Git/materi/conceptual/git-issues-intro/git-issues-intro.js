function toggleSegment(element) {
  const parent = element.parentElement;
  parent.classList.toggle("active");
  const span = element.querySelector("span");
  span.innerText = parent.classList.contains("active") ? "-" : "+";
}
