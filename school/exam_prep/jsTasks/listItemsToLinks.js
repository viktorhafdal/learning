document.querySelectorAll("#listItemsTask ul li").forEach((item) => { // only target <li> in <ul> in id="listItemsTask"
  let text = item.innerText.trim();

  if (text.startsWith("http://")) {
    let link = document.createElement("a");
    link.setAttribute("href", text);
    link.textContent = text;

    item.replaceChildren(link);
  }
});
