
import { Hero } from '@/components/Hero';
import { VerificationForm } from '@/components/VerificationForm';

const Verify = () => {
  return (
    <div>
      <Hero
        title="SEARCH PRODUCT SN"
        subtitle="Verify the authenticity of your JinkoSolar product"
        backgroundImage="/lovable-uploads/cdd70945-744f-48c3-9abf-29e17cb83204.png"
      />
      
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Dear users, you can identify the authenticity of the product by entering the module's serial number.
            </p>
          </div>
          
          <div className="mb-8 text-center">
            <img
              src="https://cs.jinkosolar.com/app/assets/tipPIC-BKtbCB82.jpg"
              alt="Serial number barcode example"
              className="mx-auto rounded-lg shadow-md"
            />
          </div>
          
          <VerificationForm />
        </div>
      </section>
    </div>
  );
};

export default Verify;
