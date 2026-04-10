# GEO-ANALYSIS — Cittasana AI (ai.cittasana.de)
**Stand: 10. April 2026**

---

## GEO Readiness Score: 62/100

| Kategorie | Gewicht | Score | Punkte |
|-----------|---------|-------|--------|
| Citability (134-167 Wort-Blöcke) | 25% | 5/10 | 12.5 |
| Strukturelle Lesbarkeit | 20% | 7/10 | 14.0 |
| Multi-Modal Content | 15% | 3/10 | 4.5 |
| Authority & Brand Signals | 20% | 6/10 | 12.0 |
| Technical Accessibility | 20% | 9/10 | 18.0 |
| **Gesamt** | | | **61/100** |

---

## Platform-Breakdown

| Plattform | Score | Hauptproblem |
|-----------|-------|--------------|
| Google AI Overviews | 65/100 | Kein Ranking → wenig AIO-Präsenz; Schema gut |
| ChatGPT | 35/100 | Kein Wikipedia-Eintrag; kein Reddit; kaum Erwähnungen |
| Perplexity | 30/100 | Kein Reddit; keine Quellen-URLs bei Statistiken |
| Bing Copilot | 55/100 | robots.txt jetzt vorhanden; SSR perfekt |

---

## AI Crawler Access Status ✅ (nach diesem Update)

| Crawler | Status | Funktion |
|---------|--------|----------|
| GPTBot (OpenAI) | ✅ Erlaubt | ChatGPT Websuche |
| OAI-SearchBot (OpenAI) | ✅ Erlaubt | OpenAI Suchfunktionen |
| ClaudeBot (Anthropic) | ✅ Erlaubt | Claude Web-Features |
| anthropic-ai | ✅ Erlaubt | Anthropic Crawling |
| PerplexityBot | ✅ Erlaubt | Perplexity AI Suche |
| Bytespider | ✅ Erlaubt | TikTok/Douyin KI |
| cohere-ai | ✅ Erlaubt | Cohere Modelle |
| CCBot | ❌ Blockiert | Training-Daten Scraping |

**Vorher:** robots.txt fehlte komplett → unkontrollierter Zugriff.

---

## llms.txt Status ✅ (nach diesem Update)

`/llms.txt` wurde erstellt mit:
- Unternehmensbeschreibung auf Deutsch
- Alle 8 Seiten mit URL + Beschreibung
- Schlüsselfakten (Gründer, Zielgruppe, Preise, Datenschutz, EU AI Act)
- Richtlinien: Indexierung ✅, Zitierung ✅, Training ❌

---

## Brand Mention Analysis

| Plattform | Status | Priorität |
|-----------|--------|-----------|
| Wikipedia | ❌ Nicht vorhanden | Hoch — ChatGPT zitiert Wikipedia in 47,9% der Fälle |
| Reddit | ❌ Nicht vorhanden | Hoch — Perplexity zitiert Reddit in 46,7% der Fälle |
| LinkedIn | ⚠️ Nicht verknüpft | Mittel — sameAs-Link im Person-Schema fehlt |
| YouTube | ❌ Kein Kanal | Niedrig — stärkster Signal-Korrelator (0.737) |
| GitHub | ❌ Nicht verknüpft | Niedrig |

**Kritische Lücke:** Ohne Wikipedia-Eintrag für Cittasana S.R.L. oder Cosmo Gräf ist ChatGPT-Zitierung nahezu ausgeschlossen.

---

## Passage-Level Citability

### Starke GEO-Kandidaten (bereits gut):

**1. Gründergeschichte (ueber-uns) — ~140 Wörter** ✅
> "Ich habe Cittasana gegründet, weil ich als Unternehmer selbst erlebt habe wie viel Zeit in Prozesse fließt statt in das eigentliche Geschäft..."
— Selbstständig, quotierbar, persönlich attribuiert.

**2. HiveMind-Risikoeinstufung (eu-ai-act) — ~80 Wörter** ✅
> "HiveMind unterstützt Mitarbeiter beim Auffinden von Informationen... Es trifft keine verbindlichen Entscheidungen... Einstufung: Minimales Risiko gemäß Art. 50 EU AI Act (GPAI-System)."
— Regulatorische Präzision, zitierbar für Compliance-Anfragen.

