// Server Component — HTML is fully rendered on the server for maximum SEO
import { HeroSection } from '@/components/sections/HeroSection';
import { PostsGridSection } from '@/components/sections/PostsGridSection';
import { HumanLayerSection } from '@/components/sections/HumanLayerSection';
import { EcosystemSection } from '@/components/sections/EcosystemSection';
import { CommunitySection } from '@/components/sections/CommunitySection';
import { OnboardingSection } from '@/components/sections/OnboardingSection';
import { Footer } from '@/components/layout/Footer';
import { MobileAnimations } from '@/components/MobileAnimations';
import { HomepageStructuredData } from '@/components/StructuredData';
import { ReferralCapture } from '@/components/ReferralCapture';

export default function Home() {
    return (
        <>
            {/* Structured data injected server-side */}
            <HomepageStructuredData />
            {/* Thin client component for referral code capture */}
            <ReferralCapture />
            {/* Mobile animations — client-only, doesn't affect SSR */}
            <MobileAnimations />
            <main>
                <HeroSection />
                <PostsGridSection />
                <HumanLayerSection />
                <EcosystemSection />
                <CommunitySection />
                <OnboardingSection />
                <Footer />
            </main>
        </>
    );
}
