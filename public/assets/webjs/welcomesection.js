// This js uses github api to show latest update to portfolio on landing page
const apiUrl = "https://api.github.com/repos/KevinTrinh1227/Kevin-Trinh";
const updateInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
let lastPushed = null;

async function fetchData() {
  const response = await fetch(apiUrl);
  const push = await response.json();
  return push.pushed_at;
}

function formatDate(pushedAt) {
  const lastUpdated = new Date(pushedAt);
  const formattedDate = lastUpdated.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return formattedDate;
}

function updateContent(pushedAt) {
  const formattedDate = formatDate(pushedAt);

  const startText = `
    <span class='comment'>/* ----------- <br/>
      const portfolioInfo = { <br/>
        &nbsp;&nbsp;siteAuthor: 'Kevin Huy Trinh', <br/>
        &nbsp;&nbsp;currentClassification: 'Sophomore', <br/>
        &nbsp;&nbsp;lastUpdated: '${formattedDate}'<br/>
      }; <br/>
    ----------- */
    </span><br/><br/>
  `;

  document.getElementsByTagName("p")[0].innerHTML = startText;
}

function animateText(sectionElement, text, index = 0) {
  sectionElement.innerHTML = text.slice(0, index) + "|";
  if (index < text.length) {
    requestAnimationFrame(() => {
      animateText(sectionElement, text, index + 1);
    });
  } else {
    sectionElement.innerHTML = text;
  }
}

async function updateAndAnimate() {
  try {
    const pushedAt = await fetchData();

    if (pushedAt !== lastPushed) {
      lastPushed = pushedAt;
      updateContent(pushedAt);
    }

    const sectionElement = document.getElementsByTagName("section")[0];
    const originalText = sectionElement.innerHTML.toString();

    animateText(sectionElement, originalText);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Initial call and schedule updates
updateAndAnimate();
setInterval(updateAndAnimate, updateInterval);
