export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white scroll-smooth">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-red-900/30 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <h1 className="text-2xl font-bold tracking-wider">
            FRANCE<span className="text-red-600">.</span>
          </h1>

          <div className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">
            <a href="#home" className="transition hover:text-red-500">Home</a>
            <a href="#about" className="transition hover:text-red-500">About</a>
            <a href="#education" className="transition hover:text-red-500">Education</a>
            <a href="#contact" className="transition hover:text-red-500">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-red-600 px-5 py-2 text-sm transition hover:bg-red-600"
          >
            Contact Me
          </a>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6 pt-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

          <div>
            <p className="mb-4 font-semibold uppercase tracking-[0.4em] text-red-500">
              Welcome to My Portfolio
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Hi, I'm <span className="text-red-600">France!</span>
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-gray-300 md:text-3xl">
              BSIT Student & Future IT Professional
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-gray-400">
              I am a second-year BSIT student at Naga College Foundation.
              I love computers and learning how to build software.
              Right now, I am studying hard, writing code, and learning
              new things every day. Welcome to my website!
              🐯
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#about"
                className="rounded-md bg-red-600 px-7 py-3 font-semibold transition hover:bg-red-700"
              >
                Explore More
              </a>

              <a
                href="#contact"
                className="rounded-md border border-gray-600 px-7 py-3 font-semibold transition hover:border-red-500 hover:text-red-500"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* DECORATIVE PROFILE AREA */}
          <div className="flex justify-center">
            <div className="relative flex h-72 w-72 items-center justify-center rounded-full border-2 border-red-600 bg-gradient-to-br from-red-950 via-[#160707] to-black shadow-[0_0_60px_rgba(220,38,38,0.25)] md:h-96 md:w-96">

              <div className="absolute inset-5 rounded-full border border-red-500/30"></div>

              <div className="text-center">
                <p className="text-8xl">🐯</p>
                <h2 className="mt-4 text-3xl font-black tracking-widest">
                  FRANCE
                </h2>
                <p className="mt-2 text-sm tracking-[0.3em] text-red-500">
                  FUTURE IT PROFESSIONAL
                </p>
              </div>

              <div className="absolute -right-3 top-10 rounded-lg border border-red-600 bg-black px-4 py-2 text-sm text-red-500">
                💻 Coding
              </div>

              <div className="absolute -bottom-3 left-0 rounded-lg border border-red-600 bg-black px-4 py-2 text-sm text-red-500">
                ✨ Learning
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#101010] px-6 py-24">

        <div className="mx-auto max-w-6xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-red-500">
              Get to Know Me
            </p>

            <h2 className="text-4xl font-extrabold md:text-5xl">
              About <span className="text-red-600">Me</span>
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-600"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {/* INTRODUCTION */}
            <div className="rounded-xl border border-gray-800 bg-[#171717] p-8 transition hover:border-red-600">

              <h3 className="mb-5 text-2xl font-bold">
                <span className="text-red-600">01.</span> Who Am I?
              </h3>

              <p className="leading-8 text-gray-400">
                Hi! My name is France Queenie Boncodin.
                I am a second-year BSIT student at Naga College Foundation.
                I am passionate about computers, technology, and learning
                how to develop software.
              </p>

            </div>

            {/* WHY IT */}
            <div className="rounded-xl border border-gray-800 bg-[#171717] p-8 transition hover:border-red-600">

              <h3 className="mb-5 text-2xl font-bold">
                <span className="text-red-600">02.</span> Why I Chose IT
              </h3>

              <p className="leading-8 text-gray-400">
                I chose IT because I am curious about how technology works.
                That is why I decided to study Information Technology.
                I enjoy the challenge of learning how to code and build
                projects. NCF is helping me develop the skills I need
                for the future.
              </p>

            </div>

          </div>

          {/* WHAT I DO */}
          <div className="mt-8">

            <h3 className="mb-8 text-center text-3xl font-bold">
              What I <span className="text-red-600">Do</span>
            </h3>

            <div className="grid gap-6 md:grid-cols-3">

              <div className="rounded-xl border border-gray-800 bg-[#171717] p-8 text-center transition hover:-translate-y-2 hover:border-red-600">
                <div className="mb-4 text-5xl">📚</div>
                <h4 className="mb-3 text-xl font-bold">Studying</h4>
                <p className="leading-7 text-gray-400">
                  Learning programming languages, databases,
                  and computer systems.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#171717] p-8 text-center transition hover:-translate-y-2 hover:border-red-600">
                <div className="mb-4 text-5xl">💻</div>
                <h4 className="mb-3 text-xl font-bold">Creating</h4>
                <p className="leading-7 text-gray-400">
                  Practicing my coding skills by making
                  simple applications and websites.
                </p>
              </div>

              <div className="rounded-xl border border-gray-800 bg-[#171717] p-8 text-center transition hover:-translate-y-2 hover:border-red-600">
                <div className="mb-4 text-5xl">🚀</div>
                <h4 className="mb-3 text-xl font-bold">Growing</h4>
                <p className="leading-7 text-gray-400">
                  Trying my best to become a good student
                  and a future IT professional.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-red-500">
              My Academic Background
            </p>

            <h2 className="text-4xl font-extrabold md:text-5xl">
              My <span className="text-red-600">Education</span>
            </h2>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-600"></div>
          </div>

          <div className="rounded-xl border border-red-900/50 bg-[#111111] p-8 shadow-[0_0_30px_rgba(220,38,38,0.08)] md:p-12">

            <div className="mb-8 flex items-center gap-5">
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-600 text-3xl">
                🎓
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-red-500">
                  College
                </p>

                <h3 className="text-xl font-bold md:text-2xl">
                  Naga College Foundation
                </h3>
              </div>
            </div>

            <div className="space-y-5">

              <div className="flex flex-col justify-between gap-2 border-b border-gray-800 pb-4 sm:flex-row">
                <span className="text-gray-500">School</span>
                <span className="font-semibold">Naga College Foundation</span>
              </div>

              <div className="flex flex-col justify-between gap-2 border-b border-gray-800 pb-4 sm:flex-row">
                <span className="text-gray-500">Course</span>
                <span className="font-semibold">
                  Bachelor of Science in Information Technology (BSIT)
                </span>
              </div>

              <div className="flex flex-col justify-between gap-2 border-b border-gray-800 pb-4 sm:flex-row">
                <span className="text-gray-500">Year Level</span>
                <span className="font-semibold">Second Year Student</span>
              </div>

              <div className="flex flex-col justify-between gap-2 border-b border-gray-800 pb-4 sm:flex-row">
                <span className="text-gray-500">Department</span>
                <span className="font-semibold">College of Computer Studies</span>
              </div>

              <div className="flex flex-col justify-between gap-2 sm:flex-row">
                <span className="text-gray-500">Status</span>
                <span className="font-semibold text-green-500">
                  ● Currently Enrolled
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-[#101010] px-6 py-24">

        <div className="mx-auto max-w-5xl">

          <div className="mb-14 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.4em] text-red-500">
              Let's Connect
            </p>

            <h2 className="text-4xl font-extrabold md:text-5xl">
              Contact <span className="text-red-600">Me</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-400">
              Feel free to reach out to me through my personal
              or school contact information.
            </p>

            <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-red-600"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {/* PERSONAL EMAIL */}
            <a
              href="mailto:francquinniboncodin@gmail.com"
              className="rounded-xl border border-gray-800 bg-[#171717] p-8 text-center transition hover:-translate-y-2 hover:border-red-600"
            >
              <div className="mb-4 text-4xl">📧</div>
              <h3 className="mb-3 text-xl font-bold">Personal Email</h3>
              <p className="break-all text-sm text-gray-400">
                francquinniboncodin@gmail.com
              </p>
            </a>

            {/* SCHOOL EMAIL */}
            <a
              href="mailto:fqboncodin@gbox.ncf.edu.ph"
              className="rounded-xl border border-gray-800 bg-[#171717] p-8 text-center transition hover:-translate-y-2 hover:border-red-600"
            >
              <div className="mb-4 text-4xl">🎓</div>
              <h3 className="mb-3 text-xl font-bold">School Email</h3>
              <p className="break-all text-sm text-gray-400">
                fqboncodin@gbox.ncf.edu.ph
              </p>
            </a>

            {/* PHONE */}
            <a
              href="tel:09632323389"
              className="rounded-xl border border-gray-800 bg-[#171717] p-8 text-center transition hover:-translate-y-2 hover:border-red-600"
            >
              <div className="mb-4 text-4xl">📱</div>
              <h3 className="mb-3 text-xl font-bold">Phone Number</h3>
              <p className="text-sm text-gray-400">
                09632323389
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-red-900/30 bg-black px-6 py-8">

        <div className="mx-auto max-w-6xl text-center">

          <h2 className="text-2xl font-black tracking-widest">
            FRANCE<span className="text-red-600">.</span>
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            A BSIT Student | Dream Big. Learn More. Build the Future.
          </p>

          <div className="my-6 h-px bg-gray-900"></div>

          <p className="text-sm text-gray-600">
  © 2026 France Queenie Boncodin. All Rights Reserved.
</p>

          <p className="mt-2 text-xs text-red-700">
            Designed with ❤️ and passion for technology.
          </p>

        </div>

      </footer>

    </main>
  );
}