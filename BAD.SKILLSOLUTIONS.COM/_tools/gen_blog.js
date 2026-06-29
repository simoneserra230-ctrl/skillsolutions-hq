/* Generatore pagine-articolo statiche SEO per BAD, dall'oggetto ART in index.html.
   Output: BAD.SKILLSOLUTIONS.COM/blog/<key>.html + blog/index.html + blog/blog.css
           + sitemap.xml + robots.txt (alla radice del sito). */
const fs = require("fs");
const path = require("path");

const ROOT = process.argv[2]; // cartella BAD.SKILLSOLUTIONS.COM
const SITE = "https://www.barmanadomiciliosardegna.com";
const idx = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");

function extractObj(src, decl){
  const i = src.indexOf(decl); if(i<0) throw new Error("non trovato: "+decl);
  let j = src.indexOf("{", i), depth=0, inStr=null, esc=false;
  for(let k=j;k<src.length;k++){
    const c=src[k];
    if(inStr){ if(esc){esc=false;} else if(c==="\\"){esc=true;} else if(c===inStr){inStr=null;} continue; }
    if(c==="\""||c==="'"||c==="`"){inStr=c;continue;}
    if(c==="{")depth++; else if(c==="}"){depth--; if(depth===0) return src.slice(j,k+1);}
  }
  throw new Error("graffa non bilanciata: "+decl);
}
const IMGS = (0,eval)("("+extractObj(idx,"const IMGS=")+")");
const ART  = (0,eval)("("+extractObj(idx,"const ART=")+")");

const FALLBACK_IMG = "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1400&q=85";
const MESI = {gennaio:"01",febbraio:"02",marzo:"03",aprile:"04",maggio:"05",giugno:"06",luglio:"07",agosto:"08",settembre:"09",ottobre:"10",novembre:"11",dicembre:"12"};
function isoDate(d){
  if(!d) return "2025-01-01";
  const m = String(d).trim().toLowerCase().match(/(\d{1,2})\s+([a-zà]+)\s+(\d{4})/);
  if(!m) { const y=(String(d).match(/\d{4}/)||["2025"])[0]; return y+"-01-01"; }
  const mm = MESI[m[2]] || "01";
  return `${m[3]}-${mm}-${String(m[1]).padStart(2,"0")}`;
}
function esc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function stripTags(s){ return String(s==null?"":s).replace(/<[^>]*>/g," ").replace(/\s+/g," ").trim(); }
function metaDesc(lead){ const t=stripTags(lead); return t.length>155 ? t.slice(0,152).replace(/\s+\S*$/,"")+"…" : t; }

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,300;1,9..144,700&family=Instrument+Sans:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap" rel="stylesheet">`;

