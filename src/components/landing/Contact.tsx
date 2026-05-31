"use client"
import React , {useState , FormEvent} from 'react';
import { Mail, Briefcase, HelpCircle } from 'lucide-react';
type FormState = "idle" | "loading" | "success" | "error";


export default function Contact() {

  const [state,setState] = useState<FormState>("idle");
  const [message,setMessage]=useState("")
  // const [subject,setSubject]=useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  setState("loading");
  setMessage("");

  const form = event.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }),
    });

    const payload = (await response
      .json()
      .catch(() => ({}))) as { message?: string };

    if (!response.ok) {
      setState("error");
      setMessage(payload.message ?? "Something went wrong. Try again.");
      return;
    }

    form.reset();
    setState("success");
    setMessage(payload.message ?? "Message received. I will reply soon.");
  } catch {
    setState("error");
    setMessage("Could not send your message. Please try again.");
  }
}

  return (
    <section id="contact" className="py-20 max-w-7xl mx-auto px-6 border-t border-slate-900/60">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-slate-900/10 border border-slate-800/60 rounded-3xl p-8 sm:p-12">
        
        {/* Contact Info Details */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 block">Get In Touch</span>
            <h2 className="text-3xl font-bold text-white mb-4">Let&apos;s build something together</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Whether you have a question about CodeCluster, want to explore a partnership, need technical support, or are interested in building a coding community with us, we&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl">
              <Mail className="h-5 w-5 text-indigo-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Email us directly</p>
                <p className="text-sm font-semibold text-white">hello@codecluster.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl">
              <Briefcase className="h-5 w-5 text-emerald-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Partnerships & collaborations</p>
                <p className="text-sm font-semibold text-white">partners@codecluster.dev</p>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-slate-900/40 border border-slate-800/60 p-4 rounded-xl">
              <HelpCircle className="h-5 w-5 text-amber-400 shrink-0" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Technical support</p>
                <p className="text-sm font-semibold text-white">support@codecluster.dev</p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input Interface Block */}
        <div className="lg:col-span-7 bg-slate-900/40 border border-slate-800/60 p-6 sm:p-8 rounded-2xl">
          <h3 className="text-white font-bold text-lg mb-1">Send us a message</h3>
          <p className="text-xs text-slate-400 mb-6">We typically respond within 24 hours.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  minLength={4}
                  placeholder="Enter your name"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Subject
                </label>
                <input
                  name="subject"
                  type="text"
                  required
                  minLength={10}
                  placeholder="What is this about?"
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  minLength={10}
                  rows={4}
                  placeholder="Tell us more..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <button
                disabled={state === "loading"}
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-colors text-sm shadow-md shadow-indigo-600/10"
              >
                {state === "loading" ? "Sending..." : "Send Message"}
              </button>

              {message && (
                <p
                  className={`text-sm ${
                    state === "error"
                      ? "text-rose-300"
                      : "text-emerald-300"
                  }`}
                >
                  {message}
                </p>
              )}
          </form>
        </div>

      </div>
    </section>
  );
}
