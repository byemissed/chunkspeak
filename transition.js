/* ===================================================
   EssentialMC — transition.js
   Smooth page transition with rotating logo
   =================================================== */

(function () {
  // Wait until DOM is fully parsed
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Styles
    const style = document.createElement('style');
    style.textContent = `
      .teleport-overlay {
        position: fixed;
        top: 0; left: 0;
        width: 100vw; height: 100vh;
        background: rgba(0, 0, 0, 0.96);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        z-index: 999999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        gap: 24px;
      }
      .teleport-overlay.active {
        opacity: 1;
        pointer-events: all;
      }
      .logo-block-spin {
        width: 56px; height: 56px;
        display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;
        gap: 4px; border-radius: 8px; overflow: hidden;
        animation: logoSpin 1.1s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
        box-shadow: 0 0 30px rgba(27, 217, 106, 0.35);
      }
      .logo-block-spin span {
        display: block;
        width: 100%;
        height: 100%;
      }
      .logo-block-spin span:nth-child(1) { background: #5d9e3f; }
      .logo-block-spin span:nth-child(2) { background: #7ec850; }
      .logo-block-spin span:nth-child(3) { background: #8b5e3c; }
      .logo-block-spin span:nth-child(4) { background: #5c3d27; }
      
      .teleport-text {
        color: #1bd96a;
        font-family: 'Rajdhani', 'Segoe UI', system-ui, sans-serif;
        font-size: 1.6rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        animation: pulse 1.0s ease-in-out infinite alternate;
        text-shadow: 0 0 12px rgba(27, 217, 106, 0.45);
      }
      
      @keyframes logoSpin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes pulse {
        0% { opacity: 0.5; transform: scale(0.97); }
        100% { opacity: 1; transform: scale(1.03); }
      }
    `;
    document.head.appendChild(style);

    // 2. Create and Inject Overlay Elements
    const overlay = document.createElement('div');
    overlay.className = 'teleport-overlay';
    overlay.innerHTML = `
      <div class="logo-block-spin">
        <span></span><span></span><span></span><span></span>
      </div>
      <div class="teleport-text">Teleporting..</div>
    `;
    document.body.appendChild(overlay);

    // 3. Click Interception for Local Links
    document.addEventListener('click', e => {
      const anchor = e.target.closest('a');
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      // Ignore anchors, external schemes
      if (href.startsWith('#') || href.startsWith('javascript:') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }
      
      // Ignore new tab targets
      const target = anchor.getAttribute('target');
      if (target === '_blank') return;
      
      try {
        const url = new URL(anchor.href, window.location.href);
        // Only target same origin (local links)
        if (url.origin !== window.location.origin) return;
        
        // Prevent immediate navigation
        e.preventDefault();
        
        // Show overlay
        overlay.classList.add('active');
        
        // Redirect after transition duration (1.2s)
        setTimeout(() => {
          window.location.href = anchor.href;
        }, 1200);
      } catch (err) {
        // Fallback in case URL parsing fails
      }
    });

    // 4. Ensure overlay disappears when returning via history back/forward
    window.addEventListener('pageshow', event => {
      if (event.persisted || (window.performance && window.performance.navigation.type === 2)) {
        overlay.classList.remove('active');
      }
    });
  });
})();
