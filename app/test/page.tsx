"use client";

export default function UnifiedCard() {
  return (
    <div className="w-full flex justify-center bg-[#002855] py-20">
      {/* ONE REAL BOX */}
      <div
        className="
          relative
          w-[1100px]
          bg-white
          rounded-2xl
          overflow-hidden
          shadow-2xl
        "
      >
        {/* HEADER AREA (tabs live INSIDE the same box) */}
        <div className="flex gap-6 px-10 pt-6 pb-4 bg-white">
          {["About", "Resources", "Reports", "Tools"].map((item, i) => (
            <div
              key={i}
              className="
                relative
                px-4
                py-2
                text-sm
                font-semibold
                text-[#002855]
                cursor-pointer
                hover:text-black
              "
            >
              {item}

              {/* Active underline mock */}
              {i === 1 && (
                <div className="absolute left-0 right-0 -bottom-2 h-1 bg-white" />
              )}
            </div>
          ))}
        </div>

        {/* MEGA MENU CONTENT (still inside SAME box) */}
        <div className="flex border-t border-gray-200">
          {/* LEFT */}
          <div className="w-1/3 p-8 bg-gray-50">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Resources & Insights
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Access reports, research papers, and deep analytical insights
              curated by our team.
            </p>
          </div>

          {/* CENTER */}
          <div className="w-1/3 p-8">
            <ul className="space-y-3 text-sm">
              <li className="hover:text-[#002855] cursor-pointer">
                Case Studies
              </li>
              <li className="hover:text-[#002855] cursor-pointer">
                White Papers
              </li>
              <li className="hover:text-[#002855] cursor-pointer">
                Industry Reports
              </li>
              <li className="hover:text-[#002855] cursor-pointer">
                Webinars
              </li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="w-1/3 p-8 bg-gray-50">
            <div className="rounded-lg bg-white shadow p-4">
              <p className="text-xs text-gray-500">Featured</p>
              <h4 className="font-semibold mt-1">
                Q4 Market Intelligence Report
              </h4>
              <button className="mt-4 w-full rounded-md bg-[#002855] text-white py-2 text-sm">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
