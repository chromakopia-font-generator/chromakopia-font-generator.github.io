
const Testimonials = () => {

    const testimonials = [
        {
            name: "Jessica M.",
            role: "Instagram Influencer",
            comment: "I've tried many text generators, but Chromakopia Font Generator is by far the best! The way it instantly creates beautiful text images is amazing. I use it for all my Instagram stories and posts now. The custom background feature and color options really make my content pop! 💯",
            platform: "Instagram"
        },
        {
            name: "Alex Chen",
            role: "Digital Content Creator",
            comment: "Chromakopia Font Generator changed my content game completely! I can create professional-looking text images in seconds. The ability to generate and preview different styles instantly saves me hours of work. Best text to image generator I've found! 🚀",
            platform: "YouTube"
        },
        {
            name: "Maria R.",
            role: "Social Media Manager",
            comment: "Using Chromakopia Font Generator for all our brand's social media posts. Love how I can upload our own backgrounds and match our brand colors perfectly. The text images look incredibly professional, and it takes just seconds to create them! ⭐",
            platform: "Facebook & Instagram"
        },
        {
            name: "Chris Thompson",
            role: "YouTuber",
            comment: "This font generator is a game-changer! The text-to-image feature is super smooth, and the quality is perfect for YouTube thumbnails. I love how Chromakopia lets me preview different styles instantly. Definitely my go-to tool now! 🎥",
            platform: "YouTube"
        },
        {
            name: "Sarah Kim",
            role: "Brand Designer",
            comment: "Finally found the perfect text generator! Chromakopia Font Generator gives me the creative freedom I need with its customization options. The image quality is fantastic, and the sharing options make my workflow so much smoother. 🎨",
            platform: "Various Platforms"
        },
        {
            name: "Marcus J.",
            role: "Business Owner",
            comment: "As someone who needs to create quick promotional images, Chromakopia Font Generator is a lifesaver! The text-to-image conversion is instant, and the results always look professional. Plus, being able to use my own backgrounds is fantastic! 💪",
            platform: "Social Media"
        }
    ];

    return (
        <div>
            <h2 className="text-2xl font-bold text-center mb-8">What Users Love About Chromakopia Font Generator</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow"
                    >
                        <div className="mb-4">
                            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                            <p className="text-blue-600 text-sm">{testimonial.role}</p>
                        </div>
                        <blockquote className="text-gray-700 mb-4 italic">
                            "{testimonial.comment}"
                        </blockquote>
                        <div className="text-sm text-gray-500">
                            Posted on {testimonial.platform}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Testimonials;