"use client";

interface FilterErrorProps {
  error: Error;
}

export default function FilterError({ error }: FilterErrorProps) {
  return (
    <div className="text-center mt-12">
      <h2 className="text-4xl font-bold">An error occurred!</h2>
      <p className="mt-4 text-[#bcbcb7] text-lg">{error.message}</p>
    </div>
  );
}
