
const Testimonials = () => {

    const testimonials = [
        {
            name: "Tyler M.",
            role: "Content Creator",
            comment: "Chromakopia Font Generator is amazing for creating custom PFP! I've generated dozens of profile pictures using Chromakopia, and they all look unique and professional. Best PFP generator I've found!",
            platform: "Social Media"
        },
        {
            name: "Sarah K.",
            role: "Music Enthusiast",
            comment: "I love using Chromakopia Font Generator for lyrics visualization. The way Chromakopia transforms song lyrics into beautiful images is perfect for sharing my favorite music quotes.",
            platform: "Instagram"
        },
        {
            name: "Alex Chen",
            role: "Streamer",
            comment: "Chromakopia Font Generator helps me create awesome Chromakopia names for my social profiles. The text designs are unique and eye-catching. It's my go-to name generator now!",
            platform: "Multiple Platforms"
        },
        {
            name: "Emily R.",
            role: "Social Media User",
            comment: "Making custom PFP with Chromakopia Font Generator is so easy! I love how quickly I can create and customize my profile pictures. Chromakopia's text designs are always stunning.",
            platform: "Twitter & Instagram"
        },
        {
            name: "James L.",
            role: "Digital Artist",
            comment: "As someone who frequently needs to create text images, Chromakopia Font Generator is a game-changer. The ability to generate unique Chromakopia text designs instantly is invaluable.",
            platform: "Various Platforms"
        },
        {
            name: "Mia H.",
            role: "Student",
            comment: "I discovered Chromakopia Font Generator when looking for a name generator, and wow! The text designs are beautiful, and it's so easy to use. Now I use Chromakopia for all my social media content.",
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