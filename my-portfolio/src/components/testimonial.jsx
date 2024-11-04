import T1 from "../assets/t1.png";

const Testimonial = () => {
  const testimonials = [1, 2, 3, 4]; // Tạo danh sách testimonials

  return (
    <div className="overflow-hidden py-10">
      <div className="flex animate-scroll gap-10">
        {testimonials.concat(testimonials).map(
          (
            _,
            index // Nối thêm bản sao để chạy liên tục
          ) => (
            <div
              key={index}
              className="relative rounded-xl p-8 hover:animate-pulse"
            >
              <div className="overflow-hidden relative max-w-md mx-auto bg-blue-100 shadow-lg ring-1 ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
                <img
                  src={T1}
                  alt=""
                  className="absolute -left-6 w-28 h-28 rounded-full shadow-lg"
                />
                <div className="min-w-0 py-5 pl-28 pr-5">
                  <div className="text-slate-900 font-medium text-sm sm:text-base truncate dark:text-slate-200">
                    Name Goes here
                  </div>
                  <div className="text-slate-500 font-medium text-sm sm:text-base leading-tight truncate dark:text-slate-400">
                    Assistant Manager
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Testimonial;