**3. FAQ-Schema (index.html)** ✅
Drei strukturierte Q&A-Paare in FAQPage-Schema — direkt von Google AI Overviews extrahierbar.

### Schwache Citability (Priorität: verbessern):

**Lösungsseite** — Jede Produktbeschreibung ist ~20-50 Wörter. Zu fragmentiert.
→ Jede Lösung braucht einen 134-167 Wort "Was ist X?"-Block.

**Startseite** — Hero-Text (~32 Wörter) und Case Studies (~13 Wörter) weit unter Optimum.
→ Case Studies auf ~150 Wörter ausbauen mit Kontext, Ausgangslage, Ergebnis.

---

## Server-Side Rendering Check ✅

**Alle Seiten: statisches HTML** — kein JavaScript-Dependency für Inhalte.

AI-Crawler die kein JavaScript ausführen sehen 100% des Inhalts. Ausnahme: Das Kontaktformular (ai-ready-check) ist JS-gesteuert, aber der umgebende Content ist vollständig in HTML.

---

## Top 5 Höchste-Impact-Änderungen

### 1. 🔴 Wikipedia-Eintrag erstellen (HIGH IMPACT)
ChatGPT zitiert Wikipedia in 47,9% der Fälle. Ohne Eintrag für "Cosmo Gräf" oder "Cittasana" ist ChatGPT-Präsenz minimal.
**Aktion:** Neutralen Wikipedia-Stub für Cosmo Gräf erstellen (Unternehmer, KI-Automatisierung, Cittasana-Gründer) mit externen Quellen.

### 2. 🔴 Reddit-Präsenz aufbauen (HIGH IMPACT)
Perplexity zitiert Reddit in 46,7% der Fälle. Kein einziger Reddit-Thread erwähnt Cittasana.
**Aktion:** In r/automation, r/Unternehmertum, r/artificial, r/KI-Deutschland hilfreiche Antworten geben. Kein Spam — echter Mehrwert.

### 3. 🟠 Lösungsseite: "Was ist X?"-Blöcke ergänzen (MEDIUM IMPACT)
Jede Lösung braucht einen 134-167 Wort selbstständigen Erklärungs-Block der als erste Frage beantwortet: "Was ist AutoFlow Portal / InvoiceBot / HiveMind?"
**Format:** H3 "Was ist [Produkt]?" + 2-3 Absätze + Ergebnis-Metrik.

### 4. 🟠 Fallstudien ausbauen (MEDIUM IMPACT)
Aktuelle Case Studies: 1-2 Sätze + eine Metrik. Für GEO-Citability braucht es ~150 Wörter:
Ausgangslage → Herausforderung → Lösung → Ergebnis → Lernpunkt.

### 5. 🟡 LinkedIn sameAs + Structured Data (LOW-MEDIUM)
Person-Schema und Organization-Schema mit sameAs-Links zu LinkedIn, GitHub etc. erweitern.
Google nutzt sameAs für Entity-Matching — stärkt das Vertrauen in die Quelle.

---

## Schema-Empfehlungen

| Seite | Vorhanden | Fehlend |
|-------|-----------|---------|
| index.html | Organization, WebSite, FAQPage ✅ | BreadcrumbList |
| loesungen/ | ItemList ✅ | Service (je Produkt), FAQPage |
| hivemind/ | SoftwareApplication, Offer ✅ | FAQPage-Schema (FAQ-Sektion ist da, Schema fehlt) |
| ueber-uns/ | Person ✅ | sameAs-Links (LinkedIn, GitHub) |
| ai-ready-check/ | Service ✅ | FAQPage |
| eu-ai-act/ | — | TechArticle ✅ (heute ergänzt), FAQPage ✅ (heute ergänzt) |

