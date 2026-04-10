# Cittasana AI — Full SEO Audit Report
**Datum:** 2026-04-10 | **Website:** https://ai.cittasana.de | **Seiten auditiert:** 8

---

## Executive Summary

**Gesamtscore: 78 / 100**

Die Website zeigt eine solide technische Basis und klare inhaltliche Positionierung für die Zielgruppe (deutschsprachiger Mittelstand). Stärken liegen in der Markentransparenz, dem Privacy-First-Ansatz und dem Gründer-E-E-A-T. Die größten Lücken sind interne Verlinkungsdichte, dünne Produktbeschreibungen und kurze FAQ-Antworten.

### Top-5-Stärken
1. Privacy-First ("Keine Cookies. Kein Tracking.") als klares Differenzierungsmerkmal
2. robots.txt explizit offen für AI-Crawler (GPTBot, ClaudeBot, Perplexity, cohere-ai)
3. Alle 5 OG-Images vorhanden (1200×630px) — kein Social-Card-404 mehr
4. FAQPage-Schema auf 3 Seiten (inkl. neu hinzugefügtem /hivemind)
5. Vercel-CDN + EU-Server + Security-Headers auf Enterprise-Niveau

### Top-5-Lücken
1. Kein BreadcrumbList-Schema auf Unterseiten → CTR-Verlust in SERPs
2. llms.txt nicht verlinkt → AI-Crawler finden sie nicht zuverlässig
3. /impressum und /datenschutz fehlen in sitemap.xml
4. Produktbeschreibungen auf /loesungen zu dünn (120–160 Wörter, Minimum 300)
5. FAQ-Antworten zu kurz für AI-Generated Overviews (Google bevorzugt 100+ Wörter)

---

## Scoring

| Kategorie | Gewicht | Score | Gewichteter Score |
|-----------|---------|-------|-------------------|
| Technical SEO | 25% | 82 | 20.5 |
| Content Quality | 25% | 72 | 18.0 |
| On-Page SEO | 20% | 79 | 15.8 |
| Schema / Structured Data | 10% | 68 | 6.8 |
| Performance | 10% | 85 | 8.5 |
| Images | 5% | 88 | 4.4 |
| AI Search Readiness | 5% | 71 | 3.6 |
| **Gesamt** | | | **78 / 100** |

---

## 1. Technical SEO — 82/100

### robots.txt ✅ Exzellent
- Erlaubt alle gängigen Crawler + explizit AI-Bots: GPTBot, OAI-SearchBot, ClaudeBot, Perplexity, Bytespider, cohere-ai
- Blockiert CCBot (Training-Scraper) — strategisch korrekt
- Verweist korrekt auf sitemap.xml

### sitemap.xml ⚠️ Lücken
- 6 von 8 Seiten enthalten — `/impressum` und `/datenschutz` fehlen
- Keine `<priority>` oder `<changefreq>` Werte gesetzt
- Fix: Beide Seiten mit `<changefreq>never</changefreq>` ergänzen

### Canonicals ✅ Korrekt
- Alle 8 Seiten haben HTTPS-Canonical-Tags
- Keine Duplicate-Content-Signale, konsistente Trailing-Slashes

### Security Headers ✅ Enterprise-Grade (`vercel.json`)
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: SAMEORIGIN`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`

### Performance-Signale
- ✅ Keine externen Analytics/Pixel-Scripts
- ✅ Self-hosted Fonts (`/fonts/fonts.css`)
- ⚠️ Tailwind via CDN (Produktion: besser PostCSS-Build)
- ⚠️ Kein `srcset` / `loading="lazy"` auf Bilder

---

## 2. Content Quality — 72/100

### E-E-A-T

| Signal | Status |
|--------|--------|
| Expertise: Gründer-Bio, konkrete Metriken in Cases | ✅ |
| Experience: Persönliche Unternehmenserfahrung | ✅ |
| Authoritativeness: Keine Medienerwähnungen, kein LinkedIn-Link | ⚠️ |
| Trustworthiness: DSGVO-Seite, EU AI Act, transparente Preise | ✅ |

### Content-Tiefe

| Seite | Ca. Wörter | Status |
|-------|-----------|--------|
| / | ~800 | ✅ |
| /hivemind | ~900 | ✅ |
| /loesungen | ~1.100 (6 Produkte ÷ = ~183/Produkt) | ⚠️ Zu dünn |
| /ai-ready-check | ~600 | ✅ |
| /ueber-uns | ~700 | ⚠️ H1 ohne Keywords |
| /eu-ai-act | ~500 | ⚠️ Könnte tiefer sein |
| /impressum | ~200 | ✅ Korrekt (legal) |
| /datenschutz | ~1.200 | ✅ |

### Keyword-Lücken
- Keine generischen Keywords für Produkte (z.B. "invoice automation software")
- Long-tail fehlend: "Prozessautomatisierung Handwerk", "KI für kleine Unternehmen"
- Keine Vergleichs-Inhalte ("HiveMind vs. Notion AI", "Cittasana vs. Zapier")

---

## 3. On-Page SEO — 79/100

### Title Tags