const CSS = `:root{--g:#C9A84C;--gl:#F0D78A;--ink:#0A0A0F;--ink2:#11111A;--w:#F5F1EA;--wdim:rgba(245,241,234,.62);--wmut:rgba(245,241,234,.38);--line:rgba(201,168,76,.14)}
*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{background:var(--ink);color:var(--w);font-family:'Instrument Sans',system-ui,sans-serif;line-height:1.65;-webkit-font-smoothing:antialiased}
a{color:inherit;text-decoration:none}
.nav{position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:1rem 1.6rem;background:rgba(10,10,15,.82);backdrop-filter:blur(16px);border-bottom:1px solid var(--line)}
.nav-b{font-family:'Fraunces',serif;font-weight:900;color:var(--g);font-size:1.1rem;letter-spacing:.02em}
.nav a.back{font-size:.66rem;letter-spacing:.18em;text-transform:uppercase;color:var(--g);border:1px solid var(--line);padding:.5rem 1rem;border-radius:999px}
.hero{position:relative;height:clamp(280px,42vw,440px);overflow:hidden}
.hero img{width:100%;height:100%;object-fit:cover;opacity:.62}
.hero::after{content:'';position:absolute;inset:0;background:linear-gradient(180deg,rgba(10,10,15,.25),rgba(10,10,15,.92))}
.hero-c{position:absolute;left:0;right:0;bottom:0;padding:2rem 1.6rem;max-width:760px;margin:0 auto}
.pill{display:inline-block;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;color:var(--g);border:1px solid var(--line);background:rgba(201,168,76,.08);padding:.3rem .8rem;border-radius:999px;margin-bottom:.9rem}
h1.title{font-family:'Fraunces',serif;font-weight:900;font-size:clamp(2rem,5.5vw,3.4rem);line-height:1.02;letter-spacing:-.01em}
.sub{color:var(--wdim);font-size:1rem;margin-top:.7rem;max-width:60ch}
.meta{color:var(--wmut);font-size:.72rem;letter-spacing:.06em;margin-top:.9rem}
.wrap{max-width:760px;margin:0 auto;padding:2.6rem 1.6rem 5rem}
.lead{font-family:'Fraunces',serif;font-size:1.22rem;font-style:italic;color:var(--gl);line-height:1.6;margin-bottom:1.8rem}
.body{font-size:1rem;color:var(--w)}
.body h2,.body h3{font-family:'Syne',sans-serif;color:var(--gl);margin:2rem 0 .8rem;line-height:1.2}
.body h2{font-size:1.5rem}.body h3{font-size:1.15rem}
.body p{margin:0 0 1.1rem;color:var(--wdim)}
.body ul,.body ol{margin:0 0 1.2rem 1.2rem;color:var(--wdim)}
.body li{margin:.3rem 0}
.body strong{color:var(--w)}
.body img{max-width:100%;border-radius:12px;margin:1.2rem 0}
.divider{height:1px;background:var(--line);margin:2.4rem 0}
.foot{display:flex;gap:.8rem;flex-wrap:wrap;align-items:center;margin-top:2.4rem}
.btn{display:inline-flex;align-items:center;gap:.4rem;font-size:.66rem;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:.8rem 1.4rem;border-radius:999px}
.btn-g{background:var(--g);color:#000}
.btn-o{border:1px solid var(--line);color:var(--g)}
.copy{color:var(--wmut);font-size:.6rem;letter-spacing:.06em;margin-top:1.4rem}
/* index */
.bx-hero{max-width:900px;margin:0 auto;padding:4rem 1.6rem 1rem;text-align:center}
.bx-kick{font-size:.6rem;letter-spacing:.34em;text-transform:uppercase;color:var(--g)}
.bx-h1{font-family:'Fraunces',serif;font-weight:900;font-size:clamp(2.4rem,7vw,4.5rem);line-height:.98;margin:.6rem 0}
.bx-sub{color:var(--wdim);max-width:60ch;margin:0 auto}
.bx-sec{max-width:1100px;margin:0 auto;padding:2rem 1.6rem}
.bx-sec h2{font-family:'Syne',sans-serif;color:var(--gl);font-size:1.3rem;margin-bottom:1.2rem;border-bottom:1px solid var(--line);padding-bottom:.6rem}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1.1rem}
@media(max-width:860px){.grid{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.grid{grid-template-columns:1fr}}
.card{display:block;background:var(--ink2);border:1px solid var(--line);border-radius:14px;overflow:hidden;transition:transform .25s,border-color .25s}
.card:hover{transform:translateY(-4px);border-color:rgba(201,168,76,.3)}
.card-img{height:150px;background-size:cover;background-position:center}
.card-b{padding:1rem 1.1rem 1.2rem}
.card-t{font-family:'Fraunces',serif;font-weight:700;font-size:1.1rem;line-height:1.15;margin-bottom:.3rem}
.card-d{color:var(--wmut);font-size:.66rem;letter-spacing:.06em}`;

function head(title, desc, canonical, img, type){
  return `<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${canonical}">
<meta name="theme-color" content="#0A0A0F">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="BAD · Barman A Domicilio Sardegna">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${esc(img)}">
<meta property="og:locale" content="it_IT">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(desc)}">
<meta name="twitter:image" content="${esc(img)}">
${FONTS}
<link rel="stylesheet" href="/blog/blog.css">`;
}

const blogDir = path.join(ROOT, "blog");
fs.mkdirSync(blogDir, {recursive:true});
fs.writeFileSync(path.join(blogDir,"blog.css"), CSS);

const keys = Object.keys(ART);
let made = 0;
const indexItems = [];

