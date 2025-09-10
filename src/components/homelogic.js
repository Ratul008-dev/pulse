function homeLogic() {
  let nextDom = document.getElementById("next");
  let prevDom = document.getElementById("prev");
  let primeDom = document.querySelector(".prime");
  let listItemDom = document.querySelector(".prime .list");
  let thumbnailDom = document.querySelector(".prime .thumbnail");

  nextDom.onclick = function () {
    showSlider("next");
  };
  prevDom.onclick = function () {
    showSlider("prev");
  };
  let timeRunning = 3000;
  
  let runTimeout;
  
  
  function showSlider(type) {
      let itemSlider = document.querySelectorAll(".prime .list .item");
      let itemThumbnail = document.querySelectorAll(".prime .thumbnail .thumb-item");
      if (type === "next") {
      listItemDom.appendChild(itemSlider[0]);
      thumbnailDom.appendChild(itemThumbnail[0]);
      primeDom.classList.add("transition-next");
    } else if (type === "prev") {
      const positionLastItem = itemSlider.length - 1;
      listItemDom.insertBefore(itemSlider[positionLastItem], itemSlider[0]);
      thumbnailDom.insertBefore(itemThumbnail[positionLastItem], itemThumbnail[0]);
      primeDom.classList.add("transition-prev");
    }
      clearTimeout(runTimeout);
      runTimeout = setTimeout(() => {
        primeDom.classList.remove("transition-next");
        primeDom.classList.remove("transition-prev");
      }, timeRunning);
    }

    
}

export default homeLogic;