| Seite | Länge | Grade |
|-------|-------|-------|
| / | 62 Zeichen | A |
| /hivemind | 75 Zeichen | A |
| /loesungen | 70 Zeichen | A |
| /ai-ready-check | 64 Zeichen | A |
| /ueber-uns | 80 Zeichen | A |
| /eu-ai-act | 42 Zeichen | B |
| /impressum | 29 Zeichen | C — zu kurz |
| /datenschutz | 42 Zeichen | C — zu generisch |

### H1-Probleme
- `/ueber-uns` H1: "Nicht weil der Markt es hergab. Sondern weil wir daran glauben." → ❌ Null Keywords
- `/loesungen` H1: Benefit-fokussiert, kein generisches Keyword

### Interne Verlinkung ⚠️ Schwachpunkt
- /loesungen: Alle 6 Produkt-CTAs zeigen auf /ai-ready-check — keine Quervernetzung
- /hivemind: Nur 2 interne CTAs — keine "Ähnliche Lösungen"-Sektion
- Empfehlung: 3–5 kontextuelle interne Links pro Seite

---

## 4. Schema / Structured Data — 68/100

### Vorhandene Schemas

| Seite | Schemas | Status |
|-------|---------|--------|
| / | Organization, WebSite, FAQPage | ✅ |
| /hivemind | SoftwareApplication, FAQPage | ✅ (FAQPage neu) |
| /loesungen | ItemList | ✅ |
| /ai-ready-check | Service | ✅ |
| /ueber-uns | Person | ⚠️ Unvollständig |
| /eu-ai-act | FAQPage | ✅ |

### Fehlende Schemas (nach Priorität)
1. **BreadcrumbList** — alle Unterseiten → fehlt komplett (Critical)
2. **WebPage** mit `datePublished`/`dateModified` — alle Content-Seiten (Medium)
3. **Product-Schema** — für einzelne Lösungen mit `offers`, `featureList` (Medium)
4. **sameAs** in Organization + Person Schema (LinkedIn-Link) (High)

### Validierungsprobleme
- Organization: `sameAs`, `foundingDate`, `numberOfEmployees` fehlen
- Person (Cosmo): `image`-URL und `sameAs` fehlen
- SoftwareApplication (HiveMind): `aggregateRating`, `featureList` fehlen
- FAQ-Antworten: Durchschnittlich unter 50 Wörter → zu kurz für AI Overview

---

## 5. Performance — 85/100

**Positive Signale:**
- Vercel Edge-CDN, automatische Komprimierung
- Keine Third-Party-Scripts (Analytics, Pixel)
- Minimales JavaScript (nur AI-Check-Formular)

**Optimierungspotenzial:**
- Tailwind via CDN → PostCSS-Build für Produktion empfohlen
- Kein `srcset` für Cosmo-Bilder
- Kein `loading="lazy"` auf below-fold Bilder

**Geschätzte Core Web Vitals:**
- LCP: ~1.2–1.5s (gut)
- CLS: Sehr niedrig (Grid-Layout)
- INP: Sehr niedrig (minimales JS)

---

## 6. Images — 88/100

### OG-Images ✅ Vollständig

| Seite | Datei | Status |
|-------|-------|--------|
| / | images/og-home.png | ✅ 1200×630 |
| /hivemind | images/og-hivemind.png | ✅ 1200×630 |
| /loesungen | images/og-loesungen.png | ✅ 1200×630 |
| /ai-ready-check | images/og-ai-check.png | ✅ 1200×630 |
| /ueber-uns | images/og-ueber-uns.png | ✅ 1200×630 |

### In-Content
- ✅ Alt-Text auf allen Cosmo-Bildern korrekt
- ⚠️ Keine Produkt-Screenshots oder Workflow-Diagramme
- ⚠️ Kein `loading="lazy"` auf below-fold Bilder

---

## 7. AI Search Readiness — 71/100

**Stärken:**
- robots.txt für alle AI-Crawler offen
- FAQPage-Schema auf 3 Seiten
- Konkrete Metriken in Case Studies (zitierbar)

**Schwächen:**
- llms.txt nicht von HTML-Seiten verlinkt
- FAQ-Antworten zu kurz (100–150 Wörter ideal)
- Keine Autor-Attribution (`<meta name="author">`) auf Content-Seiten
- Kein `sameAs` für externe Verifikation

---

## Per-Page Scores

| Seite | Score | Größte Stärke | Größte Lücke |
|-------|-------|---------------|--------------|
| / | 82 | Value Prop, Schema | Interne Verlinkung |
| /hivemind | 79 | FAQ-Schema, Preise | Kein Wettbewerbsvergleich |
| /loesungen | 71 | Case Studies | Dünne Produktbeschreibungen |
| /ai-ready-check | 84 | Conversion-UX | Keine sichtbare FAQ |
| /ueber-uns | 75 | Gründerstory | H1 ohne Keywords |
| /eu-ai-act | 76 | Transparenz | Inhalt könnte tiefer sein |
| /impressum | 88 | Rechtlich korrekt | Generic Title |
| /datenschutz | 87 | DSGVO-Muster | Kein Inhaltsverzeichnis |

---

*Audit generiert am 2026-04-10*
