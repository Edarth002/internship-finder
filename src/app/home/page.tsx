import {
  Lightbulb,
  Trophy,
  Clock,
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <div className="h-8 w-8 bg-orange-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">TC</span>
          </div>
          <span className="ml-2 text-lg font-semibold">TechCorp</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#program"
          >
            Program
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#benefits"
          >
            Benefits
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#apply"
          >
            Apply
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-20 bg-gradient-to-br from-orange-50 to-indigo-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="w-fit bg-orange-100 text-orange-800 hover:bg-orange-200 rounded-full px-3 py-2">
                    Summer 2025 Applications Open
                  </h1>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Launch Your Tech Career with Our{" "}
                    <span className="text-orange-600">Internship Platform</span>
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-lg py-5">
                    Get access to our platform where you'll find and work on
                    real projects, learn from industry experts, and build the
                    skills that matter in today's tech landscape.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="bg-orange-600 hover:bg-orange-700 px-10 py-3 rounded-full flex items-center">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                  <button>Learn More</button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>12 weeks</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>Full-time</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Interns"
                  className="aspect-video overflow-hidden rounded-xl object-cover"
                  height="400"
                  src="/hero.jpg"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview */}
        <section id="program" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What You'll Experience
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our comprehensive internship program is designed to give you
                  hands-on experience with cutting-edge technologies while
                  working alongside seasoned professionals.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div>
                <div>
                  <div className="h-10 w-10 text-orange-600" />
                  <h3>Real Project Work</h3>
                  <p>
                    Contribute to actual products used by millions of div
                    worldwide
                  </p>
                </div>
                <h2>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Full-stack development projects
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Code reviews with senior engineers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Agile development practices
                    </li>
                  </ul>
                </h2>
              </div>
              <div>
                <div>
                  <Lightbulb className="h-10 w-10 text-orange-600" />
                  <h3>Mentorship Program</h3>
                  <p>
                    Get paired with experienced engineers who will guide your
                    growth
                  </p>
                </div>
                <h2>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Weekly 1-on-1 sessions
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Career development planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Technical skill building
                    </li>
                  </ul>
                </h2>
              </div>
              <div>
                <div>
                  <Trophy className="h-10 w-10 text-orange-600" />
                  <h3>Learning & Growth</h3>
                  <p>
                    Access to workshops, training sessions, and industry
                    conferences
                  </p>
                </div>
                <h2>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Tech talks and workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Conference attendance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Certification opportunities
                    </li>
                  </ul>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section
          id="benefits"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-50"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Why Choose Our Program?
                  </h2>
                  <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We're committed to providing an exceptional internship
                    experience that sets you up for long-term success in the
                    tech industry.
                  </p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-orange-600 font-semibold text-sm">
                        $
                      </span>
                    </div>
                    <div>
                      <h3 className="font-semibold">Competitive Pay</h3>
                      <p className="text-sm text-gray-600">
                        Industry-leading compensation package
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Networking</h3>
                      <p className="text-sm text-gray-600">
                        Connect with industry professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Full-time Offers</h3>
                      <p className="text-sm text-gray-600">
                        85% of interns receive job offers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-4 w-4 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Innovation</h3>
                      <p className="text-sm text-gray-600">
                        Work on cutting-edge technologies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Image
                alt="Office environment"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Interns Say
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from past interns about their transformative experiences
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p>
                    "This internship completely changed my perspective on
                    software development. The mentorship was incredible, and I
                    learned more in 12 weeks than I did in two years of
                    college."
                  </p>
                </div>
                <h2>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-semibold">Sarah Chen</p>
                      <p className="text-sm text-gray-600">
                        Software Engineer Intern → Full-time SWE
                      </p>
                    </div>
                  </div>
                </h2>
              </div>
              <div>
                <div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p>
                    "The real-world experience I gained here was invaluable. I
                    worked on features that millions of div interact with daily.
                    The team treated me like a full team member from day one."
                  </p>
                </div>
                <h2>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <p className="font-semibold">Marcus Johnson</p>
                      <p className="text-sm text-gray-600">
                        Product Management Intern → PM at Google
                      </p>
                    </div>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Application CTA */}
        <section
          id="apply"
          className="w-full py-12 md:py-24 lg:py-32 bg-orange-600"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Ready to Start Your Journey?
                </h2>
                <p className="max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Applications are now open for our Summer 2024 internship
                  program. Don't miss this opportunity to accelerate your
                  career.
                </p>
              </div>
              <div className="space-x-4">
                <button className="bg-white text-orange-600 hover:bg-gray-100 px-5 py-3 rounded-full">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
                <button className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent">
                  View Requirements
                </button>
              </div>
              <div className="flex items-center gap-6 text-sm text-orange-100 pt-4">
                <span>Application Deadline: March 15, 2024</span>
                <span>•</span>
                <span>Program Starts: June 3, 2024</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">
          © 2024 TechCorp. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600"
            href="#"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs hover:underline underline-offset-4 text-gray-600"
            href="#"
          >
            Contact Us
          </Link>
        </nav>
      </footer>
    </div>
  );
}
