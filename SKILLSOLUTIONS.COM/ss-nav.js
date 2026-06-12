/**
 * ss-nav.js — Skills Solutions shared ecosystem topbar
 * Include in any product page: <script src="../SKILLSOLUTIONS.COM/ss-nav.js"></script>
 * Then call: SSNav.init({ current: 'bad360' })
 * current values: 'skillsolutions' | 'bad360' | 'baia' | 'bads' | 'barmanmatch'
 */
(function(){
  const PRODUCTS = [
    { id:'skillsolutions', label:'✦ Hub',       url:'../SKILLSOLUTIONS.COM/index.html',         color:'#C9A84C' },
    { id:'baia',           label:'BA.IA',        url:'../BA.IA.SKILLSOLUTIONS.COM/index.html',   color:'#6366F1' },
    { id:'bad360',         label:'BAD360',       url:'../BAD360.SKILLSOLUTIONS.COM/index.html',  color:'#C9A84C' },
    { id:'bads',           label:'BAD.S',        url:'../BAD.SKILLSOLUTIONS.COM/index.html',     color:'#00E5B4' },
    { id:'barmanmatch',    label:'BarmanMatch',  url:'../BARMANMATCH.SKILLSOLUTIONS.COM/barman_network.html', color:'rgba(248,244,238,.4)' },
  ];

  const CSS = `
  #ss-nav{position:fixed;bottom:0;left:0;right:0;z-index:9999;padding:.5rem 1.5rem;
    background:rgba(6,6,10,.92);backdrop-filter:blur(20px);
    border-top:1px solid rgba(255,255,255,.07);
    display:flex;align-items:center;justify-content:center;gap:.4rem;flex-wrap:wrap;}
  .ss-nav-item{display:inline-flex;align-items:center;padding:.35rem .85rem;
    border-radius:999px;font-size:.5rem;font-weight:600;letter-spacing:.18em;
    text-transform:uppercase;text-decoration:none;transition:all .25s;
    border:1px solid rgba(255,255,255,.08);color:rgba(248,244,238,.45);}
  .ss-nav-item:hover{color:#fff;border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.05);}
  .ss-nav-item.active{border-color:currentColor;background:rgba(255,255,255,.06);}
  .ss-nav-brand{font-size:.44rem;letter-spacing:.28em;color:rgba(248,244,238,.2);
    margin-right:.6rem;text-transform:uppercase;white-space:nowrap;}
  @media(max-width:480px){.ss-nav-brand{display:none;} #ss-nav{padding:.4rem .8rem;gap:.3rem;}}
  `;

  const SSNav = {
    init: function(opts){
      opts = opts || {};
      const current = opts.current || '';

      const style = document.createElement('style');
      style.textContent = CSS;
      document.head.appendChild(style);

      const nav = document.createElement('div');
      nav.id = 'ss-nav';

      const brand = document.createElement('span');
      brand.className = 'ss-nav-brand';
      brand.textContent = 'Skills Solutions';
      nav.appendChild(brand);

      PRODUCTS.forEach(function(p){
        const a = document.createElement('a');
        a.href = p.url;
        a.className = 'ss-nav-item' + (p.id === current ? ' active' : '');
        a.textContent = p.label;
        if(p.id === current){ a.style.color = p.color; a.style.borderColor = p.color; }
        if(p.id !== current){ a.style.setProperty('--hover-color', p.color); }
        nav.appendChild(a);
      });

      document.body.appendChild(nav);
      document.body.style.paddingBottom = '46px';
    }
  };

  window.SSNav = SSNav;
})();
