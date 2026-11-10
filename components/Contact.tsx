"use client";

import React from "react";
import { Phone, MapPin, Navigation, Clock, MessageSquare, ArrowRight, Building } from "lucide-react";

export default function Contact() {
  const address = "Neelkanth Complex, Near Sainik Bhojnalaya, Sadar Cantt, Lucknow";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#123C78]/10 text-[#123C78] text-xs font-bold uppercase tracking-wider mb-3">
            <span>Get In Touch</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#071D43] tracking-tight leading-tight mb-4"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Connect With Evolution Career Institute
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Have questions regarding batch timings, admissions, or course curriculum? We are here to help.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Call Us Phone 1 */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#123C78] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Helpline Primary
              </span>
              <h3 className="text-xl font-bold text-[#071D43] mt-1 mb-2">Call Us</h3>
              <p className="text-xs text-slate-500 mb-6">
                Direct counselling & admission enquiries.
              </p>
              <a
                href="tel:6390247880"
                className="text-2xl font-black text-[#123C78] hover:text-[#D71920] transition-colors block"
              >
                6390247880
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="tel:6390247880"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C78] hover:underline"
              >
                <span>Dial Number</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/916390247880?text=Hello%20Evolution%20Career%20Institute%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#25D366] hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 2: Call Us Phone 2 */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-red-50 text-[#D71920] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Helpline Secondary
              </span>
              <h3 className="text-xl font-bold text-[#071D43] mt-1 mb-2">Call Us</h3>
              <p className="text-xs text-slate-500 mb-6">
                Batch timings & course curriculum details.
              </p>
              <a
                href="tel:7390092459"
                className="text-2xl font-black text-[#D71920] hover:text-[#071D43] transition-colors block"
              >
                7390092459
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href="tel:7390092459"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D71920] hover:underline"
              >
                <span>Dial Number</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://wa.me/917390092459?text=Hello%20Evolution%20Career%20Institute%2C%20I%20would%20like%20to%20enquire%20about%20admissions."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-[#25D366] hover:underline flex items-center gap-1"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Card 3: Visit Us */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-amber-50/50 to-white border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group md:col-span-2 lg:col-span-1">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Institute Campus
              </span>
              <h3 className="text-xl font-bold text-[#071D43] mt-1 mb-2">Visit Us</h3>
              <p className="text-sm font-semibold text-slate-700 leading-relaxed mb-4">
                Neelkanth Complex, Near Sainik Bhojnalaya, Sadar Cantt, Lucknow.
              </p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Monday – Saturday (Counselling Hours)</span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#123C78] hover:text-[#D71920] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Driving Directions &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Location & Map Interactive Block */}
        <div className="rounded-3xl border border-slate-200 bg-slate-50 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Location Description Panel */}
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between bg-white border-b lg:border-b-0 lg:border-r border-slate-200">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#071D43] text-[#FFC928]">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#071D43]">
                      Evolution Career Institute
                    </h3>
                    <p className="text-xs text-slate-500">Sadar Cantt, Lucknow Campus</p>
                  </div>
                </div>

                <div className="space-y-4 my-6 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#D71920] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Complete Address:</strong>
                      <span>Neelkanth Complex, Near Sainik Bhojnalaya, Sadar Cantt, Lucknow.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#123C78] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-slate-800 block">Contact Helplines:</strong>
                      <div className="flex flex-wrap gap-2 mt-0.5">
                        <a href="tel:6390247880" className="hover:text-[#123C78] font-semibold underline">
                          6390247880
                        </a>
                        <span>/</span>
                        <a href="tel:7390092459" className="hover:text-[#123C78] font-semibold underline">
                          7390092459
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#071D43] hover:bg-[#123C78] shadow-md transition-colors"
                >
                  <Navigation className="w-4 h-4 text-[#FFC928]" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Iframe */}
            <div className="lg:col-span-7 h-[340px] sm:h-[400px] w-full relative bg-slate-200">
              <iframe
                title="Evolution Career Institute Lucknow Location"
                src="https://maps.google.com/maps?q=Neelkanth+Complex,+Sadar+Cantt,+Lucknow&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
