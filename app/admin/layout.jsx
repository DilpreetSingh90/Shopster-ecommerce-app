import Sidebar from "@/components/layouts/Sidebar";

export default function AdminLayout({ children }) {
  return (
    <>
      <section className="mt-16 md:mt-20 md:pt-3 lg:mt-0 lg:pt-5 bg-white">
        <div className="container max-w-screen-xl mx-auto px-4">
          <h1 className="font-bold text-xl md:text-2xl lg:text-3xl">Admin Dashboard</h1>
        </div>
      </section>

      <section className="py-6 md:py-8 lg:py-10">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex md:flex-row -mx-4">
            <Sidebar />
            <main className="w-2/3 md:w-2/3 lg:w-3/4 px-4">
              <article className="border border-gray-200 bg-white shadow-sm rounded mb-5 md:p-3 lg:p-5">
                {children}
              </article>
            </main>
          </div>
        </div>
      </section>
    </>
  );
}
