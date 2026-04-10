# SEO Action Plan — ai.cittasana.de
**Stand: 2026-04-10 | Score: 78/100 → Ziel: 88/100**

---

## CRITICAL — Sofort (< 2 Stunden gesamt, alle "S" Effort)

### 1. BreadcrumbList-Schema auf allen Unterseiten ergänzen
- **Problem:** Kein Breadcrumb-Schema → Google zeigt keine Sitelink-Navigation in SERPs
- **Impact:** 5–10% CTR-Verbesserung möglich
- **Effort:** S
- **Dateien:** loesungen/, hivemind/, ai-ready-check/, ueber-uns/, eu-ai-act/ — je `index.html` im `<head>`

```html
<!-- BreadcrumbList Schema — in <head> einfügen -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ai.cittasana.de/" },
    { "@type": "ListItem", "position": 2, "name": "SEITENNAME", "item": "https://ai.cittasana.de/SLUG" }
  ]
}
</script>
```

Konkrete Werte pro Seite:
- /loesungen → "Lösungen" / `/loesungen`
- /hivemind → "HiveMind" / `/hivemind`
- /ai-ready-check → "AI-Ready-Check" / `/ai-ready-check`
- /ueber-uns → "Über uns" / `/ueber-uns`
- /eu-ai-act → "EU AI Act" / `/eu-ai-act`

---

### 2. llms.txt von allen Seiten verlinken
- **Problem:** `/llms.txt` existiert, aber AI-Crawler finden sie nicht zuverlässig ohne HTML-Referenz
- **Impact:** Direkte Verbesserung der AI-Suchsichtbarkeit
- **Effort:** S
- **Aktion:** In `<head>` aller 8 HTML-Seiten nach `<meta charset>` einfügen:

```html
<link rel="alternate" type="text/plain" href="/llms.txt" />
```

---

### 3. sitemap.xml — /impressum und /datenschutz ergänzen
- **Problem:** 2 Seiten fehlen in der Sitemap
- **Effort:** S
- **Datei:** `sitemap.xml` — vor `</urlset>` einfügen:

```xml
<url>
  <loc>https://ai.cittasana.de/impressum</loc>
  <lastmod>2026-04-10</lastmod>
  <changefreq>never</changefreq>
</url>
<url>
  <loc>https://ai.cittasana.de/datenschutz</loc>
  <lastmod>2026-04-10</lastmod>
  <changefreq>never</changefreq>
</url>
```

---

