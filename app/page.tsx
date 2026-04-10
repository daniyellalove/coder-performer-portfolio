import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { WorkSection } from '@/components/WorkSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <footer
        className="py-8 text-center text-xs"
        style={{ color: 'var(--text-muted)', borderTop: '1px solid var(--border)' }}
      >
        <p>Built with Next.js · {new Date().getFullYear()}</p>
      </footer>
    </main>
  );
}
