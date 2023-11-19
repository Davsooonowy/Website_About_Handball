// Title change, after tab change

const pageTitle = "piłka ręczna w moim życiu";
const newTitle = "znudziłem cię?";

function handleVisibilityChange() {
    if (document.hidden) {
        document.title = newTitle;
    } else {
        document.title = pageTitle;
    }
}

document.addEventListener("visibilitychange", handleVisibilityChange);