
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
      <div className="min-h-screen bg-gray-800 text-white">
        {/* Hero Section */}
        <div className="bg-gray-700 py-16 px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">SEARCH</h1>
          <h1 className="text-4xl md:text-5xl font-bold">PRODUCT SN</h1>
        </div>
        
        {/* Content Section */}
        <div className="px-4 py-8">
          <p className="text-gray-300 mb-4 leading-relaxed">
            Dear users, you can identify the authenticity of the product by entering the module's serial number.
          </p>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            The product(s) in association with the serial number(s) you inquired about are eligible for Jinko Solar's warranty and after-sales services within the Pakistan and the sales region this country located. Beyond this area, the warranty and after-sales service will not be available.
          </p>
          
          {/* Product Details */}
          <div className="space-y-4">
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">Country Entered</span>
              <span className="text-white">{country}</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">Sales Destination</span>
              <span className="text-white">{country}</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">Importer Name</span>
              <span className="text-white">IRI Traders</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">Production Date</span>
              <span className="text-white">2024-01-27</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">Delivery Date</span>
              <span className="text-white">2024-02-05</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">SN</span>
              <span className="text-white">{serialNumber}</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">Product</span>
              <span className="text-white">JKM585N-72HL4-BDV</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">Level</span>
              <span className="text-white">Class A</span>
            </div>
            
            <div className="flex justify-between py-3 border-b border-gray-600">
              <span className="text-gray-400">Result</span>
              <span className="text-white">Jinko Product</span>
            </div>
          </div>
          
          {/* Back Button */}
          <div className="mt-8 text-center">
            <Button 
              onClick={() => setIsVerified(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-md w-full max-w-xs"
            >
              Back
            </Button>
          </div>
        </div>
      </div>
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
