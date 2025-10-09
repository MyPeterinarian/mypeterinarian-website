// This file is intentionally minimal - routing is handled by middleware
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
