export default function Footer() {
  return (
    <footer className="border-t border-gray-300 pt-16 pb-16 text-center bg-white">
      {/* Social Buttons */}
      <div className="flex justify-center space-x-4 mb-4">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#3b5998] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#2d4373] transition"
        >
          <i className="fab fa-facebook-f mr-2"></i> Facebook
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0077b5] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#005983] transition"
        >
          <i className="fab fa-linkedin-in mr-2"></i> Linkedin
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm font-semibold text-black">
        © 2025, Folio3 Software Inc., All Rights Reserved.
      </p>

      {/* Optional space for CAPTCHA positioning */}
      {/* For real implementation, insert the reCAPTCHA widget script here */}
    </footer>
  );
}