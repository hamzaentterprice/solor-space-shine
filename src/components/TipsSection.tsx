
interface TipsSectionProps {
  title: string;
  image: string;
  tips: string[];
}

export const TipsSection = ({ title, image, tips }: TipsSectionProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={image}
              alt="Solar tips illustration"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
