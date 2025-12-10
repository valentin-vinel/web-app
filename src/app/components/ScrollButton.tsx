'use client';

interface ScrollButtonProps {
  nextId: string;
}

export default function ScrollButton({ nextId }: ScrollButtonProps) {
  const scrollToNext = (id: string) => {
    const nextSection = document.getElementById(id);
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
        type="button"
        onClick={() => scrollToNext(nextId)}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-blue-400/50 text-3xl animate-bounce py-2 hover:cursor-pointer hidden lg:inline-block"
    >
      ↓
    </button>
  );
}
