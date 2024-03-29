import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} layout="fill" objectFit="cover" className="rounded-2xl" />
      </div>
      <div className="absolute top-32 left-12">
        <h2 className="text-4xl mb-3 w-64 font-semibold">{title}</h2>
        <p className="font-semibold">{description}</p>
        <button className="text-sm bg-gray-900 text-white px-4 py-2 mt-5 rounded-lg">{buttonText}</button>
      </div>
    </section>
  )
}

export default LargeCard;
