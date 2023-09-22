// This js uses github api to show latest update to portfolio on landing page

const apiUrl = "https://api.github.com/repos/KevinTrinh1227/Kevin-Trinh";
async function getDate() {
  const response = await fetch(apiUrl);
  const push = await response.json();

  //lastUodate = pushed_at value on api for the apiUrl
  lastPushed = push.pushed_at;

  console.log(push.pushed_at);
  // cuts down and formats the api value
  updateYear = lastPushed.slice(0, 4);
  console.log("Year:", updateYear);
  updateMonth = lastPushed.slice(5, 7);
  console.log("Month:", updateMonth);
  updateDay = lastPushed.slice(8, 10);
  console.log("Day:", updateDay);
  updateDate = updateMonth.concat("/" + updateDay + "/" + updateYear);
  console.log(updateDate);

  // concats the strings and displays them
  let startText =
    "<span class='comment'>/* ----------- <br/>char siteAuthor[] = 'Kevin Huy Trinh'<br/>char currentClassification[] = 'Sophomore' <br/>char lastUpdated[] = '";
  let endText = "'</br> --------- */</span></br></br>";
  result = startText.concat(updateDate, endText);

  document.getElementsByTagName("p")[1].innerHTML = result;

  var str = document.getElementsByTagName("section")[0].innerHTML.toString();
  var i = 0;
  document.getElementsByTagName("section")[0].innerHTML = "";

  setTimeout(function () {
    var se = setInterval(function () {
      i++;
      document.getElementsByTagName("section")[0].innerHTML =
        str.slice(0, i) + "|";
      if (i == str.length) {
        clearInterval(se);
        document.getElementsByTagName("section")[0].innerHTML = str;
      }
    }, 10);
  });
}

getDate();
