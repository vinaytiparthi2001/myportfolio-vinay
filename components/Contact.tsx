"use client";
import { useState } from "react";
import { Mail, Phone, Send, CheckCircle } from "lucide-react";

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
    </svg>
  );
}

const contactItems = [
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "vinaytiparthi2001@gmail.com",
    href: "mailto:vinaytiparthi2001@gmail.com",
    color: "#63b3ed",
  },
  {
    icon: <LinkedInIcon size={18} />,
    label: "LinkedIn",
    value: "linkedin.com/in/vinayreddytiparthi",
    href: "https://linkedin.com/in/vinayreddytiparthi/",
    color: "#b794f4",
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    value: "+91 93477 02744",
    href: "tel:+919347702744",
    color: "#68d391",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend-only — wire up a backend/email service (e.g. Resend, EmailJS, or Next.js API route) here
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#07111f]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <p className="section-label mb-3">Get In Touch</p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#e2e8f0] mb-4">
          Contact
        </h2>
        <p className="text-[#718096] text-sm mb-12 max-w-xl">
          Open to new opportunities, collaborations, and conversations about
          .NET, AI, and API integrations. Feel free to reach out.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-4 p-5 group no-underline"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                  style={{
                    color: item.color,
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}25`,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#718096] font-semibold">
                    {item.label}
                  </p>
                  <p
                    className="text-sm font-medium transition-colors"
                    style={{ color: item.color }}
                  >
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            <div className="glass-card p-5">
              <p className="text-xs text-[#718096] uppercase tracking-widest font-semibold mb-1">
                Location
              </p>
              <p className="text-sm text-[#94a3b8]">📍 Hyderabad, Telangana, India</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card p-6 md:p-8">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-10 text-center">
                <CheckCircle size={44} className="text-[#68d391]" />
                <h3 className="text-xl font-bold text-[#e2e8f0]">Message Received!</h3>
                <p className="text-sm text-[#718096]">
                  Thanks for reaching out. I&apos;ll get back to you soon.
                  <br />
                  <span className="text-[10px] text-[#4a5568] mt-2 block">
                    (Note: Connect a backend/email service to enable message delivery.)
                  </span>
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", email: "", message: "" }); }}
                  className="text-xs text-[#63b3ed] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-semibold text-[#e2e8f0] mb-6">
                  Send a Message
                </h3>
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label className="block text-xs uppercase tracking-widest text-[#718096] font-semibold mb-1.5">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as "name" | "email"]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full bg-[#0a1628] border border-[rgba(99,179,237,0.12)] rounded-lg px-4 py-2.5 text-sm text-[#e2e8f0] placeholder-[#4a5568] outline-none focus:border-[#63b3ed]/50 transition-colors"
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-xs uppercase tracking-widest text-[#718096] font-semibold mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="What would you like to discuss?"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#0a1628] border border-[rgba(99,179,237,0.12)] rounded-lg px-4 py-2.5 text-sm text-[#e2e8f0] placeholder-[#4a5568] outline-none focus:border-[#63b3ed]/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-[#63b3ed] to-[#b794f4] text-white font-semibold text-sm shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all"
                >
                  <Send size={15} /> Send Message
                </button>
                <p className="text-[10px] text-[#4a5568] text-center">
                  Form UI ready — connect a backend (e.g. Next.js API route + Resend) to enable delivery.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
