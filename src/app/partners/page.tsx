import PartnersPageContent from '@/components/cauders/PartnersPageContent';

export const metadata = {
  title: 'Partner Program - Cauders',
  description: 'Sell, white-label, or refer. You bring the clients, we handle the tech.',
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-foreground pt-32">
      <PartnersPageContent />
    </main>
  );
}
