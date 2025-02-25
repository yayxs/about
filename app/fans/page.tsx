import { Header } from "../components/Header";
import { Fans } from "../components/Fans";
import { Footer } from "../components/Footer";

export default function FansPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">
            我的粉丝
          </h1>
          <Fans />
        </div>
      </main>
      <Footer />
    </>
  );
}
