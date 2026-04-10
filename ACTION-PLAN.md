# SEO Action Plan — ai.cittasana.de
**Stand: 10. April 2026 | Score: 71/100 → Ziel: 85/100**

---

## 🔴 KRITISCH — Sofort beheben

### 1. og-image.png erstellen (404-Fehler)
Die Startseite referenziert `https://ai.cittasana.de/og-image.png` — Datei existiert nicht.
Jeder Social-Share (LinkedIn, WhatsApp, Twitter) zeigt kein Vorschaubild.

**Fix:**
- 1200×630px PNG/WebP erstellen (Canva, Figma, etc.)
- Als `og-image.png` in Root des Repos ablegen
- Auf allen Unterseiten ebenfalls referenzieren (derzeit 5 Seiten ohne og:image)

---

### 2. Gründerfoto einbauen
3 Seiten haben CSS-Platzhalter ("CG"-Initials-Avatar). Echte Fotos sind für E-E-A-T und Conversion entscheidend.

**Fix:** Professionelles Foto (400×400px, WebP) als `/images/cosmo-graef.jpg` ablegen:
```html
<img src="/images/cosmo-graef.jpg"
     alt="Cosmo Gräf, Gründer von Cittasana AI"
     width="288" height="288"
     class="w-72 h-72 rounded-full object-cover border border-outline" />
```
Auf: Startseite, Über uns, AI-Ready-Check.

---

## 🟠 HOCH — Diese Woche

### 3. Security Headers in vercel.json

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "SAMEORIGIN" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    }
  ]
}
```

---

### 4. Meta-Descriptions kürzen (5 Seiten zu lang)

| Seite | Aktuell | Gekürzt auf |
|-------|---------|-------------|
| Startseite (192 Z.) | "Cittasana AI automatisiert repetitive Prozesse für Unternehmen mit 10–50 Mitarbeitern. Von Dokumentensuche bis Workflow-Automatisierung. Kostenloser AI-Ready-Check — 5 Plätze pro Monat." | "KI-Automatisierung für den Mittelstand. Workflows, Dokumentensuche, HiveMind-Wissensmanagement. Kostenloser AI-Ready-Check — 5 Plätze/Monat." (138 Z.) |
| Lösungen (168 Z.) | Aktuell | "Sechs fertige KI-Lösungen für Unternehmen mit 10–50 MA: AutoFlow, InvoiceBot, HiveMind und mehr. In Wochen live, nicht Monaten." (129 Z.) |
| HiveMind (185 Z.) | Aktuell | "HiveMind verbindet Dokumente, Slack und E-Mails zu einem KI-Assistenten. Semantische Suche, Auto-Connectors, KI-Agenten. Ab €149/Monat." (136 Z.) |
| Über uns (200 Z.) | Aktuell | "Cittasana AI — gegründet von Cosmo Gräf aus eigener Unternehmenserfahrung. Kein Account-Manager. Sie sprechen immer mit dem Entwickler." (138 Z.) |
| AI-Check (204 Z.) | Aktuell | "Kostenloser AI-Ready-Check: 20 Minuten, konkrete Automatisierungspotenziale, Umsetzungsplan ohne Kaufverpflichtung. 5 Plätze/Monat." (133 Z.) |

---

### 5. Impressum Pflichtangaben ausfüllen
Abmahnrisiko solange CUI und J-Nummer fehlen.

```
CUI (Codul Unic de Înregistrare): [beim Registrul Comerțului abrufen]
Nr. Reg. Com. (J-Nummer): [beim Oficiul Registrului Comerțului abrufen]
UST-ID: [bei ANSPDCP oder Steuerbehörde beantragen, sofern pflichtig]
```

---

## 🟡 MITTEL — Diesen Monat

### 6. Google Fonts selbst hosten
Eliminiert US-Datentransfer (DSGVO-Grauzone) und verbessert LCP.

```bash
# Schriften herunterladen: https://gwfh.mranftl.com/fonts
# Newsreader + Manrope als woff2 in /fonts/ ablegen
```
In CSS ersetzen:
```css
@font-face {
  font-family: 'Manrope';
  src: url('/fonts/manrope.woff2') format('woff2');
  font-display: swap;
}
```

---

### 7. HiveMind FAQ-Schema ergänzen
Die FAQ-Sektion ist vorhanden, das Schema fehlt noch.

```json
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Müssen wir bestehende Systeme ersetzen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nein. HiveMind verbindet sich mit Ihren bestehenden Tools..." } },
    { "@type": "Question", "name": "Wie sicher sind unsere Daten?",
      "acceptedAnswer": { "@type": "Answer", "text": "Alle Daten liegen auf EU-Servern (Frankfurt). DSGVO-konform, kein Training auf Kundendaten." } }
  ]
}
</script>
```

---

### 8. Person-Schema: sameAs ergänzen
```json
{
  "@type": "Person",
  "name": "Cosmo Gräf",
  "sameAs": [
    "https://www.linkedin.com/in/[your-profile]",
    "https://github.com/[your-github]"
  ]
}
```

---

### 9. EU AI Act Title Tag verlängern
Aktuell: "EU AI Act Konformität | Cittasana AI" (35 Z.)
Empfohlen: "EU AI Act Konformität & KI-Transparenz | Cittasana AI" (52 Z.)

---

### 10. H5-Tags auf Lösungsseite zu H3 hochstufen
"5 Fehler die KI-Projekte scheitern lassen" verwendet H5 — sollte H3 sein für korrekte Hierarchie.

---

## 📋 NIEDRIG — Backlog

| # | Maßnahme | Aufwand |
|---|----------|---------|
| 11 | hreflang für AT + CH ergänzen (wenn DACH-Targeting) | Niedrig |
| 12 | BreadcrumbList-Schema auf allen Seiten | Niedrig |
| 13 | Produkt-Screenshots für Lösungsseite | Mittel |
| 14 | Wikipedia-Stub Cosmo Gräf / Cittasana | Hoch |
| 15 | Reddit-Präsenz aufbauen | Hoch |
| 16 | YouTube-Kanal (stärkster AI-Citation-Faktor: 0.737 Korrelation) | Hoch |

---

## Score-Prognose nach Umsetzung

| Phase | Maßnahmen | Erwarteter Score |
|-------|-----------|-----------------|
| Jetzt | 71/100 | — |
| Nach Phase 1 (Kritisch) | #1–2 | +5 → 76/100 |
| Nach Phase 2 (Hoch) | #3–5 | +5 → 81/100 |
| Nach Phase 3 (Mittel) | #6–10 | +4 → 85/100 |
| Nach Phase 4 (Niedrig + Brand) | #11–16 | +7 → 92/100 |
