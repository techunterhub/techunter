'use client';

interface CardData {
    title:string,
    icon:string,
    description:string
}

export function ContactCards({ cardData }:{cardData: readonly CardData[]}) {
  return (
    <>
      <div className="max-w-[1450px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {cardData.map((card: CardData, index: number) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 min-h-[250px]"
            >
              <div className="text-4xl">{card.icon}</div>
              <h2 className="text-xl font-bold mt-4">{card.title}</h2>
              <p className="mt-2">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
