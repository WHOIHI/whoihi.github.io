/* 移动端导航切换 */
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // 点击导航项后自动收起
  nav.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link')) {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

/* 分类页:按分类筛选 */
(function () {
  var filters = Array.prototype.slice.call(
    document.querySelectorAll('.classify-filter .tag-filter')
  );
  if (!filters.length) return;

  var sections = Array.prototype.slice.call(
    document.querySelectorAll('.classify-section')
  );

  function apply(cat) {
    filters.forEach(function (f) {
      f.classList.toggle('active', f.getAttribute('data-cat') === cat);
    });
    sections.forEach(function (s) {
      var show = cat === 'all' || s.getAttribute('data-cat') === cat;
      s.hidden = !show;
    });
  }

  filters.forEach(function (f) {
    f.addEventListener('click', function (e) {
      e.preventDefault();
      var cat = f.getAttribute('data-cat');
      apply(cat);
      var hash = f.getAttribute('href') || '';
      history.replaceState(null, '', cat === 'all' ? ' ' : hash);
    });
  });

  // 支持直接带锚点访问,例如 /categories/#技术
  var hash = '';
  try {
    hash = decodeURIComponent(window.location.hash.replace(/^#/, ''));
  } catch (err) {
    hash = window.location.hash.replace(/^#/, '');
  }
  if (hash && hash !== 'all') {
    var hit = sections.some(function (s) {
      return s.getAttribute('data-cat') === hash;
    });
    if (hit) apply(hash);
  }
})();
