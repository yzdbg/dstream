
function getClass(idx) {
  return idx % 2 === 0 ? "a" : "b";
}

function stopAuto() {
  cpl = -1;
  document.getElementById("status").innerHTML = "";
  audio.src = "";
}




function setQueue() {
  document.getElementById("status").innerHTML = queue
    .map(
      (e, i) =>
        (i === 0 ? "<b>" : "") +
        '<span class="c" onclick="remove(' +
        i +
        ')">' +
        e +
        "</span>" +
        (i === 0 ? '</b>&nbsp;&nbsp;<span id="playtime"></span>' : "")
    )
    .join("<br>");
}

function remove(idx) {
  if (idx === 0) {
    playNext();
  } else {
    queue.splice(idx, 1);
    setQueue();
  }
}

let playing = false;

function playFrom(file, idx) {
  add(file);
  if (idx + 1 < pl.length);
  cpl = idx + 1;
}

function playNow(file) {
  queue.splice(1, 0, file);
  playNext();
}



let tim = null;
document.addEventListener("DOMContentLoaded", () => {
  tim = document.getElementById("tim");

  tim.addEventListener("change", (event) => {
    audio.currentTime = (audio.duration / 100) * tim.value;
  });
});

document.addEventListener(
  "keydown",
  (event) => {
    if (document.activeElement !== document.getElementById("search")) {
      let hit = false;
      if (event.code === "KeyH") {
        hit = true;
        const help = document.getElementById("help");
        console.log("help");
        if (help.style.display !== "none") {
          help.style.display = "none";
        } else {
          help.style.display = "block";
        }
      }
      if (event.code === "KeyJ") {
        hit = true;
        document.getElementById("search").focus();
      }

      if (event.code === "Comma") {
        hit = true;
        if (curPage === 0) {
          curPage = pl[0].id - 1;
        } else {
          curPage -= 10;
        }
        setList(false, curPage);
      }

      if (event.code === "Period") {
        hit = true;
        if (curPage === 0) {
          curPage = pl[0].id - 1;
        } else {
          curPage += 10;
        }
        setList(false, curPage);
      }

      if (event.code === "ArrowLeft") {
        hit = true;
        if (audio.currentTime < 10) {
          audio.currentTime = 0;
        } else {
          audio.currentTime -= 10;
        }
      }

      if (event.code === "ArrowRight") {
        hit = true;
        if (audio.currentTime + 10 < audio.duration) {
          audio.currentTime += 10;
        }
      }

      if (hit) {
        event.stopPropagation();
        event.preventDefault();
      }
    }

    if (event.code === "Insert") {
      playNext();
    }

    if (event.code === "Enter") {
      add(pl[0].file);
    }
  },
  false
);

let updateTime = setInterval(() => {
  const playtime = document.getElementById("playtime");
  if (playtime) {
    if (tim) {
      tim.value = (100 / audio.duration) * audio.currentTime;
    }
    const a = ("" + Math.floor(audio.currentTime / 60)).padStart(2, "0");
    const b = ("" + Math.floor(audio.currentTime % 60)).padStart(2, "0");
    const c = ("" + Math.floor(audio.duration / 60)).padStart(2, "0");
    const d = ("" + Math.floor(audio.duration % 60)).padStart(2, "0");
    playtime.innerHTML = `${a}:${b} / ${c}:${d}`;
    let file = audio.currentSrc;
    file = file.substr(file.lastIndexOf("/") + 1);
    file = file.substr(0, file.lastIndexOf("."));
    document.title = file.replaceAll("%20", " ");
  }
}, 250);
