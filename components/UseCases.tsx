
const UseCases = () => {

    const useCases = [
        {
            title: "Create Text Images with Chromakopia Font Generator",
            description: "Transform your text into stunning visual content using Chromakopia Font Generator. Perfect for creating eye-catching social media posts with custom fonts and backgrounds.",
            icon: "🎨"
        },
        {
            title: "Generate Custom Profile Pictures",
            description: "Use Chromakopia Font Generator to create unique profile pictures. Turn your name or initials into beautiful text-based images with our easy-to-use generator.",
            icon: "👤"
        },
        {
            title: "Design Social Media Content",
            description: "Make your social media stand out with Chromakopia Font Generator. Create beautiful text designs for Instagram, Twitter, and Facebook in seconds.",
            icon: "📱"
        },
        {
            title: "Custom Text Designs for Creators",
            description: "Chromakopia Font Generator helps content creators make professional text images. Perfect for thumbnails, banners, and promotional materials.",
            icon: "✨"
        },
        {
            title: "Quick Quote Image Generator",
            description: "Turn quotes into shareable images instantly with Chromakopia Font Generator. Choose from various styles and customize colors to match your brand.",
            icon: "💭"
        },
        {
            title: "Brand Asset Generator",
            description: "Create consistent branded text images using Chromakopia Font Generator. Perfect for business announcements, promotions, and social media campaigns.",
            icon: "🎯"
        }
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-8">Chromakopia Font Generator Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {useCases.map((useCase, index) => (
                    <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
                        <div className="text-3xl mb-4">{useCase.icon}</div>
                        <h3 className="text-xl font-semibold mb-3">{useCase.title}</h3>
                        <p className="text-gray-600">{useCase.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default UseCases;