### 4. WebPage-Schema mit Datum auf Content-Seiten
- **Problem:** Nur /eu-ai-act hat `datePublished`/`dateModified` — Google wertet Freshness
- **Effort:** S
- **Dateien:** index.html, loesungen/, hivemind/, ai-ready-check/, ueber-uns/

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "datePublished": "2026-04-01",
  "dateModified": "2026-04-10"
}
</script>
```

---

### 5. Title Tags für Impressum und Datenschutz verbessern
- **Problem:** "Impressum | Cittasana AI" (29 Zeichen) zu kurz und generisch
- **Effort:** S
- **Fixes:**
  - `impressum/index.html` Zeile 6: → `"Impressum — Cittasana S.R.L. | KI-Automatisierung, Frankfurt"`
  - `datenschutz/index.html` Zeile 6: → `"Datenschutzerklärung — Kein Tracking, DSGVO-konform | Cittasana AI"`

---

## HIGH — Diese Woche (Woche 1–2)

### 6. FAQ-Antworten auf 100+ Wörter erweitern
- **Problem:** Google AI Overview und "People also ask" bevorzugen ausführliche Antworten (100–150 Wörter)
- **Impact:** Hoch — direkte Sichtbarkeit in AI-generierten Suchergebnissen
- **Effort:** M
- **Dateien:**
  - `index.html` — 3 FAQs im JSON-LD (Zeilen 51–74)
  - `hivemind/index.html` — 5 FAQs im JSON-LD (Zeilen 44–85)
  - `eu-ai-act/index.html` — 3 FAQs im JSON-LD

**Beispiel-Erweiterung (hivemind — "Müssen wir bestehende Systeme ersetzen?"):**

Vorher (40 Wörter):
> "Nein. HiveMind verbindet sich mit Ihren bestehenden Tools — es ersetzt nichts, es verbindet. Slack, Gmail, Drive, Notion bleiben wie sie sind."

Nachher (120 Wörter):
> "Nein — HiveMind ist ein Add-on, kein Ersatz. Das System verbindet sich via API mit Ihren bestehenden Tools und liest Daten aus, ohne etwas zu verändern. Slack-Kanäle, Gmail-Postfächer, Google Drive-Ordner, Notion-Workspaces und GitHub-Repositories bleiben exakt so wie sie sind. Ihre Mitarbeiter arbeiten weiterhin in den gewohnten Tools. HiveMind läuft im Hintergrund, synchronisiert automatisch und macht alle Inhalte über eine einzige Suchoberfläche zugänglich. Die Einrichtung der Connectors übernehmen wir vollständig — kein IT-Aufwand auf Ihrer Seite. Im Starter-Plan beginnen wir mit manuellem Dokumenten-Upload; im Business-Plan laufen alle 6 Auto-Connectors automatisch."

---

### 7. sameAs und foundingDate in Organization-Schema ergänzen
- **Problem:** Schema ohne `sameAs` → Google kann Entität nicht mit externen Quellen verknüpfen
- **Effort:** S
- **Datei:** `index.html` — Organization-Schema erweitern:

```json
"sameAs": [
  "https://www.linkedin.com/company/cittasana-ai"
],
"foundingDate": "2024",
"numberOfEmployees": { "@type": "QuantitativeValue", "value": 1 }
```

---

### 8. Person-Schema für Cosmo Gräf vervollständigen
- **Problem:** `image` und `sameAs` fehlen → AI-Crawler können Founder-Entität nicht verifizieren
- **Effort:** S
- **Datei:** `ueber-uns/index.html` — Person-Schema (Zeile 22):

```json
"image": "https://ai.cittasana.de/images/cosmo-graef.jpg",
"sameAs": ["https://www.linkedin.com/in/cosmo-graef"]
```

---

## MEDIUM — Nächste 2–4 Wochen

### 9. Produktbeschreibungen auf /loesungen auf 300+ Wörter erweitern
- **Problem:** 183 Wörter pro Produkt im Durchschnitt — SEO-Minimum sind 300
- **Impact:** Hoch (Keyword-Rankings, Verweildauer, Bounce Rate)
- **Effort:** L (3–4 Stunden gesamt)
- **Datei:** `loesungen/index.html` — 6 Produktkarten (Zeilen 120–254)

Pro Produkt ergänzen:
- Technische Anforderungen / Integrationen
- Konkreter Anwendungsfall (Branche)
- Typischer ROI / Zeitersparnis
- DSGVO / Compliance-Hinweis

---

### 10. Interne Verlinkung verbessern
- **Problem:** /loesungen verlinkt alle CTAs nur auf /ai-ready-check, keine Quervernetzung
- **Effort:** M
- **Empfehlungen:**
  - /hivemind → Link zu /loesungen ("Weitere KI-Lösungen für Ihren Betrieb")
  - /loesungen → Link zu /ueber-uns ("Alle Systeme werden von Cosmo Gräf persönlich gebaut")
  - /ai-ready-check → Link zu /hivemind ("Sehen Sie HiveMind live in Aktion")
  - Homepage → Link zu /eu-ai-act ("EU AI Act konform seit 2026")

---

### 11. H1 auf /ueber-uns mit Keywords versehen
- **Problem:** H1 "Nicht weil der Markt es hergab..." enthält null Keywords
- **Effort:** S
- **Datei:** `ueber-uns/index.html`
- **Vorschlag:** Subtitle nach H1 ergänzen:

```html
<h1 ...>Nicht weil der Markt es hergab.<br/>Sondern weil wir daran glauben.</h1>
<p class="text-primary ...">KI-Automatisierung für den Mittelstand — gegründet von Cosmo Gräf</p>
```

---

### 12. E-E-A-T auf /ueber-uns stärken
- **Problem:** Gründerstory überzeugend, aber keine Drittpartei-Validierung
- **Effort:** M (abhängig von Verfügbarkeit der Inhalte)
- **Ergänzungen:**
  - 2–3 anonymisierte Kunden-Testimonials (mit Rolle/Unternehmensgröße)
  - Zertifizierungen oder Partnerschaften (falls vorhanden)
  - LinkedIn-Profil-Link (falls öffentlich)

---

## LOW — Backlog (Monat 2–3)

### 13. Vergleichs-Content ergänzen
- "HiveMind vs. Notion AI" / "Cittasana vs. Zapier / Make.com"
- Captures comparison-searches, positioniert als thought leader
- **Effort:** M

### 14. Produkt-Screenshots und Workflow-Diagramme
- Keine visuellen Beweise der Produktinterfaces vorhanden
- **Effort:** L (4–6 Stunden pro Produkt)

### 15. Blog / Resource Section starten
- 10+ Artikel über KI-Automatisierung im Mittelstand
- Langfristiger organischer Traffic-Aufbau
- **Effort:** L (ongoing)

### 16. hreflang vorbereiten
- Aktuell nicht nötig (nur DE), aber Template für zukünftige EN-Version bereit halten
- **Effort:** S (wenn benötigt)

---

## Zusammenfassung

| Priorität | Anzahl Items | Geschätzte Zeit | Erwarteter Score-Lift |
|-----------|-------------|-----------------|----------------------|
| Critical | 5 | ~2 Stunden | +4–5 Punkte |
| High | 3 | ~3 Stunden | +3–4 Punkte |
| Medium | 4 | ~6 Stunden | +2–3 Punkte |
| Low | 4 | Ongoing | +1–2 Punkte |

**Realistisches Ziel nach Critical + High:** 85–86 / 100

---

## Quick-Win-Checkliste (1 Tag)

- [ ] BreadcrumbList-Schema auf 5 Unterseiten
- [ ] llms.txt-Link auf alle 8 Seiten
- [ ] sitemap.xml um /impressum und /datenschutz ergänzen
- [ ] WebPage-Schema mit Datum auf 5 Seiten
- [ ] Title Tags für Impressum und Datenschutz
- [ ] sameAs + foundingDate in Organization-Schema
- [ ] Person-Schema image + sameAs für Cosmo

**Geschätzte Gesamtzeit für Quick Wins: 2–3 Stunden**

---

*Erstellt am 2026-04-10*
