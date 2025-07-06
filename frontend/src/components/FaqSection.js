import React, { useState } from "react";

const faqs = [
  {
    question: "What types of massage do you offer?",
    answer: "There are various modalities available however your session will use what is neccessary for your needs."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book online or contact me directly."
  },
  {
    question: "What should I expect during my first visit?",
    answer: "A personalized consultation and a session tailored to your needs."
  },
  {
    question: "Do you accept walk-ins?",
    answer: "Appointments are necessary to ensure personalized care, so I do not accept walk-ins."
  }
];

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-dropdown">
            <button
              className="faq-question"
              onClick={() => toggleDropdown(idx)}
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <span className="faq-arrow">{openIndex === idx ? "▲" : "▼"}</span>
            </button>
            {openIndex === idx && (
              <div className="faq-answer animated">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FaqSection;