import Sidebar from '@/components/Sidebar';
import '@/styles/globals.css';
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Sidebar>{children}</Sidebar>;
}
