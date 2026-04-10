# Full SEO Audit Report — ai.cittasana.de
**Erstellt: 10. April 2026**

---

## SEO Health Score: 71/100

| Kategorie | Gewicht | Score | Punkte |
|-----------|---------|-------|--------|
| Technical SEO | 25% | 7.5/10 | 18.75 |
| Content Quality | 25% | 8.0/10 | 20.00 |
| On-Page SEO | 20% | 7.0/10 | 14.00 |
| Schema / Structured Data | 10% | 9.0/10 | 9.00 |
| Performance (CWV) | 10% | 6.0/10 | 6.00 |
| Images | 5% | 1.0/10 | 0.50 |
| AI Search Readiness | 5% | 8.0/10 | 4.00 |
| **Gesamt** | | | **72.25 → 71/100** |

**Business Type:** B2B SaaS / KI-Beratung — Mittelstand DACH

---

## Top 5 Kritische Issues

1. 🔴 `og-image.png` → **404** — Social-Card referenziert auf Homepage, Datei existiert nicht
2. 🔴 **Keine Bilder auf der gesamten Website** — Nur CSS-Platzhalter; fehlende Gründerfoto; kein alt-Text möglich
3. 🟠 **4 von 6 Meta-Descriptions zu lang** — Bis zu 204 Zeichen; Ideal: 120–160
4. 🟠 **Keine Security Headers** — X-Content-Type-Options, X-Frame-Options, Referrer-Policy fehlen in Vercel-Config
5. 🟠 **Google Fonts via US-CDN** — IP-Übertragung an Google; wird in Datenschutzerklärung erwähnt, aber DSGVO-Risiko bleibt

## Top 5 Quick Wins

1. ✅ Gründerfoto als PNG/WebP erstellen + `<img>` mit alt-Text einbauen
2. ✅ `og-image.png` (1200×630px) erstellen und deployen
3. ✅ Security Headers in `vercel.json` ergänzen (5 Minuten)
4. ✅ Meta-Descriptions auf max. 155 Zeichen kürzen (4 Seiten)
5. ✅ Google Fonts selbst hosten (eliminiert US-Datentransfer)

---

## Technical SEO

### Crawlability ✅
- robots.txt vorhanden, korrekt konfiguriert
- Alle AI-Crawler erlaubt (GPTBot, ClaudeBot, PerplexityBot etc.)
- CCBot (Training-Scraper) blockiert
- Sitemap in robots.txt referenziert

### Indexability ✅
- 6 Indexseiten korrekt auf `index, follow`
- 2 Rechtsseiten korrekt auf `noindex, follow` (Impressum, Datenschutz)
- Sitemap enthält nur indexierbare Seiten (noindex-Seiten ausgeschlossen)

### HTTP Status Codes
| URL | Status |
|-----|--------|
| `https://ai.cittasana.de/` | ✅ 200 |
| `https://ai.cittasana.de/loesungen` | ✅ 200 |
| `https://ai.cittasana.de/hivemind` | ✅ 200 |
| `https://ai.cittasana.de/sitemap.xml` | ✅ 200 |
| `https://ai.cittasana.de/robots.txt` | ✅ 200 |
| `https://ai.cittasana.de/og-image.png` | 🔴 **404** |

### HTTPS & Security Headers
| Header | Status | Wert |
|--------|--------|------|
| HTTPS | ✅ | Erzwungen via Vercel |
| HSTS | ✅ | max-age=63072000 (2 Jahre) |
| X-Content-Type-Options | ❌ | Fehlt |
| X-Frame-Options | ❌ | Fehlt |
| Referrer-Policy | ❌ | Fehlt |
| Content-Security-Policy | ❌ | Fehlt |

### Canonicals ✅
Alle 8 Seiten haben korrekte Canonical-Tags auf HTTPS-URLs.

### Sitemap
- ✅ XML gültig, 6 URLs, alle HTTP 200
- ✅ Keine noindex-Seiten enthalten
- ✅ Keine deprecated `<priority>` oder `<changefreq>` Tags
- ✅ In robots.txt referenziert
- ✅ In Google Search Console eingereicht

---

## Content Quality

### Wortanzahl pro Seite
| Seite | Wörter | Bewertung |
|-------|--------|-----------|
| Startseite | ~2.100 | ✅ Gut |
| Lösungen | ~1.800 | ✅ Gut |
| HiveMind | ~1.950 | ✅ Gut |
| Über uns | ~2.100 | ✅ Gut |
| AI-Ready-Check | ~900 | ⚠️ Formular-lastig, OK |
| EU AI Act | ~2.100+ | ✅ Sehr gut |

### E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness)
- **Experience:** ✅ Founder-Story aus persönlicher Unternehmenserfahrung
- **Expertise:** ✅ Person-Schema mit Credentials; EU AI Act Compliance-Seite
- **Authoritativeness:** ⚠️ Keine externen Verlinkungen auf Cittasana; kein Wikipedia-Eintrag
- **Trustworthiness:** ✅ Vollständige Rechtsseiten; keine Cookies; DSGVO-konform; Preistransparenz

### Thin Content
Keine Seite hat dünnen Inhalt — alle Kernseiten >900 Wörter.

### Duplicate Content
Kein Duplicate Content erkannt. Alle Canonicals eindeutig.

---

## On-Page SEO

