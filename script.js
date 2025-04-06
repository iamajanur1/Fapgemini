// Age verification function
setTimeout(() => {
    document.getElementById('ageModal').style.display = 'flex';
}, 3000);

function verifyAge(isAbove18) {
    if (isAbove18) {
        document.getElementById('ageModal').style.display = 'none';
    } else {
        window.location.href = 'https://www.google.com';
    }
}

// Update story detail function
function updateStoryDetail(story) {
    const detailTitle = document.getElementById('detail-title');
    const detailDescription = document.getElementById('detail-description');
    const detailImage = document.querySelector('.detail-image');
    const startButton = document.querySelector('.start-button');

    if (story === 'saffron') {
        detailTitle.textContent = 'Saffron Flames: A Forbidden Love in Ancient India';
        detailDescription.textContent = 'Dive into the sultry, forbidden romance of Saffron Flames, an eight-part saga set in the lush, treacherous world of Ancient India, 500 BCE. Lady Vasudha, a widowed aristocrat of timeless beauty, ignites a passionate affair with Kavi, a youthful servant whose touch awakens her long-dormant desires. Their clandestine nights unravel a tapestry of lust and danger—stolen kisses by lotus ponds, heated embraces under monsoon skies—until a shocking revelation turns their world upside down: Kavi’s royal blood and a son’s unexpected return. As betrayal, trials by fire, and courtly intrigue threaten to consume them, their love burns brighter, defying all odds. Perfect for readers craving adult literature that blends evocative sensuality with heart-pounding twists, this tale of power, passion, and redemption will leave you breathless and yearning for each chapter’s next embrace.';
        detailImage.src = 'saffron.jpeg';
        startButton.onclick = () => startStory('saffron');
    } else if (story === 'ethereal') {
        detailTitle.textContent = 'Ethereal Bonds: A Tale of AI-Driven Desire';
        detailDescription.textContent = 'Ethereal Bonds is a lyrical journey through a futuristic 2035, where AI-driven eroticism blurs the lines between reality and fantasy. Inspired by the poetic sensuality of old classics, it offers nude beauty without crudeness—think silken verses of longing, lust painted in soft hues, and a narrative that seduces with every chapter. For lovers of adult literature, it’s a tale of passion’s evolution, where technology amplifies desire, yet the human soul remains the ultimate muse.';
        detailImage.src = 'ethereal.jpeg';
        startButton.onclick = () => startStory('ethereal');
    }
}


function startStory(story) {
    alert(`Starting ${story} story!`); 
    // Example: window.location.href = `story-${story}.html`;
}


window.onload = () => {
    updateStoryDetail('saffron'); 
};

function startStory(storyId) {

    var chapterSection = document.getElementById("chapters-" + storyId);
  
    if (chapterSection.style.display === "block") {
        chapterSection.style.display = "none";
    } else {
        chapterSection.style.display = "block";
    }
}




