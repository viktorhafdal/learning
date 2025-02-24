// const body = document.querySelector("body");
//
// const listHead = body.querySelectorAll("ul");
//
// const listItems = listHead.getElementsByTagName("li");

document.querySelectorAll("#listItemsTask ul li").forEach((item) => {
  let text = item.innerText.trim();

  if (text.startsWith("http://")) {
    let link = document.createElement("a");
    link.setAttribute("href", text);
    link.innerHTML = text;

    item.replaceChildren(link);
  }
});

// for (let i = 0; i < listItems.length; i++) {
//   const text = listItems[i].innerText;
//
//   if (text.startsWith("http://") || text.startsWith("https://")) {
//     listItems[i].innerHTML = `<a href="${text}">${text}</a>`;
//   }
// }
