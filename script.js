// ============================================
// MAHA BRIDAL BOUTIQUE 2005
// Website Demo — JavaScript
// ============================================

// Replace with the real WhatsApp number
// Example: 919876543210
const WHATSAPP_NUMBER = "9788605021";


// ============================================
// 1. SERVICE → BOOKING FORM
// ============================================

document.querySelectorAll("a[data-service]").forEach(link => {
  link.addEventListener("click", () => {
    const service = link.dataset.service;
    const select = document.getElementById("service");

    if (select) {
      select.value = service;
    }
  });
});


// ============================================
// 2. STYLE FINDER CHIPS
// ============================================

document.querySelectorAll(".chip").forEach(chip => {
  chip.addEventListener("click", () => {

    document.querySelectorAll(".chip").forEach(item => {
      item.classList.remove("active");
    });

    chip.classList.add("active");

  });
});


// ============================================
// 3. PORTFOLIO FILTER
// ============================================

document.querySelectorAll(".filter-btn").forEach(button => {

  button.addEventListener("click", () => {

    // Active button
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    // Filter gallery
    document.querySelectorAll(".gallery-item").forEach(item => {

      if (
        filter === "all" ||
        item.classList.contains(filter)
      ) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }

    });

  });

});


// ============================================
// 4. WHATSAPP BOOKING FORM
// ============================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

  bookingForm.addEventListener("submit", function (event) {

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


// ============================================
// 5. SCROLL REVEAL ANIMATION
// ============================================

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("show");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);


document.querySelectorAll(".reveal").forEach(element => {
  revealObserver.observe(element);
});


// ============================================
// 6. MOBILE MENU
// ============================================

const menuButton = document.querySelector(".menu");
const navigation = document.querySelector("nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("mobile-open");

    if (isOpen) {

      navigation.style.display = "flex";
      navigation.style.position = "absolute";
      navigation.style.top = "82px";
      navigation.style.left = "0";
      navigation.style.right = "0";
      navigation.style.padding = "20px 7%";
      navigation.style.background = "#fffdfb";
      navigation.style.flexDirection = "column";
      navigation.style.gap = "18px";
      navigation.style.borderBottom =
        "1px solid #eadfdc";

    } else {

      navigation.style.display = "";

    }

  });


  // Close menu after clicking a navigation link
  navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

      if (window.innerWidth <= 900) {
        navigation.classList.remove("mobile-open");
        navigation.style.display = "";
      }

    });

  });

}


// ============================================
// 7. CLOSE MOBILE MENU ON RESIZE
// ============================================

window.addEventListener("resize", () => {

  if (window.innerWidth > 900 && navigation) {

    navigation.classList.remove("mobile-open");
    navigation.style.display = "";

  }

});


// ============================================
// 8. SMOOTH SCROLL
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (event) {

    const targetID = this.getAttribute("href");

    if (!targetID || targetID === "#") return;

    const target = document.querySelector(targetID);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ============================================
// 9. SET MINIMUM BOOKING DATE
// ============================================

const dateInput = document.getElementById("date");

if (dateInput) {

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  dateInput.min = `${year}-${month}-${day}`;

}


// ============================================
// 10. WHATSAPP FLOATING BUTTON
// ============================================

const whatsappButtons =
  document.querySelectorAll("[data-whatsapp]");

whatsappButtons.forEach(button => {

  button.addEventListener("click", () => {

    const message =
      "Hello Maha Bridal Boutique 2005 ✨\n\nI would like to enquire about your bridal services.";

    const url =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

  });

});


// ============================================
// 11. IMAGE LAZY LOADING
// ============================================

document.querySelectorAll("img").forEach(image => {

  if (!image.hasAttribute("loading")) {
    image.setAttribute("loading", "lazy");
  }

});


// ============================================
// 12. CONSOLE MESSAGE
// ============================================

console.log(
  "✨ Maha Bridal Boutique 2005 website loaded successfully."
);