import PartnersPageContent from '@/components/cauders/PartnersPageContent';

export const metadata = {
  title: 'Partner Program - Cauders',
  description: 'Sell, white-label, or refer. You bring the clients, we handle the tech.',
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen text-foreground">
      <PartnersPageContent />
    </main>
  );
}
