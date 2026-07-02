export default function PieceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="overflow-hidden h-dvh">{children}</div>;
}
