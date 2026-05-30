import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle, ArrowRight } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Bonjour E-Kata,%0A%0A` +
      `Nom: ${formData.name}%0A` +
      `Email: ${formData.email}%0A` +
      `Téléphone: ${formData.phone}%0A` +
      `Sujet: ${formData.subject}%0A` +
      `Message: ${formData.message}`;

    window.open(`https://wa.me/261374813725?text=${message}`, '_blank');
    setSent(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-16">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 dark:text-white">
          Contactez-<span className="text-blue-600">Nous</span>
        </h1>
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
          Une question ? Besoin d'aide pour votre commande ? Nous sommes là pour vous aider.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-4">
          <a
            href="tel:+261374813725"
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
              <Phone className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold dark:text-white text-sm">Téléphone</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm truncate">+261 37 48 137 25</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
          </a>

          <a
            href="https://wa.me/261374813725"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-green-600 transition-colors">
              <MessageCircle className="w-5 h-5 text-green-600 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold dark:text-white text-sm">WhatsApp</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm truncate">+261 37 48 137 25</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
          </a>

          <a
            href="mailto:hei.alpha.7@gmail.com"
            className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center gap-4 group"
          >
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
              <Mail className="w-5 h-5 text-purple-600 group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold dark:text-white text-sm">Email</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm truncate">hei.alpha.7@gmail.com</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors flex-shrink-0" />
          </a>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="font-semibold dark:text-white text-sm">Adresse</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Tananarive, Madagascar</p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-md flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h3 className="font-semibold dark:text-white text-sm">Horaires</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Lun-Ven: 8h-18h</p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Sam: 9h-16h</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-2xl shadow-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 dark:text-white">
            Envoyez-nous un <span className="text-blue-600">message</span>
          </h2>

          {sent ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-green-600 mb-2">Message envoyé !</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Nous vous répondrons dans les plus brefs délais.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white text-sm"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white text-sm"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white text-sm"
                    placeholder="+261 37 48 137 25"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                    Sujet *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white text-sm"
                  >
                    <option value="">Sélectionnez un sujet</option>
                    <option value="Commande">Question sur une commande</option>
                    <option value="Produit">Information produit</option>
                    <option value="Livraison">Livraison</option>
                    <option value="Paiement">Paiement</option>
                    <option value="Autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none resize-none dark:text-white text-sm"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Envoyer via WhatsApp
              </button>

              <p className="text-center text-xs text-gray-400 dark:text-gray-500">
                En cliquant, vous serez redirigé vers WhatsApp pour confirmer l'envoi
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;