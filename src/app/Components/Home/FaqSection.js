import React from "react";

export default function FaqSection() {
    return (
        <section className="faq-section">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <h2 className="faq-title">
                            Frequently asked<br />Questions
                        </h2>

                        <p className="faq-desc">
                            Nulla tristique efficitur nisi, at scelerisque nisl iaculis id.
                            Quisque aliquet, sem at scelerisque convallis, risus nisl
                            tincidunt neque, vitae sodal
                        </p>

                        <div className="faq-card">
                            <h3>Still Have a<br />question ?</h3>
                            <button className="btn faq-btn">Sent Email</button>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="accordion faq-accordion" id="faqAccordion">

                            <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                    </button>
                                </h2>
                                <div id="faq1" className="accordion-collapse collapse show">
                                    <div className="accordion-body">
                                        Nulla tristique efficitur nisi, at scelerisque nisl iaculis id.
                                        Quisque aliquet, sem at scelerisque convallis, risus nisl
                                        tincidunt neque, vitae sodal
                                    </div>
                                </div>
                            </div>

                            {[
                                "Vivamus luctus eros aliquet convallis ultricies?",
                                "scelerisque eros ut, finibus velit?",
                                "Vivamus luctus eros aliquet convallis ultricies?",
                                "ulla tristique efficitur nisi, at scelerisque nisl iaculis id?",
                                "Vivamus luctus eros aliquet convallis ultricies?"
                            ].map((q, i) => (
                                <div className="accordion-item" key={i}>
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#faq${i + 2}`}
                                        >
                                            {q}
                                        </button>
                                    </h2>
                                    <div id={`faq${i + 2}`} className="accordion-collapse collapse">
                                        <div className="accordion-body">
                                            Nulla tristique efficitur nisi, at scelerisque nisl iaculis id.
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
