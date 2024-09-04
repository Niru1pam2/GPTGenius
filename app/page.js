import Link from "next/link";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">
            GPT<span className="text-purple-400">Genius</span>
          </h1>
          <p className="py-6">
            GPTGenius: Your AI language companion. Powered by OpenAI, it
            enhances your conversations, content creation, and more!
          </p>
          <Link href="/chat" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
