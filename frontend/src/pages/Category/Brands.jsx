import React, { useMemo, useState } from "react";
import InProgress from "../components/InProgress";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const brands = [
  { file: "Alexander-Mcqueen.png", id: "alexander-mcqueen" },
  { file: "Burberry.png", id: "burberry" },
  { file: "Chanel.png", id: "chanel" },
  { file: "CliveChristian.png", id: "clive-christian" },
  { file: "Givenchy.png", id: "givenchy" },
  { file: "hermes.png", id: "hermes" },
  { file: "HMoser.png", id: "hmoser" },
  { file: "Jimmy_Choo_logo.svg", id: "jimmy-choo" },
  { file: "Lanvin.png", id: "lanvin" },
  { file: "LouisVuitton.png", id: "louis-vuitton" },
  { file: "VictoriasSecret.png", id: "victorias-secret" },
  { file: "YSL.png", id: "ysl" },
  { file: "VacheronConstantin.png", id: "vacheron-constantin" },
  { file: "Zenith.png", id: "zenith" },
  { file: "Prada.png", id: "prada" },
  { file: "Revlon.png", id: "revlon" },
  { file: "EsteeLauder.png", id: "estee-lauder" },
  { file: "GiorgioArmani.png", id: "giorgio-armani" },
  { file: "DandG.jpg", id: "d-and-g" },
  { file: "Gucci.png", id: "gucci" },
  // add/remove as needed
];

// helper to convert filename to a friendly brand name
const prettyName = (filename) =>
  filename.replace(/\.(png|jpg|jpeg|svg)$/i, "").replace(/[_-]/g, " ");

const Brands = () => {
  const [query, setQuery] = useState("");
  const [selectedLetter, setSelectedLetter] = useState(null);
  
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return brands.filter((b) => {
      const name = prettyName(b.file).toLowerCase();
      if (selectedLetter) return name.startsWith(selectedLetter.toLowerCase());
      if (!q) return true;
      return name.includes(q);
    });
  }, [query, selectedLetter]);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");


  return (
    <div>
      <Navbar />
      <header className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#2b0748]">
                Explore Luxury Brands
              </h1>
              <p className="mt-3 text-slate-600 max-w-xl">
                Curated premium brands — discover brand stories, collections and handpicked products.
              </p>

              {/* search + letter chips */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="relative w-full sm:w-[420px]">
                  <input
                    value={query}
                    onChange={(e) => { setQuery(e.target.value); setSelectedLetter(null); }}
                    placeholder="Search brands (e.g. Gucci, Chanel...)"
                    className="w-full rounded-full border border-[#e6e0ff] bg-white/80 px-4 py-3 pr-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    aria-label="Search brands"
                  />
                  <svg className="absolute right-3 top-3 w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="none">
                    <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="flex flex-wrap gap-2">
                  

                  {/* show A-F quick letters, the rest available in full alphabet below */}
                  
                </div>
              </div>
            </div>

            {/* Featured horizontal carousel (simple css scroll) */}
            <div className="w-full md:w-1/3">
              <div className="rounded-2xl bg-gradient-to-br from-[#3a1051] to-[#6b2bd9] p-4 text-white shadow-lg scrollbar-hidden">
                <h3 className="text-lg font-semibold">Featured</h3>
                <div className="mt-3 flex gap-3 overflow-x-auto snap-x snap-mandatory py-2 scrollbar-hidden">
                  {/* map first 6 as featured */}
                  {brands.slice(0, 8).map((b) => (
                    <div key={b.file} className="snap-start flex-shrink-0 w-28 h-20 rounded-lg bg-white/10 flex items-center justify-center p-2">
                      <img
                        src={`/comp/${b.file}`}
                        alt={prettyName(b.file)}
                        className="max-h-12 object-contain"
                        loading="lazy"
                        decoding="async"
                        onError={(e)=>{ e.currentTarget.src='/comp/placeholder.png'; }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* full alphabet row (small) */}
          <div className="mt-4 overflow-x-auto">
            <div className="flex gap-2 text-sm">
              <button
                    onClick={() => { setSelectedLetter(null); setQuery(""); }}
                    className={`px-3 py-1 rounded-full text-sm cursor-pointer ${!selectedLetter ? "bg-indigo-600 text-white" : "bg-white/60 text-slate-700"}`}
                  >
                    All
                  </button>
              {alphabet.map((l) => (
                <button
                  key={l}
                  onClick={() => { setSelectedLetter(l); setQuery(""); }}
                  className={`px-2 py-1 rounded text-xs cursor-pointer ${selectedLetter === l ? "bg-indigo-600 text-white" : "bg-white/70 text-slate-700"}`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Brands grid */}
      <main className="max-w-7xl mx-auto px-6 py-10">
        <section aria-label="Brands grid">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filtered.length === 0 ? (
              <div className="col-span-full text-center py-12 text-slate-500">
                No brands match your search.
              </div>
            ) : filtered.map((b) => {
              const name = prettyName(b.file);
              return (
                <Link
                  key={b.file}
                  to={`/brand/${b.id}`}
                  className="group rounded-2xl bg-white/60 backdrop-blur-sm border border-white/30 p-4 flex flex-col items-center justify-center gap-3 hover:shadow-xl transition transform hover:-translate-y-1"
                  aria-label={`Open brand ${name}`}
                >
                  <div className="w-full flex items-center justify-center h-20">
                    <img
                      src={`/comp/${b.file}`}
                      alt={name}
                      loading="lazy"
                      decoding="async"
                      className="max-h-20 w-full object-contain filter grayscale group-hover:grayscale-0 transition duration-300 bg-[#bebefc] py-2 px-4"
                      onError={(e) => { e.currentTarget.src = "/comp/placeholder.png"; }}
                    />
                  </div>

                  <div className="w-full text-center">
                    <div className="text-sm font-semibold text-[#24103d]">{name}</div>
                    <div className="text-xs text-slate-600 mt-1">Premium</div>
                  </div>

                  {/* subtle hover ribbon */}
                  <span className="absolute -top-3 right-3 text-xs bg-yellow-400 text-[#2b0748] px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition">Top</span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* footer count */}
        <div className="mt-6 text-sm text-slate-500">
          Showing <strong>{filtered.length}</strong> of <strong>{brands.length}</strong> brands
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Brands;
