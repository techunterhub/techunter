'use client';

interface CardData {
  title: string;
  icon?: string;
  description: string;
}

export function ContactCards({ cardData }: { cardData: readonly CardData[] }) {
  return (
    <>
      <div className="max-w-[1450px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-10">
          {cardData.map((card, index) => (
            <div
              key={index}
              className={`font-montserrat bg-white flex flex-col text-black p-8 rounded-lg shadow-lg border border-transparent transform transition duration-300 hover:shadow-[0px_8px_30px_rgba(103,_49,_236,_0.15)] cursor-pointer 
          ${index === 0 ? 'lg:col-span-2 lg:row-span-2 lg:flex lg:flex-col lg:justify-center lg:gap-4 lg:tracking-widest row-span-2' : ''} 
          min-h-[250px]`}
            >
              <div className="text-4xl">{card.icon}</div>
              <h2 className={`text-4xl font-bold lg:font-black mt-4 ${index === 0 ? 'lg:text-5xl' : ''}`}>
                {card.title}
              </h2>
              <p className="mt-2 font-medium text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
