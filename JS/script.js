function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("show");
}

// نسخ أول 3 كروت وإضافتهم تاني في الآخر
window.onload = () => {
  const track = document.getElementById("slider-track");
  const cards = track.querySelectorAll(".card");

  for (let i = 0; i < 3; i++) {
    let clone = cards[i].cloneNode(true);
    track.appendChild(clone);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("div.flex.overflow-x-auto");

  // Hide scrollbar using injected style
  const style = document.createElement('style');
  style.textContent = `
    .flex.overflow-x-auto::-webkit-scrollbar {
      display: none;
    }
    .flex.overflow-x-auto {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;
  document.head.appendChild(style);

  let scrollAmount = 0;
  const scrollStep = 1;
  const scrollDelay = 15;

  function autoScroll() {
    if (!container) return;

    scrollAmount += scrollStep;

    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  setInterval(autoScroll, scrollDelay);
});
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("div.flex.overflow-x-auto");

  if (!container) return;

  // إخفاء السكرول
  const style = document.createElement('style');
  style.textContent = `
    .flex.overflow-x-auto::-webkit-scrollbar {
      display: none;
    }
    .flex.overflow-x-auto {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }

    .scroll-button {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 10;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      border: none;
      padding: 0.5rem 0.75rem;
      border-radius: 9999px;
      cursor: pointer;
    }

    .scroll-left { left: 0.5rem; }
    .scroll-right { right: 0.5rem; }
  `;
  document.head.appendChild(style);

  // تكرار العناصر لعمل اللوب
  const cards = Array.from(container.children);
  cards.forEach(card => container.appendChild(card.cloneNode(true)));

  let scrollStep = 1;
  let scrollDelay = 15;
  let isHovered = false;

  function loopScroll() {
    if (!container || isHovered) return;
    container.scrollLeft += scrollStep;
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  }

  container.addEventListener("mouseenter", () => isHovered = true);
  container.addEventListener("mouseleave", () => isHovered = false);
  setInterval(loopScroll, scrollDelay);

  // أزرار التحكم يمين/شمال
  const parent = container.parentElement;
  const leftBtn = document.createElement("button");
  leftBtn.innerHTML = "<i class='fas fa-chevron-left'></i>";
  leftBtn.className = "scroll-button scroll-left";
  leftBtn.onclick = () => container.scrollLeft -= 300;

  const rightBtn = document.createElement("button");
  rightBtn.innerHTML = "<i class='fas fa-chevron-right'></i>";
  rightBtn.className = "scroll-button scroll-right";
  rightBtn.onclick = () => container.scrollLeft += 300;

  parent.style.position = "relative";
  parent.appendChild(leftBtn);
  parent.appendChild(rightBtn);
});

function openVideo(button) {
  const videoUrl = button.getAttribute('data-video') + "?autoplay=1";
  document.getElementById('videoIframe').src = videoUrl;
  document.getElementById('videoPopup').classList.remove('hidden');
}

function closeVideo() {
  document.getElementById('videoPopup').classList.add('hidden');
  document.getElementById('videoIframe').src = "";
}

document.addEventListener('DOMContentLoaded', function () {
  const gradeButtons = document.querySelectorAll('.grade-btn');

  const pathContents = document.querySelectorAll('.path-content');
  gradeButtons.forEach(button => {
    button.addEventListener('click', function () {
      gradeButtons.forEach(btn => {
        btn.classList.remove('active');
      });


      pathContents.forEach(content => {
        content.classList.remove('active');
      });

      this.classList.add('active');
      const targetId = this.getAttribute('data-target');

      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const featureItems = document.querySelectorAll('.feature-item');
  const contentPanels = document.querySelectorAll('.content-panel');
  featureItems.forEach(item => {
    item.addEventListener('click', function () {
      featureItems.forEach(i => i.classList.remove('active'));
      contentPanels.forEach(p => p.classList.remove('active'));
      item.classList.add('active');
      const targetId = item.getAttribute('data-target');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const gradeSelect = document.getElementById('gradeSelect');


  // بيانات الأسعار والمناهج لكل اختيار
  const pricingData = {
    'grades1-2': {
      beginner: {
        price: '5900',
        perClass: '480 EGP',
        duration: '2 Months',
        classes: '12 Live Classes',
        level: 'LEVEL 1: Technology Around Us',
        features: [
          'Identify tech specs & data size',
          'Explain data tech benefits and uses',
          'Spot computer parts and components',
          'Demonstrate programming skills'
        ],
        bonus: ['1 Class Freeze']
      },
      advanced: {
        price: '10800',
        perClass: '450 EGP',
        duration: '4 Months',
        classes: '24 Live Classes',
        level: 'Everything in Beginner + LEVEL 2: <br>Creative Computing',
        features: [
          'Apply basic Scratch Jr. blocks',
          'Enhance problem-solving and thinking skills',
          'Utilize Scratch Jr. for problem-solving',
          'Effectively express ideas and programs'
        ],
        bonus: ['2 Classes Freeze', 'Instant Support']
      },
      expert: {
        price: '18800',
        perClass: '380 EGP',
        duration: '6 Months',
        classes: '48 Live Classes',
        level: 'Everything in Advanced + LEVEL 3: <br>Chatbots & Voice Assistants',
        features: [
          'Show programming and computer <br>understanding basics',
          'Apply coding creating to solve challenges',
          'Analyze and create screen effectively',
          'Demonstrate mastery through practical <br>programming'
        ],
        bonus: ['3 Classes Freeze', 'Instant Support', 'Final Project', '1 User Project']
      }
    },
    'grades3-4': {
      beginner: {
        price: '6500',
        perClass: '500 EGP',
        duration: '2.5 Months',
        classes: '13 Live Classes',
        level: 'LEVEL 1: Digital Citizenship',
        features: [
          'Understand online safety and privacy',
          'Learn responsible digital behavior',
          'Identify trustworthy online sources',
          'Practice critical thinking about digital content'
        ],
        bonus: ['1 Class Freeze']
      },
      advanced: {
        price: '12000',
        perClass: '480 EGP',
        duration: '5 Months',
        classes: '25 Live Classes',
        level: 'Everything in Beginner + LEVEL 2: <br>Introduction to Coding with Python',
        features: [
          'Basic Python syntax and data types',
          'Control flow (loops, conditionals)',
          'Functions and modules',
          'Simple game development'
        ],
        bonus: ['2 Classes Freeze', 'Instant Support']
      },
      expert: {
        price: '20000',
        perClass: '400 EGP',
        duration: '7 Months',
        classes: '50 Live Classes',
        level: 'Everything in Advanced + LEVEL 3: <br>Web Development Basics',
        features: [
          'HTML structure and elements',
          'CSS styling and layout',
          'Basic JavaScript interactivity',
          'Build a simple personal webpage'
        ],
        bonus: ['3 Classes Freeze', 'Instant Support', 'Final Project', '1 User Project']
      }
    },
    'grades5-6': {
      beginner: {
        price: '7000',
        perClass: '520 EGP',
        duration: '3 Months',
        classes: '14 Live Classes',
        level: 'LEVEL 1: Creative Problem Solving',
        features: [
          'Analyze real-world problems',
          'Brainstorm creative solutions',
          'Develop prototypes for ideas',
          'Present and critique solutions'
        ],
        bonus: ['1 Class Freeze']
      },
      advanced: {
        price: '13500',
        perClass: '500 EGP',
        duration: '6 Months',
        classes: '27 Live Classes',
        level: 'Everything in Beginner + LEVEL 2: <br>App Design with UI/UX Principles',
        features: [
          'Understand user experience (UX) basics',
          'Design user interfaces (UI) with tools',
          'Create wireframes and mockups',
          'Develop interactive prototypes'
        ],
        bonus: ['2 Classes Freeze', 'Instant Support']
      },
      expert: {
        price: '22000',
        perClass: '420 EGP',
        duration: '8 Months',
        classes: '52 Live Classes',
        level: 'Everything in Advanced + LEVEL 3: <br>Introduction to Data Science',
        features: [
          'Understand data types and sources',
          'Basic data collection methods',
          'Data visualization techniques',
          'Simple data analysis'
        ],
        bonus: ['3 Classes Freeze', 'Instant Support', 'Final Project', '1 User Project']
      }
    }
  };

  const updatePricingCards = (selectedGrade) => {
    const data = pricingData[selectedGrade];

    // Update Beginner Card
    document.getElementById('beginnerPrice').textContent = data.beginner.price;
    document.getElementById('beginnerPerClass').textContent = data.beginner.perClass;
    document.getElementById('beginnerDuration').textContent = data.beginner.duration;
    document.getElementById('beginnerClasses').textContent = data.beginner.classes;
    document.querySelector('.pricing-card:nth-child(1) .curriculum-level').innerHTML = data.beginner.level;
    const beginnerFeaturesList = document.querySelector('.pricing-card:nth-child(1) .curriculum-features');
    beginnerFeaturesList.innerHTML = '';
    data.beginner.features.forEach(feature => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fas fa-check-circle" style="color:rgb(7, 148, 54);"></i> ${feature}`;

      beginnerFeaturesList.appendChild(li);
    });
    // Bonus features for Beginner (only 1 in this example)
    const beginnerBonusItems = document.querySelector('.pricing-card:nth-child(1) .bonus-items');
    beginnerBonusItems.innerHTML = ''; // Clear previous
    if (data.beginner.bonus.includes('1 Class Freeze')) {
      beginnerBonusItems.innerHTML += `
                <div class="bonus-item">
                    <img src="./img/puss.svg" alt="Freeze Icon" class="bonus-icon" /> 
                    <span>1 Class Freeze</span>
                </div>
            `;
    }

    // Update Advanced Card
    document.getElementById('advancedPrice').textContent = data.advanced.price;
    document.getElementById('advancedPerClass').textContent = data.advanced.perClass;
    document.getElementById('advancedDuration').textContent = data.advanced.duration;
    document.getElementById('advancedClasses').textContent = data.advanced.classes;
    document.querySelector('.pricing-card:nth-child(2) .curriculum-level').innerHTML = data.advanced.level;
    const advancedFeaturesList = document.querySelector('.pricing-card:nth-child(2) .curriculum-features');
    advancedFeaturesList.innerHTML = '';



    data.advanced.features.forEach(feature => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fas fa-check-circle" style="color:rgb(7, 148, 54);"></i> ${feature}`;
      advancedFeaturesList.appendChild(li);
    });
    // Bonus features for Advanced
    const advancedBonusItems = document.querySelector('.pricing-card:nth-child(2) .bonus-items');
    advancedBonusItems.innerHTML = ''; // Clear previous
    if (data.advanced.bonus.includes('2 Classes Freeze')) {
      advancedBonusItems.innerHTML += `
                <div class="bonus-item">
            <img src="./img/puss.svg" alt="Freeze Icon" class="bonus-icon" />
                    <span>2 Classes Freeze</span>
                </div>
            `;
    }
    if (data.advanced.bonus.includes('Instant Support')) {
      advancedBonusItems.innerHTML += `
                <div class="bonus-item">
                <img src="./img/call.svg" alt="Freeze Icon" class="bonus-icon" />
                    <span>Instant Support</span>
                </div>
            `;
    }

    // Update Expert Card
    document.getElementById('expertPrice').textContent = data.expert.price;
    document.getElementById('expertPerClass').textContent = data.expert.perClass;
    document.getElementById('expertDuration').textContent = data.expert.duration;
    document.getElementById('expertClasses').textContent = data.expert.classes;
    document.querySelector('.pricing-card:nth-child(3) .curriculum-level').innerHTML = data.expert.level;
    const expertFeaturesList = document.querySelector('.pricing-card:nth-child(3) .curriculum-features');
    expertFeaturesList.innerHTML = '';
    data.expert.features.forEach(feature => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="fas fa-check-circle" style="color:rgb(7, 148, 54);"></i> ${feature}`;
      expertFeaturesList.appendChild(li);
    });
    // Bonus features for Expert
    const expertBonusItems = document.querySelector('.pricing-card:nth-child(3) .bonus-items');
    expertBonusItems.innerHTML = ''; // Clear previous
    if (data.expert.bonus.includes('3 Classes Freeze')) {
      expertBonusItems.innerHTML += `
                <div class="bonus-item">
                    <img src="./img/puss.svg" alt="Freeze Icon" class="bonus-icon" />
                    <span>3 Classes Freeze</span>
                </div>
            `;
    }
    if (data.expert.bonus.includes('Instant Support')) {
      expertBonusItems.innerHTML += `
                <div class="bonus-item">
                  <img src="./img/call.svg" alt="Freeze Icon" class="bonus-icon" />
                    <span>Instant Support</span>
                </div>
            `;
    }
    if (data.expert.bonus.includes('Final Project')) {
      expertBonusItems.innerHTML += `
                <div class="bonus-item">
                  <img src="./img/trust.svg" alt="Freeze Icon" class="bonus-icon" />
                    <span>Final Project</span>
                </div>
            `;
    }
    if (data.expert.bonus.includes('1 User Project')) {
      expertBonusItems.innerHTML += `
                <div class="bonus-item">
                    <img src="./img/play.svg" alt="Freeze Icon" class="bonus-icon" />
                    <span>1 User Project</span>
                </div>
            `;
    }
  };

  // Listen for changes in the dropdown
  gradeSelect.addEventListener('change', (event) => {
    updatePricingCards(event.target.value);
  });

  // Initial update when the page loads
  updatePricingCards(gradeSelect.value);
});
const links = document.querySelectorAll('.nav-link');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.hash);
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.addEventListener('beforeunload', () => {
  window.scrollTo(0, 0);
});

const links1 = document.querySelectorAll('.nav-link');
links1.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // نشيل الكلاس من الكل
    links1.forEach(l => l.classList.remove('active'));

    // نضيف للكليك الحالي
    link.classList.add('active');

    const id = link.getAttribute('href').slice(1);
    const sec = document.getElementById(id);
    if (sec) {
      sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
