function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = "";
  let html2 = "";
  //Filter more than 0 and less than 200k
  let peoplefiltered = people.filter((value, index, arr) => value[11] > 0);
  //Filter more than 200k
  let peoplefilteredTwo = people.filter(
    (value, index, arr) => value[11] >= 200000
  );
  //Sorted by amount (Greatest to lowest)
  let peopleSorted = peoplefiltered.sort((a, b) => b[11] - a[11]);
  for (let i = 0; i < 5; i++) {
    html +=
      '<li class="post">' +
      "<h2>" +
      peopleSorted[i][8] +
      "</h2>" +
      "<h3>" +
      peopleSorted[i][11] +
      "</h3>";
  }
  for (let k = 0; k < peoplefilteredTwo.length; k++) {
    html2 +=
      '<li class="post">' +
      "<h2>" +
      peoplefilteredTwo[k][8] +
      "</h2>" +
      "<h3>" +
      peoplefilteredTwo[k][11] +
      "</h3>";
  }
  container.innerHTML =
    '<div id="topSalaries"><ul id="data">' + html + "</ul></div>";
    container.innerHTML +=
    '<div id="topEmployees"><ul id="data">' + html2 + "</ul></div>";
}
renderPosts(boston, document.getElementById("container"));
