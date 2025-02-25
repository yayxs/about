import { Header } from "../components/Header";
import { Following } from "../components/Following";
import { Footer } from "../components/Footer";

export default function FollowingPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold mb-6">
            我的关注
          </h1>
          <Following />
        </div>
      </main>
      <Footer />
    </>
  );
}
