export function sourceCard(thumbnail, title) {
    var sourceCard = document.createElement('div');
    sourceCard.classList.add('sourceCard');
    var sourceThumbnail = document.createElement('img');
    sourceThumbnail.classList.add('sourceThumbnail');
    sourceThumbnail.src = thumbnail.toDataURL();
    var sourceTitle = document.createElement('div');
    sourceTitle.classList.add('sourceTitle');
    sourceTitle.innerHTML = title;

    sourceCard.appendChild(sourceThumbnail);
    sourceCard.appendChild(sourceTitle);

    return sourceCard;
}
