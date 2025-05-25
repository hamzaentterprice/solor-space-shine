
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const VerificationForm = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [country, setCountry] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate verification process
    setTimeout(() => {
      setIsLoading(false);
      setIsVerified(true);
    }, 2000);
  };

  if (isVerified) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <CardTitle className="text-xl font-semibold text-green-600">Verification Successful!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Country</span>
              <span className="font-medium">Pakistan</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Entered Sales</span>
              <span className="font-medium">Pakistan</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Destination</span>
              <span className="font-medium">Nizam Energy (PVT) LTD</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Production Date</span>
              <span className="font-medium">2025-03-04</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Delivery Date</span>
              <span className="font-medium">2025-04-02</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">SN</span>
              <span className="font-medium">{serialNumber}</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Product</span>
              <span className="font-medium">JKM580N-72HL4-BDV</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200">
              <span className="text-gray-600">Level</span>
              <span className="font-medium">Class A</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-200 md:col-span-2">
              <span className="text-gray-600">Result</span>
              <span className="font-medium text-green-600">Genuine JinkoSolar Product</span>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <Button 
              onClick={() => setIsVerified(false)}
              variant="outline"
              className="px-8"
            >
              Verify Another Product
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Product Verification</CardTitle>
        <CardDescription>
          Verify the authenticity of your JinkoSolar product by entering the module's serial number.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleVerify} className="space-y-4">
          <div>
            <Label htmlFor="country">Country</Label>
            <Select value={country} onValueChange={setCountry}>
              <SelectTrigger>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="afghanistan">Afghanistan</SelectItem>
                <SelectItem value="usa">United States</SelectItem>
                <SelectItem value="china">China</SelectItem>
                <SelectItem value="germany">Germany</SelectItem>
                <SelectItem value="pakistan">Pakistan</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="serialNumber">Serial Number</Label>
            <Input
              id="serialNumber"
              type="text"
              placeholder="Please scan or enter the SN"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="verificationCode">Verification Code</Label>
            <Input
              id="verificationCode"
              type="text"
              placeholder="Please enter the verification code"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-green-600 hover:bg-green-700"
            disabled={isLoading || !serialNumber || !country || !verificationCode}
          >
            {isLoading ? 'Verifying...' : 'VERIFY'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
