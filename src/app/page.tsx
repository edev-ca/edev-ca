export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Site en maintenance
        </h1>
        <p className="text-gray-600 mb-6">
          Nous travaillons actuellement sur une mise à jour du site. Merci de revenir plus tard.
        </p>
        <p className="text-sm text-gray-500">
          Besoin de nous contacter ?{" "}
          <a href="mailto:contact@edev-ca.com" className="text-blue-600 underline">
            contact@edev-ca.com
          </a>
        </p>
      </div>
    </div>
  );
}
