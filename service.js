function expandIMG(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");

    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;

    expandImg.parentElement.style.display = "block";

    var paragraph = imgs.nextElementSibling;

    if (paragraph && paragraph.classList.contains("imgs-text")) {
        paragraph.classList.add("expanded");
    }
}
function closeIMG() {
    // Hide the expanded image container
    document.getElementById("expanded-container").style.display = "none";

    // Hide all expanded paragraphs
    document.querySelectorAll(".imgs-text.expanded").forEach(function (paragraph) {
        paragraph.classList.remove("expanded");
    });
}