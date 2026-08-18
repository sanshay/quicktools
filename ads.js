(() => {
  const cfg = window.QUICKTOOLS_ADS || {};
  const validPublisher = /^ca-pub-\d+$/.test(cfg.publisherId || "");
  const slots = document.querySelectorAll(".ad-slot[data-ad-key]");

  function hideOrPreview(slot, message = "Advertisement") {
    if (cfg.previewPlaceholders) {
      slot.classList.add("is-placeholder");
      slot.innerHTML = `<span>${message}</span>`;
    } else {
      slot.hidden = true;
    }
  }

  if (!cfg.enabled || !validPublisher) {
    slots.forEach(slot => hideOrPreview(slot, "Ad space"));
    return;
  }

  const script = document.createElement("script");
  script.async = true;
  script.crossOrigin = "anonymous";
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(cfg.publisherId)}`;
  document.head.appendChild(script);

  slots.forEach(slot => {
    const key = slot.dataset.adKey;
    const adSlot = cfg.slots?.[key];
    if (!adSlot) {
      hideOrPreview(slot, `Configure ${key} ad slot`);
      return;
    }
    slot.classList.remove("is-placeholder");
    slot.innerHTML = `<span class="ad-label">Advertisement</span><ins class="adsbygoogle" style="display:block;width:100%" data-ad-client="${cfg.publisherId}" data-ad-slot="${adSlot}" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (_) {}
  });
})();
