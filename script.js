/* =========================================================
   تنظیمات اصلی سایت باغ عمارت مارینا
   ========================================================= */

const WEDDING_CONFIG = {
  venueName: "باغ عمارت مارینا",
  address: "شهریار، چهارراه ممدآباد، خیابان امام خمینی (بین رضی‌آباد پایین و بالا)",
  latitude: 35.675525,
  longitude: 51.088002,
  eventDate: "۶ آذر ۱۴۰۵",
  eventTime: "۱۸:۰۰"
};

const coords = `${WEDDING_CONFIG.latitude},${WEDDING_CONFIG.longitude}`;
const encodedCoords = encodeURIComponent(coords);

// Google Maps: مسیریابی تا مقصد
const googleMapsUrl =
  `https://www.google.com/maps/dir/?api=1&destination=${encodedCoords}&travelmode=driving`;

// Waze: مسیریابی تا مقصد
const wazeUrl =
  `https://waze.com/ul?ll=${encodedCoords}&navigate=yes`;

// لینک‌های اشتراک‌گذاری واقعی که ارسال کردی
const neshanUrl = "https://nshn.ir/76rbv8J-ex5TKC";
const baladUrl = "https://balad.ir/p/6sV43KszL1FpoL";

// نمایش اطلاعات مراسم
document.getElementById("venue-title").textContent = WEDDING_CONFIG.venueName;
document.getElementById("venue-address").textContent = WEDDING_CONFIG.address;
document.getElementById("event-date").textContent = WEDDING_CONFIG.eventDate;
document.getElementById("event-time").textContent = WEDDING_CONFIG.eventTime;

// اتصال دکمه‌های مسیریابی
document.getElementById("neshan-link").href = neshanUrl;
document.getElementById("balad-link").href = baladUrl;
document.getElementById("google-link").href = googleMapsUrl;
document.getElementById("waze-link").href = wazeUrl;

// کپی آدرس و مختصات
document.getElementById("copy-address").addEventListener("click", async (event) => {
  event.preventDefault();

  const text = `${WEDDING_CONFIG.venueName}\n${WEDDING_CONFIG.address}\n${coords}`;
  const feedback = document.getElementById("copy-feedback");

  try {
    await navigator.clipboard.writeText(text);
    feedback.textContent = "آدرس و مختصات کپی شد.";
  } catch (error) {
    feedback.textContent = "کپی خودکار در این مرورگر فعال نیست؛ آدرس را دستی کپی کنید.";
  }
});

// شمارش معکوس تا ۶ آذر ۱۴۰۵، ساعت ۱۸:۰۰ به وقت ایران
// ۶ آذر ۱۴۰۵ برابر با ۲۷ نوامبر ۲۰۲۶ است.
const weddingDate = new Date("2026-11-27T18:00:00+03:30");

const countdownElements = {
  days: document.getElementById("cd-days"),
  hours: document.getElementById("cd-hours"),
  minutes: document.getElementById("cd-minutes"),
  seconds: document.getElementById("cd-seconds"),
  message: document.getElementById("countdown-message")
};

function updateCountdown() {
  const distance = weddingDate.getTime() - Date.now();

  if (distance <= 0) {
    countdownElements.days.textContent = "۰۰";
    countdownElements.hours.textContent = "۰۰";
    countdownElements.minutes.textContent = "۰۰";
    countdownElements.seconds.textContent = "۰۰";
    countdownElements.message.textContent =
      "زمان مراسم فرا رسیده است؛ منتظر دیدار شما هستیم.";
    clearInterval(countdownInterval);
    return;
  }

  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance % 86400000) / 3600000);
  const minutes = Math.floor((distance % 3600000) / 60000);
  const seconds = Math.floor((distance % 60000) / 1000);

  countdownElements.days.textContent = String(days).padStart(2, "0");
  countdownElements.hours.textContent = String(hours).padStart(2, "0");
  countdownElements.minutes.textContent = String(minutes).padStart(2, "0");
  countdownElements.seconds.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);
