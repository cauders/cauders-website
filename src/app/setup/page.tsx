
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { setupCompanyData } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function SetupPage() {
  const [secret, setSecret] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSetup = async () => {
    if (!secret) {
      toast({
        variant: 'destructive',
        title: 'Secret key required.',
        description: 'Please enter the secret key to proceed.',
      });
      return;
    }
    setIsLoading(true);
    try {
      const result = await setupCompanyData(secret);
      if (result.success) {
        toast({
          title: 'Success!',
          description: result.message,
        });
      } else {
        toast({
          variant: 'destructive',
          title: 'Setup Failed',
          description: result.message,
        });
      }
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'An Error Occurred',
        description: 'Could not complete the setup. Check the console for more details.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Company Data Setup</CardTitle>
            <CardDescription>
              Click the button below to initialize the company information in your Firestore database.
              This will create a collection named `companyInfo` with a single document `main`.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
             <div>
                <label htmlFor="secret" className="block text-sm font-medium text-foreground/80 mb-2">
                    Secret Key
                </label>
                <Input
                    id="secret"
                    type="password"
                    value={secret}
                    onChange={(e) => setSecret(e.target.value)}
                    placeholder="Enter secret key..."
                    disabled={isLoading}
                />
                 <p className="text-xs text-muted-foreground mt-2">
                    For this demo, the secret is: `cauders-secret`
                </p>
            </div>
            <Button onClick={handleSetup} className="w-full" disabled={isLoading}>
              {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Save Company Info to Firestore
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
