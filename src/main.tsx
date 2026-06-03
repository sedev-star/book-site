import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { Camera, ExternalLink, X } from "lucide-react";
import { content, Language, steps, StepContent } from "./content";
import "./styles.css";

function getLanguageFromPath(): Language {
  return window.location.pathname.toLowerCase().includes("/fr") ? "fr" : "nl";
}

function languageUrl(language: Language): string {
  const base = import.meta.env.BASE_URL;
  return language === "fr" ? `${base}fr/` : base;
}

const imgUrl = (src: string) => import.meta.env.BASE_URL + src.slice(1);

function App() {
  const language = getLanguageFromPath();
  const page = content[language];
  const pageSteps = steps[language];

  const [openGallery, setOpenGallery] = useState<StepContent | null>(null);
  const [openRainbowPopup, setOpenRainbowPopup] = useState(false);

  const otherLanguage: Language = language === "nl" ? "fr" : "nl";
  const heroFallback = useMemo(() => "linear-gradient(135deg, #fce7f3, #f9a8d4, #c084fc)", []);

  return (
    <div className="site-shell">
      <header className="hero">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <div className="language-row">
            <a className="language-link" href={languageUrl(otherLanguage)}>{page.otherLanguageLabel}</a>
          </div>
          <div className="hero-grid">
            <div>
              <span className="eyebrow">🌈 {page.heroBadge}</span>
              <h1>{page.heroTitle}</h1>
              <p className="hero-text">{page.heroText}</p>
              <div className="button-row">
                <a className="button button-primary" href="#story">{page.navStory}</a>
                <a className="button button-secondary" href="#links">{page.navLinks}</a>
              </div>
            </div>
            <div className="hero-photo-card">
              <img
                src={imgUrl(page.heroImage)}
                alt={page.heroImageAlt}
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                  event.currentTarget.parentElement!.style.background = heroFallback;
                }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container main">
        <section id="story" className="section">
            <div className="process-card"><h2>{page.processTitle}</h2><div className="paragraphs">{page.processParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></div>
        </section>

        <section className="section">
          <div className="section-heading"><h2>{page.stepsTitle}</h2><p>{page.stepsText}</p></div>
          <div className="steps-grid">
            {pageSteps.map((step) => (
              <article className="step-card" key={step.id}>
                <button className="step-image-button" type="button" onClick={() => setOpenGallery(step)} aria-label={`${page.galleryHint} ${step.title}`}>
                  <img src={imgUrl(step.mainImage)} alt={step.title} />
                  <span className="photo-badge"><Camera size={15} />{language === "nl" ? "Bekijk foto's" : "Voir les photos"}</span>
                </button>
                <div className="step-content"><h3>{step.title}</h3><p>{step.description}</p><p className="hint">{page.galleryHint}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="links" className="section">
          <div className="section-heading"><h2>{page.linksTitle}</h2><p>{page.linksText}</p></div>
          <div className="links-grid two-links">
            {page.productLinks.map((item) => item.type === "popup" ? (
              <button className="link-card" type="button" key={item.title} onClick={() => setOpenRainbowPopup(true)}>
                <span className="link-badge">Bonus</span><h3>{item.title}</h3><p>{item.description}</p><span className="link-action">{item.buttonLabel} →</span>
              </button>
            ) : item.type === "coming-soon" ? (
              <div className="link-card link-card--coming-soon" key={item.title}>
                <span className="link-badge">Amazon</span><h3>{item.title}</h3><p>{item.description}</p>
                <span className="link-coming-soon">{language === "nl" ? "Binnenkort beschikbaar" : "Bientôt disponible"}</span>
              </div>
            ) : (
              <a className="link-card" key={item.title} href={item.href} target="_blank" rel="noreferrer">
                <span className="link-badge">Amazon</span><h3>{item.title}</h3><p>{item.description}</p><span className="link-action">{item.buttonLabel} <ExternalLink size={15} /></span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer><p>{page.footer}</p></footer>

      {openGallery && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal gallery-modal">
            <button className="modal-close" onClick={() => setOpenGallery(null)}><X size={18} />{page.galleryClose}</button>
            <h2>{openGallery.title}</h2>
            <div className="gallery-grid">{openGallery.images.map((image, index) => <img key={image} src={imgUrl(image)} alt={`${openGallery.title} ${index + 1}`} />)}</div>
          </div>
        </div>
      )}

      {openRainbowPopup && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="modal">
            <button className="modal-close" onClick={() => setOpenRainbowPopup(false)}><X size={18} />{page.popupClose}</button>
            <h2>{page.popupTitle}</h2>
            <ol className="rainbow-steps">{page.popupSteps.map((step) => <li key={step}>{step}</li>)}</ol>
            <div className="gallery-grid popup-gallery">{page.popupImages.map((image, index) => <img key={image} src={imgUrl(image)} alt={`${page.popupTitle} ${index + 1}`} />)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
