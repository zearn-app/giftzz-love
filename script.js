// ============================================
// MAHA BRIDAL BOUTIQUE 2005
// Heritage Luxury Demo — JavaScript
// ============================================

// Replace with the real WhatsApp number.
// Example: 919876543210
const WHATSAPP_NUMBER = "";


// SERVICE → BOOKING FORM
document.querySelectorAll("a[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    const select = document.getElementById("service");

    if (select) {
      const options = [...select.options];
      const matching = options.find(option => option.value === service);

      if (matching) {
        select.value = service;
      } else {
        // Keep the enquiry meaningful even when the exact package
        // is not present in the dropdown.
        select.value = options[0]?.value || "";
      }
    }
  });
});


// STYLE FINDER
document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {
    document.querySelectorAll(".chip").forEach(item => {
      item.classList.remove("active");
    });

    chip.classList.add("active");
  });
});


// PORTFOLIO FILTER
document.querySelectorAll(".filter-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    document.querySelectorAll(".gallery-item").forEach(item => {
      const shouldShow =
        filter === "all" ||
        item.classList.contains(filter);

      item.classList.toggle("hidden", !shouldShow);
    });
  });
});


// WHATSAPP BOOKING
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date =
      document.getElementById("date").value ||
      "Not specified";

    const message = `Hello Maha Bridal Boutique 2005 ✨

I would like to enquire about your bridal services.

━━━━━━━━━━━━━━━━
Service: ${service}
Name: ${name}
Phone: ${phone}
Event Date: ${date}
━━━━━━━━━━━━━━━━

I found your website and would like to know the details.

Thank you ❤️`;

    const whatsappURL =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");
  });
}


// SCROLL REVEAL
const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});


// MOBILE MENU
const menuButton = document.querySelector(".menu");
const navigation = document.getElementById("mainNav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = navigation.classList.toggle("mobile-open");

    menuButton.setAttribute("aria-expanded", String(open));

    if (open) {
      navigation.style.display = "flex";
      navigation.style.position = "absolute";
      navigation.style.top = "72px";
      navigation.style.left = "0";
      navigation.style.right = "0";
      navigation.style.padding = "22px 6%";
      navigation.style.background = "rgba(9,7,7,.98)";
      navigation.style.flexDirection = "column";
      navigation.style.alignItems = "flex-start";
      navigation.style.gap = "18px";
      navigation.style.borderBottom = "1px solid rgba(244,234,219,.14)";
    } else {
      navigation.style.display = "";
    }
  });

  navigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 760) {
        navigation.classList.remove("mobile-open");
        navigation.style.display = "";
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  });
}


// CLOSE MENU ON RESIZE
window.addEventListener("resize", () => {
  if (window.innerWidth > 760 && navigation) {
    navigation.classList.remove("mobile-open");
    navigation.style.display = "";
    menuButton?.setAttribute("aria-expanded", "false");
  }
});


// MINIMUM BOOKING DATE = TODAY
const dateInput = document.getElementById("date");

if (dateInput) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;
}


// IMAGE LAZY LOADING
document.querySelectorAll("img").forEach(image => {
  if (!image.hasAttribute("loading")) {
    image.setAttribute("loading", "lazy");
  }
});


// FALLBACK FOR REDUCED MOTION
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".reveal").forEach(element => {
    element.classList.add("show");
  });
}

console.log("✦ MAHA BRIDAL BOUTIQUE 2005 — Luxury website loaded.");
