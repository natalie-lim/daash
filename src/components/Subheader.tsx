
function Subheader({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-lg bg-[#A3B49F] rounded-lg p-4 text-[#596157]">
      {children}
    </p>
  );
}

export default Subheader;