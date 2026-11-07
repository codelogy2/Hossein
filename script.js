
/* =========================================================
   تنظیمات اصلی سایت باغ عمارت مارینا
   ========================================================= */

const WEDDING_CONFIG = {
  venueName: "باغ عمارت مارینا",
  address: "شهریار، چهارراه ممدآباد، خیابان امام خمینی (بین رضی‌آباد پایین و بالا)",
  latitude: 35.675525,
  longitude: 51.088002,
  eventDate: "۶ آذر",
  eventTime: "۱۸:۰۰"
};

// مختصات مقصد
const coords = `${WEDDING_CONFIG.latitude},${WEDDING_CONFIG.longitude}`;
const encodedCoords = encodeURIComponent(coords);

// Google Maps: مسیریابی تا مقصد
const googleMapsUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodedCoords}&travelmode=driving`;

// Waze: مسیریابی مستقیم با مختصات مقصد
const wazeUrl =
  `https://waze.com/ul?ll=${encodedCoords}&navigate=yes`;

// Neshan: لینک اشتراک‌گذاری واقعی باغ عمارت مارینا
const neshanUrl =
  "https://nshn.ir/76rbv8J-ex5TKC";

// Balad: لینک اشتراک‌گذاری واقعی باغ عمارت مارینا
const baladUrl =
  "https://balad.ir/p/6sV43KszL1FpoL";


// نمایش اطلاعات مراسم
document.getElementById("venue-title").textContent =
  WEDDING_CONFIG.venueName;

document.getElementById("venue-address").textContent =
  WEDDING_CONFIG.address;

document.getElementById("event-date").textContent =
  WEDDING_CONFIG.eventDate;

document.getElementById("event-time").textContent =
  WEDDING_CONFIG.eventTime;


// اتصال دکمه‌های مسیریابی
document.getElementById("neshan-link").href = neshanUrl;
document.getElementById("balad-link").href = baladUrl;
document.getElementById("google-link").href = googleMapsUrl;
document.getElementById("waze-link").href = wazeUrl;


// کپی آدرس و مختصات
document.getElementById("copy-address").addEventListener("click", async (event) => {
  event.preventDefault();

  const text =
    `${WEDDING_CONFIG.venueName}\n` +
    `${WEDDING_CONFIG.address}\n` +
    `${coords}`;

  const feedback = document.getElementById("copy-feedback");

  try {
    await navigator.clipboard.writeText(text);
    feedback.textContent = "آدرس و مختصات کپی شد.";
  } catch (error) {
    feedback.textContent =
      "کپی خودکار فعال نیست؛ آدرس را دستی کپی کنید.";
  }
});
