import { Reveal } from "@/components/motion/Reveal";
import { WaitlistForm } from "@/components/forms/WaitlistForm";

export default function WaitlistPage(): React.ReactElement {
  return (
    <div className="bg-paper pb-24 pt-28 sm:pt-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
        <Reveal>
          <p className="kicker text-purple">Early access</p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink sm:text-5xl">Join the early access list.</h1>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Early access will open to a small number of selected event organisations following our founding pilot.
            Join the waitlist for early access, product updates and Looped intelligence.
          </p>
        </Reveal>
      </div>

      <div className="mx-auto mt-12 max-w-2xl px-5 sm:px-6 lg:px-8">
        <Reveal>
          <WaitlistForm />
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="text-lg font-semibold text-ink">What happens next</h2>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed text-slate">
            <li>We confirm your place on the early access list.</li>
            <li>You get product updates and Looped intelligence while the pilot runs.</li>
            <li>As places open, we get in touch to begin where it makes sense for your business.</li>
            <li>You see what Looped surfaces, why it matters and the move it would propose, on your own data.</li>
          </ul>
        </Reveal>
      </div>
    </div>
  );
}
