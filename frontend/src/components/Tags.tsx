const earthTones: string[] = [
  "#7C6A53", // taupe brown
  "#A68A64", // warm sand
  "#8B6F47", // walnut
  "#5E4B3C", // dark cocoa
  "#B8A589", // clay beige
  "#6B4226", // chestnut
  "#9C8264", // khaki
  "#4A3B2A", // espresso
  "#C2B280", // ecru/olive sand
  "#6E5A3F", // umber
  "#7A8450", // moss green
  "#9CAF88", // sage
  "#5F6B4C", // olive drab
  "#B2BA9E", // pale sage
  "#6B7A5E", // muted forest
  "#8A9A5B", // moss/olive
  "#788A6B", // sage gray-green
  "#4D5D43", // deep fern
];

function Tags({ title, color, height = "h-5", textSize = "text-xs", textColor = "#F4F3EE", fontWeight = "font-light" }: { title: React.ReactNode; color?: string; height?: string; textSize?: string; textColor?: string; fontWeight?: string }) {
  const resolvedColor = color ?? earthTones[Math.floor(Math.random() * earthTones.length)];
  return (
    <p className={`${textSize} ${fontWeight} px-4 rounded-lg w-fit ${height}`} style={{ backgroundColor: resolvedColor, color: textColor }}>
      {title}
    </p>
  );
}

export default Tags;