for(const key of keys){
  const a = ART[key];
  const img = IMGS[key] || FALLBACK_IMG;
  const title = `${a.t} · BAD Blog`;
  const desc = metaDesc(a.lead || a.s || a.t);
  const canonical = `${SITE}/blog/${key}`;
  const iso = isoDate(a.d);
  const ld = {
    "@context":"https://schema.org","@type":"Article",
    "headline": a.t, "description": stripTags(a.lead||a.s||a.t),
    "image": img, "datePublished": iso, "dateModified": iso,
    "author":{"@type":"Person","name":"Simone Serra"},
    "publisher":{"@type":"Organization","name":"BAD · Barman A Domicilio Sardegna","url":SITE},
    "mainEntityOfPage":{"@type":"WebPage","@id":canonical},
    "inLanguage":"it-IT"
  };
  const page = `<!DOCTYPE html><html lang="it"><head>
${head(title, desc, canonical, img, "article")}
<script type="application/ld+json">${JSON.stringify(ld)}</script>
</head><body>
<nav class="nav"><a class="nav-b" href="/">BAD<span style="color:var(--w)">.S</span></a><a class="back" href="/blog">← Tutti gli articoli</a></nav>
<header class="hero"><img src="${esc(img)}" alt="${esc(a.t)}" loading="eager"><div class="hero-c">
  <span class="pill">${esc(a.c||"📚 Blog")}</span>
  <h1 class="title">${esc(a.t)}</h1>
  ${a.s?`<p class="sub">${esc(a.s)}</p>`:""}
  <div class="meta">📅 ${esc(a.d||"")} &nbsp;·&nbsp; © BAD.S — Barman A Domicilio Sardegna</div>
</div></header>
<article class="wrap">
  ${a.lead?`<p class="lead">${a.lead}</p><div class="divider"></div>`:""}
  <div class="body">${a.body||""}</div>
  <div class="divider"></div>
  <div class="foot">
    <a class="btn btn-g" href="https://wa.me/393468473144?text=Ciao!%20Ho%20letto%20il%20vostro%20blog%20e%20vorrei%20info%20per%20un%20evento.">💬 Richiedi un preventivo</a>
    <a class="btn btn-o" href="/blog">← Altri articoli</a>
    <a class="btn btn-o" href="/">Home BAD →</a>
  </div>
  <p class="copy">© ${esc(a.d||"")} — Copyright BAD.S · Simone Serra · Barman A Domicilio Sardegna</p>
</article>
</body></html>`;
  fs.writeFileSync(path.join(blogDir, key+".html"), page);
  made++;
  indexItems.push({key, t:a.t, c:a.c||"📚 Blog", d:a.d||"", img, isDrink: !!a.isDrink});
}

// ── indice /blog ──
function cards(list){
  return list.map(it=>`<a class="card" href="/blog/${it.key}">
    <div class="card-img" style="background-image:url('${esc(it.img)}')"></div>
    <div class="card-b"><div class="card-t">${esc(it.t)}</div><div class="card-d">${esc(it.c)} · ${esc(it.d)}</div></div>
  </a>`).join("\n");
}
const blogList = indexItems.filter(i=>!i.isDrink);
const drinkList = indexItems.filter(i=>i.isDrink);
const indexPage = `<!DOCTYPE html><html lang="it"><head>
${head("Blog & Drink Blog — BAD · Barman A Domicilio Sardegna","Cocktail, tecniche di mixology, sciroppi, distillati e cultura del bar. "+keys.length+" approfondimenti dal team BAD, bar catering in Sardegna.", SITE+"/blog", FALLBACK_IMG, "website")}
</head><body>
<nav class="nav"><a class="nav-b" href="/">BAD<span style="color:var(--w)">.S</span></a><a class="back" href="/">← Home</a></nav>
<header class="bx-hero"><div class="bx-kick">Magazine</div><h1 class="bx-h1">Blog & Drink Blog</h1>
<p class="bx-sub">Cocktail, tecniche di mixology, sciroppi, distillati e cultura del bar — ${keys.length} approfondimenti dal team di BAD, bar catering professionale in tutta la Sardegna.</p></header>
<section class="bx-sec"><h2>🍸 Drink Blog — ${drinkList.length} ricette & distillati</h2><div class="grid">${cards(drinkList)}</div></section>
<section class="bx-sec"><h2>📚 Blog — ${blogList.length} approfondimenti</h2><div class="grid">${cards(blogList)}</div></section>
<div style="text-align:center;padding:2rem 1.6rem 5rem"><a class="btn btn-g" href="https://wa.me/393468473144?text=Ciao!%20Vorrei%20info%20per%20un%20evento.">💬 Richiedi un preventivo</a></div>
</body></html>`;
fs.writeFileSync(path.join(blogDir,"index.html"), indexPage);

// ── sitemap.xml + robots.txt alla radice ──
const urls = [`${SITE}/`, `${SITE}/blog`, ...keys.map(k=>`${SITE}/blog/${k}`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`+
  urls.map(u=>`  <url><loc>${u}</loc></url>`).join("\n")+`\n</urlset>\n`;
fs.writeFileSync(path.join(ROOT,"sitemap.xml"), sitemap);
fs.writeFileSync(path.join(ROOT,"robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

console.log(`OK: ${made} pagine articolo + blog/index.html + blog.css + sitemap.xml (${urls.length} url) + robots.txt`);
console.log(`Drink: ${drinkList.length} | Blog: ${blogList.length}`);
