/* Ideark consent (id_consent) — Consent Mode v2 ready */
(function () {
  var KEY = 'id_consent';
  function gtag(){window.dataLayer=window.dataLayer||[];window.dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500
  });
  function apply(granted) {
    gtag('consent', 'update', {
      ad_storage: granted ? 'granted' : 'denied',
      ad_user_data: granted ? 'granted' : 'denied',
      ad_personalization: granted ? 'granted' : 'denied',
      analytics_storage: granted ? 'granted' : 'denied'
    });
    // When you have GTM/GA, load them here only if granted.
  }
  var saved = localStorage.getItem(KEY);
  if (saved === '1') { apply(true); return; }
  if (saved === '0') { apply(false); return; }
  var b = document.createElement('div');
  b.id = 'id-cookie-banner';
  b.setAttribute('role', 'dialog');
  b.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:300;background:rgba(8,12,20,.96);border-top:1px solid rgba(255,255,255,.08);padding:16px 20px;display:flex;gap:14px;align-items:center;justify-content:space-between;flex-wrap:wrap;font-family:DM Sans,sans-serif;font-size:.84rem;color:#e8edf5;box-shadow:0 -8px 32px rgba(0,0,0,.35)';
  b.innerHTML = '<span style="flex:1;min-width:220px;line-height:1.55;color:#8a96a8">Usamos cookies propias y de terceros para medir visitas y mejorar Ideark. <a href="/cookies" style="color:#00e5ff">Política de cookies</a></span><div style="display:flex;gap:8px;flex-shrink:0"><button type="button" id="id-consent-reject" style="background:transparent;border:1px solid rgba(255,255,255,.2);color:#e8edf5;padding:9px 16px;border-radius:8px;font-weight:600;cursor:pointer">Rechazar</button><button type="button" id="id-consent-accept" style="background:#00e5ff;border:none;color:#080c14;padding:9px 18px;border-radius:8px;font-weight:700;cursor:pointer">Aceptar</button></div>';
  document.body.appendChild(b);
  document.getElementById('id-consent-accept').onclick = function () {
    localStorage.setItem(KEY, '1'); apply(true); b.remove();
  };
  document.getElementById('id-consent-reject').onclick = function () {
    localStorage.setItem(KEY, '0'); apply(false); b.remove();
  };
})();
