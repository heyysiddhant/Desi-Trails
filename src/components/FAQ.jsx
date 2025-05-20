import { useState } from "react";

const faqs = [
  {
    question: "How can I book a tour with Desi Trails?",
    answer: "You can book directly through our website by selecting a package and completing the payment, or contact our support team for assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept UPI, debit/credit cards, net banking, and wallets like Paytm or Google Pay.",
  },
  {
    question: "Can I customize my travel package?",
    answer: "Yes! We offer customizable itineraries. Just fill out the form on our Custom Tours page.",
  },
  {
    question: "What’s your cancellation policy?",
    answer: "Cancellations made 7 days prior to the trip are eligible for a full refund. For last-minute cancellations, partial refunds apply.",
  },
  {
    question: "Is travel insurance included?",
    answer: "We provide travel insurance as an optional add-on at checkout for safety during your journey.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="FAQ" className="py-20 bg-gray-100 px-5">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-5">
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600 text-sm transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;