### Title Tags
| Seite | Zeichen | Status |
|-------|---------|--------|
| Startseite: "KI-Automatisierung für den Mittelstand \| Cittasana AI" | 56 | ✅ Optimal |
| Lösungen: "KI-Automatisierungslösungen für den Mittelstand \| Cittasana AI" | 62 | ⚠️ +2 Zeichen |
| HiveMind: "HiveMind — KI-Wissensmanagement für den Mittelstand \| Cittasana AI" | 65 | ⚠️ +5 Zeichen |
| Über uns: "Über uns — Cosmo Gräf & Cittasana AI \| KI-Automatisierung Mittelstand" | 69 | ⚠️ +9 Zeichen |
| AI-Check: "Kostenloser AI-Ready-Check für Unternehmen \| Cittasana AI" | 56 | ✅ Optimal |
| EU AI Act: "EU AI Act Konformität \| Cittasana AI" | 35 | ⚠️ Zu kurz |

### Meta Descriptions
| Seite | Zeichen | Status |
|-------|---------|--------|
| Startseite | 192 | 🔴 Zu lang (+32) |
| Lösungen | 168 | 🔴 Zu lang (+8) |
| HiveMind | 185 | 🔴 Zu lang (+25) |
| Über uns | 200 | 🔴 Zu lang (+40) |
| AI-Check | 204 | 🔴 Zu lang (+44) |
| EU AI Act | 150 | ✅ Optimal |

### H1-Tags
Alle 6 Indexseiten: genau 1 H1 ✅

### H2/H3-Hierarchie
- Alle Seiten: logische H1→H2→H3-Kette ✅
- Auf Lösungsseite: H5-Tags für Fehler-Liste — empfohlen H3 verwenden ⚠️
- Fragebasierte Überschriften: vorhanden auf HiveMind ("Häufige Fragen") und Lösungen ✅

### Interne Verlinkung
- Alle Hauptseiten über Nav erreichbar ✅
- Konsistente Footer-Navigation ✅
- AI-Ready-Check als CTA auf jeder Seite ✅
- EU AI Act nur in Footer/Nav verlinkt (strategische Unterseite — könnte prominenter sein)

### Open Graph
| Seite | og:title | og:description | og:image |
|-------|----------|----------------|----------|
| Startseite | ✅ | ✅ | 🔴 404! |
| Lösungen | ✅ | ✅ | ❌ Fehlt |
| HiveMind | ✅ | ✅ | ❌ Fehlt |
| Über uns | ✅ | ✅ | ❌ Fehlt |
| AI-Check | ✅ | ✅ | ❌ Fehlt |
| EU AI Act | ✅ | ✅ | ❌ Fehlt |

---

## Schema & Structured Data ✅

| Seite | Schema-Typen | Bewertung |
|-------|-------------|-----------|
| Startseite | Organization, WebSite, FAQPage | ✅ Exzellent |
| Lösungen | ItemList | ✅ Gut |
| HiveMind | SoftwareApplication (mit Pricing) | ✅ Sehr gut |
| Über uns | Person (Cosmo Gräf) | ✅ Gut |
| AI-Check | Service | ✅ Gut |
| EU AI Act | TechArticle, FAQPage | ✅ Sehr gut |

**Fehlend:**
- HiveMind: FAQPage-Schema (FAQ-Sektion ist da, Schema noch nicht eingebaut)
- Alle Seiten: BreadcrumbList
- Person-Schema: sameAs-Links (LinkedIn, GitHub) fehlen

---

## Performance

### HTTP Response Headers
- Cache-Control: `public, max-age=0, must-revalidate` — Vercel CDN cachet, re-validiert bei Änderung ✅
- Server: Vercel (Frankfurt, EU) — geringer Latenz für DACH ✅
- ETag vorhanden ✅

### Render-Blocking Resources
- Tailwind CSS via CDN — lädt synchron, könnte LCP verlangsamen ⚠️
- Google Fonts via CDN — blocking render bis Schriften geladen ⚠️
- Empfehlung: Schriften self-hosten + `font-display: swap`

### JavaScript
- Kein schweres JS-Framework (kein React, kein Next.js) ✅
- Nur Tailwind CDN + minimales Inline-JS für Formular ✅
- Erwartet sehr gute CWV-Scores

---

## Images 🔴

**Kritischer Befund: Keine echten Bilder auf der gesamten Website.**

| Problem | Seiten | Impact |
|---------|--------|--------|
| `og-image.png` → 404 | Startseite (og:image referenziert) | 🔴 Hoch |
| Kein Gründerfoto | Startseite, Über uns, AI-Check | 🔴 Hoch |
| Keine Produkt-Screenshots | Lösungen, HiveMind | 🟠 Mittel |
| Alle Bildplatzhalter via CSS | Alle Seiten | 🟠 Mittel |

Alt-Text: Nicht anwendbar (keine `<img>`-Tags) — aber sobald Bilder ergänzt werden, zwingend erforderlich.

---

## AI Search Readiness

- robots.txt: Alle AI-Crawler erlaubt ✅
- llms.txt: Vorhanden, strukturiert ✅
- Schema-Abdeckung: 6/6 Indexseiten ✅
- SSR: 100% statisches HTML ✅
- FAQ-Schema auf 3 Seiten ✅
- Gründergeschichte (GEO-Kandidat, ~140 Wörter) ✅
- Wikipedia/Reddit-Präsenz: ❌ Fehlt (größte GEO-Lücke)

---

## Vollständige Befunde — Rechtliches

**Impressum:**
- Platzhalter noch offen: `<!-- CUI EINTRAGEN -->`, `<!-- J-NUMMER EINTRAGEN -->`, `<!-- UST-ID EINTRAGEN -->`
- Rechtlich kritisch — Bußgeldrisiko bei Abmahnung ohne vollständige Registerangaben
