import {
  ArrowDown,
  ArrowRight,
  Code2,
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Phone,
  School,
  Sparkles,
  User,
  BookOpen,
  Heart,
  Terminal,
} from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-[#080808] text-white">

      {/* NAVIGATION */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full items-center justify-between px-6 py-4">

          <a href="#home" className="text-xl font-black tracking-tight">
            F<span className="text-red-500">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#home" className="transition hover:text-red-500">Home</a>
            <a href="#about" className="transition hover:text-red-500">About</a>
            <a href="#education" className="transition hover:text-red-500">Education</a>
            <a href="#contact" className="transition hover:text-red-500">Contact</a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#111111] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-red-500"
          >
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </a>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-28"
      >

        <div className="pointer-events-none absolute -right-32 top-32 h-96 w-96 rounded-full bg-red-600/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-red-900/20 blur-3xl" />

        <div className="relative mx-auto grid w-full items-center gap-16 lg:grid-cols-2">

          {/* INTRODUCTION */}
          <div className="space-y-7">

            <Badge className="rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400 hover:bg-red-500/10">
              <Sparkles className="mr-2 h-3 w-3" />
              Welcome to my personal website
            </Badge>

            <div>
              <p className="mb-3 text-lg font-medium text-gray-400">
                Hello there! I'm
              </p>

              <h1 className="text-6xl font-black leading-[1.05] tracking-tight sm:text-7xl lg:text-8xl">
                France
                <br />
                <span className="text-red-500">Queenie.</span>
              </h1>
            </div>

            <p className="max-w-lg text-lg leading-8 text-gray-300">
              I am a second-year BSIT student at Naga College Foundation.
              I love computers and learning how to build software.
              Right now, I am studying hard, writing code, and learning
              new things every day.
            </p>

            <div className="flex flex-wrap gap-4">

              <a
                href="#about"
                className="inline-flex h-10 items-center justify-center rounded-full bg-red-500 px-7 text-sm font-medium text-white transition-colors hover:bg-red-700"
              >
                Discover More <ArrowRight className="ml-2 h-4 w-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/20 bg-transparent px-7 text-sm font-medium text-white transition-colors hover:bg-white/10"
              >
                Contact Me
              </a>

            </div>

            <div className="flex items-center gap-3 pt-4 text-sm text-gray-400">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15 text-xl">
                🐯
              </span>

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-500/15">
                <Laptop className="h-5 w-5 text-red-400" />
              </span>

              <span>Learning today, building tomorrow.</span>
            </div>

          </div>

          {/* HERO VISUAL */}
          <div className="relative mx-auto w-full max-w-md">

            <div className="absolute -inset-5 rotate-6 rounded-[3rem] bg-red-600/20" />

            <Card className="relative overflow-hidden rounded-[2.5rem] border-none bg-[#111111] text-white shadow-2xl">

              <CardContent className="flex min-h-[430px] flex-col justify-between p-8 sm:p-10">

                <div className="flex items-center justify-between">
                  <Badge className="bg-red-500 text-white hover:bg-red-500">
                    BSIT STUDENT
                  </Badge>

                  <Sparkles className="h-6 w-6 text-red-400" />
                </div>

                <div className="py-12 text-center">

                  <div className="mx-auto mb-7 flex h-40 w-40 items-center justify-center rounded-full border border-white/10 bg-red-500/10 text-8xl">
                    🐯
                  </div>

                  <h2 className="text-3xl font-bold">
                    Hello, World!
                  </h2>

                  <p className="mt-3 text-sm text-gray-400">
                    Aspiring IT Professional
                  </p>

                </div>

                <Separator className="bg-white/10" />

                <div className="flex items-center justify-between pt-5 text-sm text-gray-400">
                  <span>Curious Mind</span>

                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    Always Learning
                  </span>
                </div>

              </CardContent>

            </Card>

            <div className="absolute -bottom-6 -left-8 rounded-2xl border border-red-500/20 bg-[#111111] p-4 text-white shadow-xl">
              <Code2 className="h-7 w-7 text-red-500" />
            </div>

            <div className="absolute -right-5 -top-5 rounded-2xl border border-white/10 bg-[#111111] p-4 text-white shadow-xl">
              <span className="text-3xl">💻</span>
            </div>

          </div>

        </div>

        <a
          href="#about"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs text-gray-400 md:flex"
        >
          SCROLL TO EXPLORE
          <ArrowDown className="h-4 w-4" />
        </a>

      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="w-full bg-[#111111] px-6 py-28">

        <div className="mx-auto w-full">

          <Badge className="mb-5 border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400 hover:bg-red-500/10">
            <User className="mr-2 h-3 w-3" />
            GET TO KNOW ME
          </Badge>

          <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
            A Little About <span className="text-red-500">Me.</span>
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-gray-400">
            Hi! My name is France Queenie Boncodin. I am a second-year
            BSIT student at Naga College Foundation. I enjoy exploring
            technology, discovering new ideas, and improving my
            programming skills.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">

            <Card className="rounded-3xl border-white/10 bg-[#191919] text-white transition hover:border-red-500/50">
              <CardContent className="p-8 sm:p-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
                  <Laptop className="h-7 w-7 text-red-500" />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  Why I Chose IT
                </h3>

                <p className="leading-8 text-gray-400">
                  I chose Information Technology because I am curious
                  about how technology works. I enjoy the challenge
                  of learning how to code and build projects.
                  NCF is helping me develop the skills I need
                  for my future career.
                </p>

              </CardContent>
            </Card>

            <Card className="rounded-3xl border-white/10 bg-[#191919] text-white transition hover:border-red-500/50">
              <CardContent className="p-8 sm:p-10">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10">
                  <Terminal className="h-7 w-7 text-red-500" />
                </div>

                <h3 className="mb-6 text-2xl font-bold">
                  What I Do
                </h3>

                <div className="space-y-5">

                  <div className="flex gap-4">
                    <BookOpen className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <h4 className="font-semibold">Studying</h4>
                      <p className="text-sm leading-6 text-gray-400">
                        Learning programming languages, databases,
                        and computer systems.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Code2 className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <h4 className="font-semibold">Creating</h4>
                      <p className="text-sm leading-6 text-gray-400">
                        Practicing my coding skills by making
                        simple applications and websites.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Heart className="mt-1 h-5 w-5 shrink-0 text-red-500" />
                    <div>
                      <h4 className="font-semibold">Growing</h4>
                      <p className="text-sm leading-6 text-gray-400">
                        Trying my best to become a good student
                        and a future IT professional.
                      </p>
                    </div>
                  </div>

                </div>

              </CardContent>
            </Card>

          </div>

        </div>

      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="w-full bg-[#080808] px-6 py-28">

        <div className="mx-auto w-full">

          <Badge className="mb-5 border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400 hover:bg-red-500/10">
            <GraduationCap className="mr-2 h-3 w-3" />
            MY ACADEMIC JOURNEY
          </Badge>

          <h2 className="mb-12 text-4xl font-black tracking-tight sm:text-6xl">
            My <span className="text-red-500">Education.</span>
          </h2>

          <Card className="overflow-hidden rounded-3xl border-white/10 bg-[#191919] text-white shadow-xl">

            <CardContent className="grid gap-10 p-8 sm:p-12 md:grid-cols-[1fr_auto] md:items-center">

              <div>

                <Badge className="mb-6 bg-red-500 text-white hover:bg-red-500">
                  CURRENTLY ENROLLED
                </Badge>

                <h3 className="text-3xl font-bold sm:text-4xl">
                  Naga College Foundation
                </h3>

                <p className="mt-3 text-lg text-gray-400">
                  Bachelor of Science in Information Technology
                </p>

                <Separator className="my-8 bg-white/10" />

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <p className="mb-2 text-sm text-gray-500">COURSE</p>
                    <p className="font-semibold">BS Information Technology</p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-gray-500">YEAR LEVEL</p>
                    <p className="font-semibold">Second Year</p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-gray-500">DEPARTMENT</p>
                    <p className="font-semibold">College of Computer Studies</p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-gray-500">STATUS</p>
                    <p className="font-semibold">Currently Enrolled</p>
                  </div>

                </div>

              </div>

              <div className="hidden h-48 w-48 items-center justify-center rounded-full border border-red-500/20 bg-red-500/10 md:flex">
                <School className="h-24 w-24 text-red-500" />
              </div>

            </CardContent>

          </Card>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="w-full bg-[#111111] px-6 py-28">

        <div className="mx-auto grid w-full gap-16 md:grid-cols-2">

          <div>

            <Badge className="mb-5 border border-red-500/30 bg-red-500/10 px-4 py-2 text-red-400 hover:bg-red-500/10">
              <Mail className="mr-2 h-3 w-3" />
              GET IN TOUCH
            </Badge>

            <h2 className="text-5xl font-black leading-tight sm:text-6xl">
              Let's Connect<span className="text-red-500">!</span>
            </h2>

            <p className="mt-6 max-w-md leading-8 text-gray-400">
              Thank you for visiting my personal website!
              Feel free to contact me through my email or phone number.
              I'd love to connect with you.
            </p>

            <div className="mt-10 flex items-center gap-3 text-gray-400">
              <MapPin className="h-5 w-5 text-red-500" />
              Naga City, Philippines
            </div>

          </div>

          <div className="space-y-5">

            <Card className="rounded-2xl border-white/10 bg-[#191919] text-white transition hover:border-red-500/50">
              <CardContent className="flex items-center gap-5 p-6">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                  <Mail className="h-6 w-6 text-red-500" />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-sm text-gray-500">Personal Email</p>
                  <a
                    href="mailto:francquinniboncodin@gmail.com"
                    className="break-all font-semibold transition hover:text-red-400"
                  >
                    francquinniboncodin@gmail.com
                  </a>
                </div>

              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/10 bg-[#191919] text-white transition hover:border-red-500/50">
              <CardContent className="flex items-center gap-5 p-6">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                  <GraduationCap className="h-6 w-6 text-red-500" />
                </div>

                <div className="min-w-0">
                  <p className="mb-1 text-sm text-gray-500">School Email (GBox)</p>
                  <a
                    href="mailto:fqboncodin@gbox.ncf.edu.ph"
                    className="break-all font-semibold transition hover:text-red-400"
                  >
                    fqboncodin@gbox.ncf.edu.ph
                  </a>
                </div>

              </CardContent>
            </Card>

            <Card className="rounded-2xl border-white/10 bg-[#191919] text-white transition hover:border-red-500/50">
              <CardContent className="flex items-center gap-5 p-6">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-red-500/10">
                  <Phone className="h-6 w-6 text-red-500" />
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-500">Phone Number</p>
                  <a
                    href="tel:09632323389"
                    className="font-semibold transition hover:text-red-400"
                  >
                    09632323389
                  </a>
                </div>

              </CardContent>
            </Card>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="w-full border-t border-white/10 bg-[#080808] px-6 py-8">

        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">

          <a href="#home" className="text-2xl font-black">
            F<span className="text-red-500">.</span>
          </a>

          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} France Queenie Boncodin.
            Made with passion and curiosity.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-red-400"
          >
            Back to top
            <ArrowRight className="-rotate-90 h-4 w-4" />
          </a>

        </div>

      </footer>

    </main>
  )
}

