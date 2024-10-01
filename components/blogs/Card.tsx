'use client';
export default function BlogsCard() {
  return (
    <>
      <div className="">
        <div className="flex gap-2">
          <div className="bg-gray-200 rounded-full">
            <img src="https://picsum.photos/60/60" alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400">Posted by</p>
            <p className="text-gray-950">Techunter</p>
          </div>
        </div>
        <div className="bg-gray-200 py-4">
          <img src="https://picsum.photos/230/350" alt="" className="w-[350px] h-[230px] object-cover" />
        </div>
        <div className="py-4">
          <p className="text-gray-400">july 27 ,2023</p>
          <h2 className="text-gray-950 font-bold text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas explicabo in voluptatibus, necessitatibus illo
            sed.
          </h2>
        </div>
      </div>
    </>
  );
}
