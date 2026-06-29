function Subheader({ title, color, height = "h-12", textSize = "text-lg", textColor = "#596157", fontWeight = "font-bold" }: { title: React.ReactNode; color: string; height?: string; textSize?: string; textColor?: string; fontWeight?: string }) {
  return (
    <p className={`${textSize} ${fontWeight} px-4 rounded-lg items-center flex w-full ${height}`} style={{ backgroundColor: color, color: textColor }}>
      {title}
    </p>
  );
}

export default Subheader;
