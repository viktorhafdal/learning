const footnotesSection = document.querySelector('#footnotes')
const footnoteButton = footnotesSection.querySelector('#footnoteButton')
footnoteButton.addEventListener("click", () => { findFootnotes() })

const footnotePopupDiv = document.createElement("div")
footnotePopupDiv.setAttribute("id", "footnoteDiv")
footnotePopupDiv.style.visibility = 'hidden'
footnotePopupDiv.style.position = 'absolute'
footnotePopupDiv.style.border = '1px solid gray'
footnotePopupDiv.style.backgroundColor = 'darkslategray'
footnotePopupDiv.style.color = 'white'
footnotePopupDiv.style.padding = '5px'
footnotePopupDiv.style.zIndex = '1000'
footnotePopupDiv.className = "footnote"

document.body.append(footnotePopupDiv)

footnotePopupDiv.addEventListener("mouseleave", () => {
  footnotePopupDiv.style.visibility = 'hidden'
})

function findFootnotes() {
  const childTextAreas = footnotesSection.querySelectorAll("div textarea")
  let footnoteCounter = 0

  childTextAreas.forEach(textarea => {

    if (textarea.hasAttribute("data-footnote")) {
      footnoteCounter++

      let span = document.createElement("span")
      let sup = document.createElement("sup")
      let footnote = document.createTextNode(`Footnote ${footnoteCounter}`)

      sup.appendChild(footnote)
      span.appendChild(sup)

      span.addEventListener("click", (e) => {
        showFootnote(textarea.value, e)
      })

      textarea.replaceWith(span)
    }
  });
}

function showFootnote(footnoteHtml, e) {
  footnotePopupDiv.innerHTML = footnoteHtml
  footnotePopupDiv.style.position = 'absolute'
  footnotePopupDiv.style.top = `${e.clientY}px`
  footnotePopupDiv.style.left = `${e.clientX}px`
  footnotePopupDiv.style.visibility = 'visible'
}
