// // PRE - JQUERY
// document.querySelectorAll("#listItemsTask ul li").forEach((item) => {
//   let text = item.innerText.trim();

//   if (text.startsWith("http://")) {
//     let link = document.createElement("a");
//     link.setAttribute("href", text);
//     link.innerHTML = text;

//     item.replaceChildren(link);
//   }
// });

// J-QUERY
$(function() {
  $("#listItemsTask ul li").each(function() {
    const text = $(this).text().trim();
    // if (text.startsWith("http://")) {
    //   const newAnchorTag = $("<a>").attr("href", text).text(text)
    //   $(this).empty().append(newAnchorTag)
    // }
    if (text.startsWith('http://'))
      $(this).html($('<a>', {href: text, text: text}));
  })
});
