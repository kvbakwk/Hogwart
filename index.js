document.querySelector("button").onclick = () =>
  document
    .querySelector("input")
    .value.split("")
    .forEach((char, i) =>
      setTimeout(
        () => (document.querySelector("p").textContent += char),
        300 * i
      )
    );
