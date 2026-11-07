/* =========================================================
   تنظیمات اصلی سایت — فقط این قسمت را برای مراسم خودت تغییر بده
   مختصات را به صورت latitude و سپس longitude وارد کن.
   ========================================================= */
const WEDDING_CONFIG = {
  venueName: " باغ عمارت مارینا",
  address: "شهریار چهارراه ممدآباد خیابان امام خمینی (بین رضی آباد پایین و بالا)",
  latitude: 35.6997,
  longitude: 51.3381,
  eventDate: "۶ اذر",
  eventTime: "۱۸:۰۰"
};

const coords = `${WEDDING_CONFIG.latitude},${WEDDING_CONFIG.longitude}`;
const encodedCoords = encodeURIComponent(coords);

// Google Maps: لینک رسمی Directions؛ مبدأ به‌صورت خودکار از موقعیت کاربر گرفته می‌شود.
const googleMapsUrl = `https://maps.app.goo.gl/4jELhUK8vLSrppcc8?g_st=ac`;

// Waze: لینک رسمی Universal Link برای بازکردن مقصد و شروع مسیریابی.
const wazeUrl = `https://maps.app.goo.gl/4jELhUK8vLSrppcc8?g_st=ac`;

// Neshan: لینک وب نقشه با مقصد مشخص؛ در موبایل ممکن است به اپ نشان هدایت شود.
const neshanUrl = `https://maps.app.goo.gl/4jELhUK8vLSrppcc8?g_st=ac'
// Balad: قالب لینک مقصد در اینجا متمرکز شده تا در صورت تغییر ساختار رسمی بلد، فقط همین خط اصلاح شود.
// پیش از انتشار عمومی، این لینک را روی Android و iOS واقعی آزمایش کن.
const baladUrl = `https://balad.ir/p/6sV43KszL1FpoL`;

// نمایش اطلاعات مراسم
 document.getElementById("venue-title").textContent = WEDDING_CONFIG.venueName;
 document.getElementById("venue-address").textContent = WEDDING_CONFIG.address;
 document.getElementById("event-date").textContent = WEDDING_CONFIG.eventDate;
 document.getElementById("event-time").textContent = WEDDING_CONFIG.eventTime;

// اتصال دکمه‌ها به لینک‌های مسیریابی
 document.getElementById("neshan-link").href = neshanUrl;
 document.getElementById("balad-link").href = baladUrl;
 document.getElementById("google-link").href = googleMapsUrl;
 document.getElementById("waze-link").href = wazeUrl;

// کپی آدرس برای مهمان‌ها
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
