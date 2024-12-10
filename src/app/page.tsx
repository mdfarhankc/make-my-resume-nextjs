import Logo from "@/components/logo";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CustomUserButton from "@/components/user-button";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { Palette, Share2, Zap } from "lucide-react";
import Link from "next/link";

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Software Engineer",
    quote:
      "ResumeGenius helped me land my dream job. The templates are sleek and the customization options are unmatched.",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Specialist",
    quote:
      "I was amazed at how quickly I could create a professional-looking resume. It's a game-changer for job seekers!",
  },
  {
    name: "Michael Brown",
    role: "Recent Graduate",
    quote:
      "As a new grad, I was struggling to make my resume stand out. ResumeGenius made it easy and I got callbacks within a week!",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-3">
          <Logo href="/" />
          <div className="flex items-center justify-between gap-3">
            <SignedIn>
              <Button asChild>
                <Link href="/resumes">Dashboard</Link>
              </Button>
            </SignedIn>
            <ThemeToggle />
            <CustomUserButton />
            <SignedOut>
              <Button asChild>
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create Stunning Resumes in Minutes
                </h1>
                <p className="mx-auto max-w-[700px] text-foreground/70 md:text-xl">
                  Stand out from the crowd with professionally designed resumes.
                  Easy to use, quick to customize, and guaranteed to impress.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="default">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
              Why Choose MakeMyResume?
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-card">
                <CardHeader>
                  <Zap className="mb-2 h-8 w-8 text-muted-foreground" />
                  <CardTitle className="text-muted-foreground">
                    Lightning Fast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create a professional resume in just minutes with our
                    intuitive builder.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardHeader>
                  <Palette className="mb-2 h-8 w-8 text-muted-foreground" />
                  <CardTitle className="text-muted-foreground">
                    Customizable Designs
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Choose from a variety of modern templates and customize
                    colors to match your style.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardHeader>
                  <Share2 className="mb-2 h-8 w-8 text-muted-foreground" />
                  <CardTitle className="text-muted-foreground">
                    Easy Sharing
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Download your resume in multiple formats or share a link
                    directly with employers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-secondary-foreground sm:text-4xl md:text-5xl">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-card-foreground">
                  <CardHeader>
                    <CardTitle className="text-secondary">
                      {testimonial.name}
                    </CardTitle>
                    <p className="text-sm text-secondary">{testimonial.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-secondary">
                      &quot;{testimonial.quote}&quot;
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full bg-muted py-12 text-foreground md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Build Your Perfect Resume?
                </h2>
                <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl">
                  Join thousands of successful job seekers who have boosted
                  their careers with ResumeGenius.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <SignedIn>
                  <Button asChild>
                    <Link href="/resumes">Got To Dashboard</Link>
                  </Button>
                </SignedIn>
                <SignedOut>
                  <Button asChild>
                    <Link href={"/sign-up"}>Sign Up</Link>
                  </Button>
                </SignedOut>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 border-t border-secondary px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs text-secondary-foreground">
          © 2024 ResumeGenius. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link
            className="text-xs text-secondary-foreground underline-offset-4 hover:underline"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-secondary-foreground underline-offset-4 hover:underline"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </>
  );
}
