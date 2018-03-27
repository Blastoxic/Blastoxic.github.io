var cat = document.getElementById('cat');

cat.addEventListener("mouseover", function() {
    /* CHANGE THE HOVER IMAGE HERE */
    cat.setAttribute("src", "https://img.buzzfeed.com/buzzfeed-static/static/2017-01/3/14/asset/buzzfeed-prod-fastlane-01/anigif_sub-buzz-27695-1483472364-6.gif");
});

cat.addEventListener("mouseout", function() {
    /* CHANGE THE HOVER IMAGE HERE TOO */
    cat.setAttribute("src", "https://www.liriklab.com/liriklab-content/uploads/2017/12/lil-pump-gucci-gang-lyrics-1280x640.jpg");
});