### Sofort ergänzen auf hivemind/:
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Müssen wir bestehende Systeme ersetzen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nein. HiveMind verbindet sich mit Ihren bestehenden Tools — Slack, Gmail, Google Drive, Notion, GitHub — ohne Migration oder Systemwechsel." } },
    { "@type": "Question", "name": "Wie sicher sind unsere Daten bei HiveMind?",
      "acceptedAnswer": { "@type": "Answer", "text": "Alle Daten liegen auf EU-Servern (Frankfurt). Jede Kundeninstanz ist vollständig isoliert. Kein Training auf Kundendaten. DSGVO-konform gemäß EU 2016/679." } }
  ]
}
```

---

## Content-Reformatierungs-Vorschläge

### Startseite — Case Study ausbauen:
**Jetzt (~40 Wörter):**
> "AutoFlow Portal — Steuerberatungskanzlei, 14 MA. Bearbeitungsaufwand: 3h/Tag → 25 Min./Tag."

**GEO-optimiert (~155 Wörter):**
> "Eine mittelständische Steuerberatungskanzlei mit 14 Mitarbeitern kämpfte täglich mit drei Stunden E-Mail-Chaos: Mandanten-Anfragen gingen verloren, Zuständigkeiten waren unklar, Follow-ups wurden vergessen. Das Team verbrachte mehr Zeit mit Verwaltung als mit Beratung. Cittasana implementierte AutoFlow Portal — ein strukturiertes Eingangsportal das alle Mandantenanfragen automatisch erfasst, kategorisiert und dem zuständigen Berater zuweist. Statustracking läuft automatisch, Eskalationsregeln greifen bei Überschreitung von Antwortzeiten. Ergebnis nach 6 Wochen: Bearbeitungsaufwand von 3 Stunden täglich auf 25 Minuten reduziert — eine Einsparung von 87%. Das Team hat die freigewordene Zeit direkt in Mandantenbetreuung investiert. Alle Angaben anonymisiert; Ergebnisse variieren je nach Ausgangssituation."

### Lösungsseite — AutoFlow Definition ergänzen:
Vor der Feature-Liste folgende H3 + Absatz einfügen:
> **Was ist AutoFlow Portal?**
> AutoFlow Portal ist ein KI-gestütztes Kundenanfragen-Managementsystem für Unternehmen mit 10–50 Mitarbeitern. Es erfasst eingehende Anfragen aus E-Mail, Webformular und anderen Kanälen, kategorisiert sie automatisch nach Thema und Dringlichkeit und weist sie dem zuständigen Mitarbeiter zu. Anders als klassische Ticket-Systeme ist AutoFlow in 4–6 Wochen einsatzbereit und erfordert keine IT-Abteilung. Typisches Ergebnis: 60% weniger E-Mail-Volumen, vollständige Transparenz über alle offenen Vorgänge, keine verlorenen Anfragen mehr. Geeignet für Steuerberatungen, Dienstleister, Handwerksbetriebe und Beratungsunternehmen.

---

## Umgesetzte Änderungen (heute)

- ✅ `robots.txt` erstellt — alle relevanten AI-Crawler erlaubt, CCBot blockiert
- ✅ `llms.txt` erstellt — strukturiertes Inhaltsverzeichnis für LLM-Crawler
- ✅ `sitemap.xml` erstellt — alle 8 Seiten mit Prioritäten und Lastmod
- ✅ EU AI Act: TechArticle + FAQPage Schema ergänzt
- ✅ EU AI Act: Publikationsdaten-Meta-Tags ergänzt
- ✅ Startseite: Publikationsdaten-Meta-Tags ergänzt

## Ausstehend (nächste Schritte)

- ⬜ Wikipedia-Eintrag für Cosmo Gräf / Cittasana
- ⬜ Reddit-Präsenz aufbauen (r/automation, r/Unternehmertum)
- ⬜ HiveMind-Seite: FAQPage-Schema in `<script type="application/ld+json">` einbauen
- ⬜ Lösungsseite: "Was ist X?"-Blöcke für alle 6 Produkte (je 134-167 Wörter)
- ⬜ Case Studies ausbauen: 40 → 150 Wörter
- ⬜ Person-Schema: sameAs-Links ergänzen (LinkedIn, GitHub)
- ⬜ YouTube-Kanal aufbauen (höchste Korrelation mit AI-Zitierungen: 0.737)
