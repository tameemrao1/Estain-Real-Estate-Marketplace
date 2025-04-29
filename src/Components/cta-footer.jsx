import { Send, Facebook, Linkedin, Twitter, Youtube } from "lucide-react";
// No Link import needed from react-router-dom

const CTAandFooter = () => {
  // IMPROVEMENT: Add state and handler for email input if needed
  // const [email, setEmail] = useState('');
  // const handleEmailSubmit = (e) => {
  //   e.preventDefault(); // Prevent default form submission if using <form>
  //   console.log("Submitting email:", email);
  //   // Add logic to send email to backend/service
  // };

  return (
    <>
      {/* CTA Section */}
      <section className="bg-[#141414] bg-[url('../assets/Images/CTA-bg.png')] bg-cover bg-center h-full  w-full border border-[#1E1E1E] py-16 px-8 lg:px-20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-4">
                Start Your Real Estate Journey Today
              </h2>
              <p className="text-gray-400 text-sm lg:text-base">
                Your dream property is just a click away. Whether you're looking
                for a new home, a strategic investment, or expert real estate
                advice, Estatein is here to assist you every step of the way.
                Take the first step towards your real estate goals and explore
                our available properties or get in touch with our team for
                personalized assistance.
              </p>
            </div>
            {/* Use <a> tag for standard HTML link */}
            <a href="/properties"> {/* Use actual path */}
              <button className="bg-[#6A4CFF] hover:bg-[#5a3ee6] text-white font-semibold px-8 py-3 rounded-md shadow-lg transition-colors">
                Explore Properties
              </button>
            </a>
            {/* Or, if the button triggers an action instead of navigation: */}
            {/* <button
              onClick={() => { console.log('Explore properties clicked!'); /* Add action logic * }}
              className="bg-[#6A4CFF] hover:bg-[#5a3ee6] text-white font-semibold px-8 py-3 rounded-md shadow-lg transition-colors"
            >
              Explore Properties
            </button> */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#141414] py-12 px-8 lg:px-20">
        <div className="container mx-auto">
          {/* Top Footer */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 border-b border-gray-800 pb-12">
             {/* Use <a> tag for st andard HTML link */}
            <a href="/" className="flex items-center gap-2"> {/* Link logo to home */}
              <div className="w-8 h-8 bg-[#6A4CFF] rounded-lg"></div>
              <span className="text-white text-xl font-semibold">Estatein</span>
            </a>
            <div className="w-full lg:w-auto max-w-md">
              {/* Optionally wrap in a form */}
              {/* <form onSubmit={handleEmailSubmit}> */}
                <div className="flex items-center gap-2 bg-[#1A1A1A] p-2 rounded-lg">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent text-gray-300 px-4 py-2 flex-1 focus:outline-none"
                    aria-label="Enter Your Email"
                  />
                  <button
                    // type="submit" // Use if wrapped in <form>
                    onClick={() => { console.log('Email submit clicked'); /* Add submit logic */ }}
                    className="bg-[#141414] p-2 rounded-md hover:bg-[#1E1E1E] transition-colors"
                    aria-label="Submit Email"
                  >
                    <Send className="w-5 h-5 text-white" />
                  </button>
                </div>
              {/* </form> */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Use <a> tags for standard HTML links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Home</h3>
              <ul className="space-y-2">
                {[
                  { name: "Hero Section", path: "/#hero" }, // Example paths
                  { name: "Features", path: "/#features" },
                  { name: "Properties", path: "/properties" },
                  { name: "Testimonials", path: "/#testimonials" },
                  { name: "FAQ's", path: "/faq" },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">About Us</h3>
              <ul className="space-y-2">
                {[
                  { name: "Our Story", path: "/about#story" },
                  { name: "Our Works", path: "/about#works" },
                  { name: "How It Works", path: "/about#how-it-works" },
                  { name: "Our Team", path: "/about#team" },
                  { name: "Our Clients", path: "/about#clients" },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-white font-semibold mb-4">Properties</h3>
              <ul className="space-y-2">
                {[
                  { name: "Portfolio", path: "/properties" },
                  { name: "Categories", path: "/properties/categories" },
                ].map((item) => (
                  <li key={item.name}>
                    <a href={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                {[
                  { name: "Valuation Mastery", path: "/services#valuation" },
                  { name: "Strategic Marketing", path: "/services#marketing" },
                  { name: "Negotiation Wizardry", path: "/services#negotiation" },
                  { name: "Closing Success", path: "/services#closing" },
                  { name: "Property Management", path: "/services#management" },
                 ].map((item) => (
                  <li key={item.name}>
                    <a href={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
             <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                 {[
                  { name: "Contact Form", path: "/contact" },
                  { name: "Our Offices", path: "/contact#offices" },
                 ].map((item) => (
                  <li key={item.name}>
                    <a href={item.path} className="text-gray-400 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex bg-[#141414] flex-col lg:flex-row items-center justify-between gap-4 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              ©{new Date().getFullYear()} Estatein. All Rights Reserved.
            </p>
            <div className="flex items-center gap-4">
              {/* Social links remain standard <a> tags */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6A4CFF] transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6A4CFF] transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
               <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6A4CFF] transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#6A4CFF] transition-colors" aria-label="Youtube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            {/* Use <a> tag for standard HTML link */}
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default CTAandFooter;