
import Loader from '@/components/cauders/Loader';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-background">
      <Loader />
    </div>
  );
}
