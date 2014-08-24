var tabs = document.querySelector("paper-tabs");
var list = document.querySelector("post-list");

tabs.addEventListener("core-select", function() {
    console.info(list.show);
    list.show = tabs.selected;
});
