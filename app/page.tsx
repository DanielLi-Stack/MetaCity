// app/page.tsx
import CardTaskDemo from "@/components/CardTaskDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="mx-auto max-w-6xl p-6">
        <CardTaskDemo />
      </main>
    </div>
  );
}
