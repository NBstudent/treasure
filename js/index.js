window.addEventListener('load', function () {
  const main = document.querySelector('main');
  const body = document.querySelector('body');
  const section = document.querySelector('section');
  const footerHeight = 180;
  function updateBodyHeight() {
    const mainHeight = main.offsetHeight;
    const sectionHeight = section.offsetHeight;
    body.style.height = mainHeight + sectionHeight + footerHeight + 'px';
  }
  // 页面加载时调用一次
  updateBodyHeight();
  // 监听窗口大小改变
  window.addEventListener('resize', updateBodyHeight);
});

const filmB = document.querySelector('.film-b');
const filmBItems = document.querySelectorAll('.film-b-item');
const filmPrevBtn = document.querySelector('.film-prev-btn');
const filmNextBtn = document.querySelector('.film-next-btn');

const culturalB = document.querySelector('.cultural-b');
const culturalBItems = document.querySelectorAll('.cultural-b-item');
const culturalPrevBtn = document.querySelector('.cultural-prev-btn');
const culturalNextBtn = document.querySelector('.cultural-next-btn');

// 配置参数
const filmItemCount = filmBItems.length; // 总数量
const culturalItemCount = culturalBItems.length; // 总数量
const filmVisibleCount = 3; // 可见数量
const culturalVisibleCount = 2; // 可见数量
let filmCurrentIndex = 0; // 当前起始索引（默认从第0个开始）
let culturalCurrentIndex = 0; // 当前起始索引（默认从第0个开始）

// 计算单个盒子的宽度（含间距）
const filmItemWidth = filmBItems[0].offsetWidth + 30; // 30是gap的值
const culturalItemWidth = culturalBItems[0].offsetWidth + 30; // 30是gap的值

// 更新按钮状态（首尾时禁用）
function updateButtons() {
  filmPrevBtn.disabled = filmCurrentIndex === 0;
  filmNextBtn.disabled = filmCurrentIndex >= filmItemCount - filmVisibleCount;
  culturalPrevBtn.disabled = culturalCurrentIndex === 0;
  culturalNextBtn.disabled = culturalCurrentIndex >= culturalItemCount - culturalVisibleCount;
}

// 切换轮播
function moveCarousel() {
  filmB.style.transform = `translateX(-${filmCurrentIndex * filmItemWidth}px)`;
  culturalB.style.transform = `translateX(-${culturalCurrentIndex * culturalItemWidth}px)`;
  updateButtons();
}

// 右按钮点击事件
filmNextBtn.addEventListener('click', () => {
  if (filmCurrentIndex < filmItemCount - filmVisibleCount) {
    filmCurrentIndex++;
    moveCarousel();
  }
});

culturalNextBtn.addEventListener('click', () => {
  if (culturalCurrentIndex < culturalItemCount - culturalVisibleCount) {
    culturalCurrentIndex++;
    moveCarousel();
  }
});

// 左按钮点击事件
filmPrevBtn.addEventListener('click', () => {
  if (filmCurrentIndex > 0) {
    filmCurrentIndex--;
    moveCarousel();
  }
});

culturalPrevBtn.addEventListener('click', () => {
  if (culturalCurrentIndex > 0) {
    culturalCurrentIndex--;
    moveCarousel();
  }
});


// 初始化
updateButtons();