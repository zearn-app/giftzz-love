(function(){
  "use strict";

  var WA_NUMBER = "918148472259";

  /* ---------------------------------------------------------
     PRODUCT DATA
     (Demo / placeholder content — easy to edit or replace)
  --------------------------------------------------------- */
  var PRODUCTS = [
    {
      id: "love-hamper",
      name: "Premium Love Hamper",
      price: 899,
      category: "Combo",
      badge: "Best Seller",
      desc: "A beautiful curated gift hamper perfect for birthdays, anniversaries and special moments.",
      occasions: ["Birthday", "Anniversary", "Surprise Gifts"],
      highlights: ["Hand-packed with premium items", "Elegant cellophane wrap & ribbon", "Free personalised gift tag"],
      art: { shape: "basket", colorA: "#F6A8CB", colorB: "#C21E6D", topEmoji: "🎀" }
    },
    {
      id: "couple-combo",
      name: "Couple Gift Combo",
      price: 699,
      category: "Couple",
      desc: "A thoughtful gift combo designed for couples and special occasions.",
      occasions: ["Couples", "Anniversary", "Valentine's Day"],
      highlights: ["Matching his & hers presentation", "Compact, gift-ready packaging", "Add-on chocolates available"],
      art: { shape: "stack", colorA: "#F0839F", colorB: "#8F1450", topEmoji: "💕" }
    },
    {
      id: "personalized-box",
      name: "Personalized Gift Box",
      price: 799,
      category: "Personalized",
      desc: "Make your gift extra special with a personalized presentation.",
      occasions: ["Birthday", "Anniversary", "Just Because"],
      highlights: ["Custom name / photo printing", "Premium matte finish box", "Ready in 24–48 hours"],
      art: { shape: "box", colorA: "#E9A6E6", colorB: "#9C4FB0", topEmoji: "✨" }
    },
    {
      id: "birthday-surprise",
      name: "Cute Birthday Surprise Box",
      price: 599,
      category: "Birthday",
      desc: "A fun and beautiful surprise gift box for birthdays and celebrations.",
      occasions: ["Birthday", "Surprise Gifts"],
      highlights: ["Confetti & balloon theme", "Great for friends & kids", "Compact courier-friendly box"],
      art: { shape: "box", colorA: "#F0C465", colorB: "#C98A1F", topEmoji: "🎈" }
    },
    {
      id: "premium-surprise-hamper",
      name: "Premium Surprise Hamper",
      price: 999,
      category: "Combo",
      badge: "Top Rated",
      desc: "A premium collection of gifting essentials packed beautifully for your loved ones.",
      occasions: ["Anniversary", "Premium Gifting", "Corporate Gifting"],
      highlights: ["Our largest hamper size", "Gold ribbon premium finish", "Includes handwritten note option"],
      art: { shape: "basket", colorA: "#F6C888", colorB: "#C98A1F", topEmoji: "⭐" }
    },
    {
      id: "wholesale-choco",
      name: "Customized Chocolate Pack (Bulk)",
      price: 15,
      priceUnit: "/ piece · min. 50 pcs",
      category: "Wholesale",
      badge: "Reseller Pick",
      desc: "Custom-wrapped chocolates for return gifts, weddings and bulk celebrations — your design on every wrapper.",
      occasions: ["Weddings", "Return Gifts", "Bulk Orders"],
      highlights: ["Minimum order 50 pieces", "Custom name / photo wrapper", "Reseller-friendly pricing"],
      art: { shape: "stack", colorA: "#F0C465", colorB: "#C21E6D", topEmoji: "🍫" }
    },
    {
      id: "return-gift-combo",
      name: "Bulk Return Gift Combo",
      price: 149,
      priceUnit: "/ set · min. 20 sets",
      category: "Wholesale",
      desc: "Ready-to-gift mini combo sets, perfect for weddings, baby showers and functions in bulk.",
      occasions: ["Weddings", "Functions", "Bulk Orders"],
      highlights: ["Mix of chocolate + mini gift", "Custom tags available", "Bulk courier packing"],
      art: { shape: "box", colorA: "#F2A6C4", colorB: "#E8578F", topEmoji: "🎁" }
    }
  ];

  var currentFilter = "All";
  var currentSearch = "";

  /* ---------------------------------------------------------
     SVG ILLUSTRATIONS (generated per product — no stock photos)
  --------------------------------------------------------- */
  function uid(){ return "g" + Math.random().toString(36).slice(2,9); }

  function svgWrap(inner){
    return '<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">' + inner + '</svg>';
  }

  function productArt(art){
    var gA = uid(), gB = uid();
    var defs = '<defs>' +
      '<linearGradient id="'+gA+'" x1="0" y1="0" x2="300" y2="300" gradientUnits="userSpaceOnUse">' +
        '<stop offset="0" stop-color="'+art.colorA+'"/><stop offset="1" stop-color="'+art.colorB+'"/>' +
      '</linearGradient>' +
      '<linearGradient id="'+gB+'" x1="0" y1="0" x2="0" y2="300" gradientUnits="userSpaceOnUse">' +
        '<stop offset="0" stop-color="#ffffff" stop-opacity="0.5"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/>' +
      '</linearGradient>' +
    '</defs>';

    var bgCircle = '<circle cx="150" cy="150" r="132" fill="'+art.colorA+'" opacity="0.14"/>';
    var sparkles = '<g opacity="0.55" fill="'+art.colorB+'">' +
      '<text x="42" y="70" font-size="20">✦</text>' +
      '<text x="238" y="90" font-size="16">✦</text>' +
      '<text x="230" y="230" font-size="18">✦</text>' +
      '<text x="50" y="235" font-size="14">✦</text>' +
    '</g>';

    var shapeMarkup = "";
    if (art.shape === "basket"){
      shapeMarkup =
        '<path d="M85 145 L215 145 L228 235 Q230 252 213 252 L87 252 Q70 252 72 235 Z" fill="url(#'+gA+')"/>' +
        '<path d="M85 145 L215 145 L211 175 L89 175 Z" fill="url(#'+gB+')"/>' +
        '<path d="M100 145 Q150 95 200 145" fill="none" stroke="'+art.colorB+'" stroke-width="7" stroke-linecap="round"/>' +
        '<rect x="140" y="118" width="20" height="134" fill="'+art.colorB+'" opacity="0.85"/>' +
        '<path d="M150 118 C120 100 96 104 96 122 C96 138 122 138 150 122 C178 138 204 138 204 122 C204 104 180 100 150 118Z" fill="'+art.colorB+'"/>';
    } else if (art.shape === "stack"){
      shapeMarkup =
        '<rect x="70" y="168" width="88" height="78" rx="10" fill="url(#'+gA+')"/>' +
        '<rect x="70" y="168" width="88" height="14" fill="'+art.colorB+'" opacity="0.8"/>' +
        '<rect x="106" y="168" width="16" height="78" fill="'+art.colorB+'" opacity="0.85"/>' +
        '<rect x="150" y="140" width="96" height="106" rx="10" fill="url(#'+gA+')"/>' +
        '<rect x="150" y="140" width="96" height="16" fill="'+art.colorB+'" opacity="0.8"/>' +
        '<rect x="190" y="140" width="16" height="106" fill="'+art.colorB+'" opacity="0.85"/>' +
        '<circle cx="198" cy="140" r="14" fill="'+art.colorB+'"/>';
    } else {
      shapeMarkup =
        '<rect x="78" y="150" width="150" height="104" rx="12" fill="url(#'+gA+')"/>' +
        '<rect x="78" y="150" width="150" height="150" rx="12" fill="url(#'+gB+')" opacity="0.25"/>' +
        '<rect x="78" y="122" width="150" height="32" rx="8" fill="'+art.colorB+'"/>' +
        '<rect x="140" y="122" width="24" height="132" fill="'+art.colorA+'" opacity="0.9"/>' +
        '<path d="M152 122 C130 96 104 100 106 116 C108 130 130 130 152 122 C174 130 196 130 198 116 C200 100 174 96 152 122Z" fill="'+art.colorB+'"/>';
    }

    var topper = art.topEmoji ? '<text x="150" y="100" font-size="30" text-anchor="middle">'+art.topEmoji+'</text>' : "";

    return svgWrap(defs + bgCircle + sparkles + shapeMarkup + topper);
  }

  /* ---------------------------------------------------------
     RENDER PRODUCT CARDS
  --------------------------------------------------------- */
  var grid = document.getElementById("productGrid");
  var noResults = document.getElementById("noResults");

  function waLink(product, qty){
    var msg = "Hi Giftzz Love ❤️\n\nI would like to order:\n\n🎁 Product: " + product.name +
      "\n💰 Price: " + priceLabel(product) +
      "\n📦 Quantity: " + qty +
      "\n\nPlease confirm availability and delivery details.";
    return "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(msg);
  }

  function priceLabel(product){
    return "₹" + product.price + (product.priceUnit ? " " + product.priceUnit : "");
  }

  function renderProducts(){
    var list = PRODUCTS.filter(function(p){
      var matchesFilter = currentFilter === "All" || p.category === currentFilter;
      var matchesSearch = !currentSearch || p.name.toLowerCase().indexOf(currentSearch) !== -1 ||
        p.desc.toLowerCase().indexOf(currentSearch) !== -1;
      return matchesFilter && matchesSearch;
    });

    grid.innerHTML = "";
    noResults.hidden = list.length !== 0;

    list.forEach(function(p){
      var card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML =
        '<div class="product-media">' +
          (p.badge ? '<span class="product-badge">' + p.badge + '</span>' : "") +
          productArt(p.art) +
        '</div>' +
        '<div class="product-info">' +
          '<h3 class="product-name">' + p.name + '</h3>' +
          '<div class="product-price">' + priceLabel(p) + '</div>' +
          '<p class="product-desc">' + p.desc + '</p>' +
          '<div class="product-actions">' +
            '<button class="btn btn-ghost btn-view" type="button">View Details</button>' +
            '<a class="btn btn-wa" href="' + waLink(p, 1) + '" target="_blank" rel="noopener">Order</a>' +
          '</div>' +
        '</div>';
      card.querySelector(".btn-view").addEventListener("click", function(){ openModal(p); });
      grid.appendChild(card);
    });
  }

  /* Filter chips */
  var filterRow = document.getElementById("filterRow");
  filterRow.addEventListener("click", function(e){
    var chip = e.target.closest(".filter-chip");
    if (!chip) return;
    filterRow.querySelectorAll(".filter-chip").forEach(function(c){ c.classList.remove("is-active"); });
    chip.classList.add("is-active");
    currentFilter = chip.dataset.filter;
    renderProducts();
  });

  /* Category cards scroll to shop + set filter */
  document.querySelectorAll(".cat-card").forEach(function(card){
    card.addEventListener("click", function(){
      var filter = card.dataset.filter;
      var target = ["Birthday","Couple","Anniversary","Personalized","Combo","Wholesale"].indexOf(filter) !== -1 ? filter : "All";
      currentFilter = target;
      filterRow.querySelectorAll(".filter-chip").forEach(function(c){
        c.classList.toggle("is-active", c.dataset.filter === target);
      });
      renderProducts();
      document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  /* ---------------------------------------------------------
     SEARCH
  --------------------------------------------------------- */
  var searchToggle = document.getElementById("searchToggle");
  var searchBar = document.getElementById("searchBar");
  var searchInput = document.getElementById("searchInput");
  var searchClose = document.getElementById("searchClose");

  function openSearch(){
    searchBar.classList.add("is-open");
    searchToggle.setAttribute("aria-expanded", "true");
    setTimeout(function(){ searchInput.focus(); }, 220);
  }
  function closeSearch(){
    searchBar.classList.remove("is-open");
    searchToggle.setAttribute("aria-expanded", "false");
  }
  searchToggle.addEventListener("click", function(){
    searchBar.classList.contains("is-open") ? closeSearch() : openSearch();
  });
  searchClose.addEventListener("click", closeSearch);
  searchInput.addEventListener("input", function(){
    currentSearch = searchInput.value.trim().toLowerCase();
    renderProducts();
    if (currentSearch) document.getElementById("shop").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  /* ---------------------------------------------------------
     PRODUCT MODAL
  --------------------------------------------------------- */
  var modalBackdrop = document.getElementById("modalBackdrop");
  var modalMedia = document.getElementById("modalMedia");
  var modalBadge = document.getElementById("modalBadge");
  var modalTitle = document.getElementById("modalTitle");
  var modalPrice = document.getElementById("modalPrice");
  var modalDesc = document.getElementById("modalDesc");
  var modalOccasions = document.getElementById("modalOccasions");
  var modalHighlights = document.getElementById("modalHighlights");
  var modalWaBtn = document.getElementById("modalWaBtn");
  var qtyValue = document.getElementById("qtyValue");
  var qtyMinus = document.getElementById("qtyMinus");
  var qtyPlus = document.getElementById("qtyPlus");
  var modalClose = document.getElementById("modalClose");

  var activeProduct = null;
  var qty = 1;

  function openModal(product){
    activeProduct = product;
    qty = 1;
    qtyValue.textContent = qty;
    modalMedia.innerHTML = productArt(product.art);
    modalBadge.style.display = product.badge ? "inline-block" : "none";
    modalBadge.textContent = product.badge || "";
    modalTitle.textContent = product.name;
    modalPrice.textContent = priceLabel(product);
    modalDesc.textContent = product.desc;
    modalOccasions.innerHTML = product.occasions.map(function(o){ return "<span>" + o + "</span>"; }).join("");
    modalHighlights.innerHTML = product.highlights.map(function(h){ return "<li>" + h + "</li>"; }).join("");
    modalWaBtn.href = waLink(product, qty);
    modalBackdrop.classList.add("is-open");
    document.body.classList.add("modal-open");
  }
  function closeModal(){
    modalBackdrop.classList.remove("is-open");
    document.body.classList.remove("modal-open");
  }
  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", function(e){ if (e.target === modalBackdrop) closeModal(); });
  document.addEventListener("keydown", function(e){ if (e.key === "Escape") closeModal(); });

  qtyMinus.addEventListener("click", function(){
    if (qty > 1) qty--;
    qtyValue.textContent = qty;
    if (activeProduct) modalWaBtn.href = waLink(activeProduct, qty);
  });
  qtyPlus.addEventListener("click", function(){
    qty++;
    qtyValue.textContent = qty;
    if (activeProduct) modalWaBtn.href = waLink(activeProduct, qty);
  });

  /* ---------------------------------------------------------
     HEADER / MOBILE NAV
  --------------------------------------------------------- */
  var header = document.getElementById("siteHeader");
  window.addEventListener("scroll", function(){
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }, { passive: true });

  var menuToggle = document.getElementById("menuToggle");
  var mobileDrawer = document.getElementById("mobileDrawer");
  var drawerBackdrop = document.getElementById("drawerBackdrop");

  function openDrawer(){
    mobileDrawer.classList.add("is-open");
    drawerBackdrop.classList.add("is-open");
    menuToggle.setAttribute("aria-expanded", "true");
  }
  function closeDrawer(){
    mobileDrawer.classList.remove("is-open");
    drawerBackdrop.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  menuToggle.addEventListener("click", function(){
    mobileDrawer.classList.contains("is-open") ? closeDrawer() : openDrawer();
  });
  drawerBackdrop.addEventListener("click", closeDrawer);
  document.getElementById("drawerClose").addEventListener("click", closeDrawer);
  mobileDrawer.querySelectorAll("a").forEach(function(a){ a.addEventListener("click", closeDrawer); });

  /* Bottom nav active state */
  var bnItems = document.querySelectorAll(".bn-item[href^='#']");
  bnItems.forEach(function(item){
    item.addEventListener("click", function(){
      bnItems.forEach(function(i){ i.classList.remove("is-active"); });
      item.classList.add("is-active");
    });
  });

  /* ---------------------------------------------------------
     INSTAGRAM GRID (demo tiles — replace with live integration later)
  --------------------------------------------------------- */
  var instaGrid = document.getElementById("instaGrid");
  var instaTiles = [
    { emoji: "🎁", bg: "linear-gradient(135deg,#F6A8CB,#C21E6D)" },
    { emoji: "💌", bg: "linear-gradient(135deg,#F0C465,#C98A1F)" },
    { emoji: "🍫", bg: "linear-gradient(135deg,#E9A6E6,#9C4FB0)" },
    { emoji: "🌸", bg: "linear-gradient(135deg,#B7D8C9,#5C9C7C)" },
    { emoji: "🎀", bg: "linear-gradient(135deg,#F0839F,#8F1450)" },
    { emoji: "✨", bg: "linear-gradient(135deg,#F6C888,#C98A1F)" }
  ];
  instaTiles.forEach(function(t){
    var div = document.createElement("a");
    div.href = "https://www.instagram.com/giftzz_love/";
    div.target = "_blank";
    div.rel = "noopener";
    div.className = "insta-tile";
    div.style.background = t.bg;
    div.textContent = t.emoji;
    div.setAttribute("aria-label", "Giftzz Love on Instagram");
    instaGrid.appendChild(div);
  });

  /* ---------------------------------------------------------
     SCROLL REVEAL
  --------------------------------------------------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("is-visible"); });
  }

  /* ---------------------------------------------------------
     TRUST NUMBER COUNTERS
  --------------------------------------------------------- */
  var counters = document.querySelectorAll(".trust-item strong[data-count]");
  function animateCounter(el){
    var target = parseInt(el.dataset.count, 10);
    var suffix = el.dataset.suffix || "";
    var start = 0;
    var duration = 1400;
    var startTime = null;
    function step(ts){
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var val = Math.round(start + (target - start) * eased);
      el.textContent = val.toLocaleString("en-IN") + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  if ("IntersectionObserver" in window && counters.length){
    var cio = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          animateCounter(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    counters.forEach(function(el){ cio.observe(el); });
  }

  /* ---------------------------------------------------------
     INIT
  --------------------------------------------------------- */
  renderProducts();
})();
