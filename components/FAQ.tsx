
const FAQ = () => {
    const faqList = [
        {
            question: "What is Chromakopia Font Generator?",
            answer: "Chromakopia Font Generator is a specialized online tool that transforms text into beautiful images. It can generate Chromakopia names, PFP (profile pictures), lyrics visualizations, and custom text designs. With Chromakopia Font Generator, you can create unique visual content instantly without any design skills."
        },
        {
            question: "How to create a Chromakopia name?",
            answer: "Creating a Chromakopia name is simple: Enter your name in Chromakopia Font Generator, customize the style and colors to match your preference, and instantly get your unique Chromakopia name design. Perfect for making your social media profiles stand out."
        },
        {
            question: "Can I use Chromakopia Font Generator for PFP?",
            answer: "Yes! Chromakopia Font Generator is perfect for creating PFP (Profile Pictures). Enter your text or initials in Chromakopia Font Generator, choose your preferred style, and create a unique PFP instantly. Many users love using Chromakopia for their social media profile pictures."
        },
        {
            question: "How to visualize lyrics using Chromakopia?",
            answer: "Chromakopia Font Generator makes lyrics visualization easy. Simply paste your lyrics into Chromakopia Font Generator, customize the style and background, and transform your favorite lyrics into stunning visual content. Perfect for sharing music quotes on social media."
        },
        {
            question: "What makes Chromakopia Font Generator unique?",
            answer: "Chromakopia Font Generator specializes in creating visual text content like Chromakopia names, PFP, and lyrics. Unlike regular text generators, Chromakopia Font Generator provides instant image output, custom styling options, and easy sharing features all in one tool."
        },
        {
            question: "How do I save and share my Chromakopia designs?",
            answer: "Every design you create with Chromakopia Font Generator can be instantly downloaded as an image. You can also share your Chromakopia text designs, names, and PFP directly to social media platforms right from the generator."
        },
        {
            question: "Is Chromakopia Font Generator free to use?",
            answer: "Yes, Chromakopia Font Generator is completely free to use. You can create unlimited Chromakopia names, PFP, text designs, and lyrics visualizations without any cost. No registration or account needed."
        },
        {
            question: "Can I customize my Chromakopia text designs?",
            answer: "Absolutely! Chromakopia Font Generator offers various customization options. You can adjust colors, choose different styles, add backgrounds, and modify other elements to make your Chromakopia text designs unique."
        }
    ];

    return (
        <>
            <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
                Chromakopia Font Generator FAQ
            </h2>
            <div className="md:grid md:grid-cols-2 md:gap-6 space-y-4 md:space-y-0">
                {faqList.map((faq, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-md shadow p-6 hover:shadow-md transition-shadow"
                    >
                        <h3 className="font-semibold text-gray-800 mb-3">
                            {faq.question}
                        </h3>
                        <div className="text-gray-600 leading-relaxed">
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
};

export default FAQ;