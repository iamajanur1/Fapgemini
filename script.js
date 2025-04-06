import { story1, story2 } from "./stories.js";


setTimeout(() => {
  document.getElementById("ageModal").style.display = "flex";
}, 1000);

window.onload = () => {
  renderChapters("saffron", story1);
  renderChapters("ethereal", story2);
  updateStoryDetail("saffron"); 
};

function renderChapters(storyKey, storyData) {
  const container = document.getElementById(`chapters-${storyKey}`);
  
  // HTML for the chapter list
  let html = `<h3>${storyData.title}</h3>`;
  
  storyData.chapters.forEach((chapter) => {
    // Split content into paragraphs (first 4)
    const paragraphs = chapter.content.split('\n').slice(0, 4);
    html += `
      <div class="chapter-item">
        <span>${chapter.title}</span>
        <button class="chapter-button" onclick="toggleChapter('${storyKey}', '${chapter.id}')">READ</button>
      </div>
      <div id="chapter-content-${storyKey}-${chapter.id}" class="chapter-content hidden" style="background-color: #000000; color: #ffffff; padding: 20px;">
        <h4 style="font-size: 36px; font-weight: 600; text-align: center; margin-bottom: 20px;">${chapter.title}</h4>
        
        <!-- Float image at the top -->
        <div style="overflow: hidden;">
          <div style="float: right; margin-left: 10px; margin-bottom: 10px;">
            <img src="${chapter.image}" alt="${chapter.title}" style="width: 300px; height: 400px;" />
            <div style="font-size: 14px; font-style: italic; text-align: center; margin-top: 5px;">${chapter.title}</div>
          </div>
        </div>
        <div style="clear: both;"></div>
  
        <!-- Paragraphs -->
        ${paragraphs.map(para => `
          <p style="font-size: 16px; text-align: justify; font-weight: 300; line-height: 1.5; margin-bottom: 15px; font-family: 'Open Sans', sans-serif;">
            ${para}
          </p>
        `).join('')}
  
        <!-- Lower image again -->
        <div style="text-align: center; margin-top: 20px;">
          <img src="${chapter.image}" alt="${chapter.title} Scene" style="width: 300px; height: 200px;" />
          <div style="font-size: 14px; font-style: italic; margin-top: 5px;">${chapter.title}</div>
        </div>
      </div>
    `;
  });
  
  
  container.innerHTML = html;
}

// Expose toggleChapter globally so inline onclick attributes can access it.
window.toggleChapter = function(storyKey, chapterId) {
  const contentDiv = document.getElementById(`chapter-content-${storyKey}-${chapterId}`);
  if (!contentDiv) {
    console.error(`No chapter content found for ${storyKey} chapter ${chapterId}`);
    return;
  }

  contentDiv.classList.toggle("hidden");
};

// .
function updateStoryDetail(story) {
  const detailTitle = document.getElementById("detail-title");
  const detailDescription = document.getElementById("detail-description");
  const detailImage = document.querySelector(".detail-image");
  const startButton = document.querySelector(".start-button");

  // Hide both chapters containers initially.
  document.getElementById("chapters-saffron").style.display = "none";
  document.getElementById("chapters-ethereal").style.display = "none";

  if (story === "saffron") {
    detailTitle.textContent = "Saffron Flames: A Forbidden Love in Ancient India";
    detailDescription.textContent =
      "Dive into the sultry, forbidden romance of Saffron Flames, an eight-part saga set in the lush, treacherous world of Ancient India, 500 BCE. Lady Vasudha, a widowed aristocrat of timeless beauty, ignites a passionate affair with Kavi, a youthful servant whose touch awakens her long-dormant desires. Their clandestine nights unravel a tapestry of lust and danger—stolen kisses by lotus ponds, heated embraces under monsoon skies—until a shocking revelation turns their world upside down: Kavi’s royal blood and a son’s unexpected return. As betrayal, trials by fire, and courtly intrigue threaten to consume them, their love burns brighter, defying all odds. Perfect for readers craving adult literature that blends evocative sensuality with heart-pounding twists, this tale of power, passion, and redemption will leave you breathless and yearning for each chapter’s next embrace.";
    detailImage.src = "saffron.jpeg";
    startButton.onclick = () => startStory("saffron");
  } else if (story === "ethereal") {
    detailTitle.textContent = "Ethereal Bonds: A Tale of AI-Driven Desire";
    detailDescription.textContent =
      "Ethereal Bonds is a lyrical journey through a futuristic 2035, where AI-driven eroticism blurs the lines between reality and fantasy. Inspired by the poetic sensuality of old classics, it offers nude beauty without crudeness—think silken verses of longing, lust painted in soft hues, and a narrative that seduces with every chapter. For lovers of adult literature, it’s a tale of passion’s evolution, where technology amplifies desire, yet the human soul remains the ultimate muse.";
    detailImage.src = "ethereal.jpeg";
    startButton.onclick = () => startStory("ethereal");
  }
}


function startStory(storyId) {
  //  hide both chapters containers.
  document.getElementById("chapters-saffron").style.display = "none";
  document.getElementById("chapters-ethereal").style.display = "none";


  const chapterSection = document.getElementById("chapters-" + storyId);
  if (chapterSection.style.display === "block") {
    chapterSection.style.display = "none";
  } else {
    chapterSection.style.display = "block";
  }
}

function verifyAge(isAbove18) {
  if (isAbove18) {
    document.getElementById('ageModal').style.display = 'none';
  } else {
    window.location.href = 'https://www.google.com';
  }
}


window.updateStoryDetail = updateStoryDetail;
window.startStory = startStory;
window.verifyAge = verifyAge;
