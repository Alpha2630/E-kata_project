import { useState } from "react";
import { X, Phone, CreditCard, Check, Copy, Building2 } from "lucide-react";

interface MobileMoneyModalProps {
  total: number;
  onClose: () => void;
  onConfirm: () => void;
}

const MobileMoneyModal = ({ total, onClose, onConfirm }: MobileMoneyModalProps) => {
  const [copied, setCopied] = useState(false);
  const phoneNumber = "034 00 000 00"; // À remplacer par ton vrai numéro
  const formatPrice = (price: number) => price.toLocaleString() + " Ar";

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleConfirm = () => {
    const message = `Bonjour E-Kata, je viens d'effectuer un paiement de ${formatPrice(total)} pour ma commande.`;
    const whatsappUrl = `https://wa.me/261340000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onConfirm();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
        >
          <X className="w-5 h-5 dark:text-white" />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-xl font-bold dark:text-white">Paiement Mobile Money</h2>
          <p className="text-gray-500 dark:text-gray-400 mt-1">Total à payer : <span className="font-bold text-blue-600 text-lg">{formatPrice(total)}</span></p>
        </div>

        {/* Payment Instructions */}
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl">
            <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2">Instructions :</h3>
            <ol className="text-sm text-blue-700 dark:text-blue-200 space-y-2 list-decimal list-inside">
              <li>Composez le #111# sur votre téléphone</li>
              <li>Sélectionnez "Paiement Marchand"</li>
              <li>Entrez le numéro marchand ci-dessous</li>
              <li>Entrez le montant : <strong>{formatPrice(total)}</strong></li>
              <li>Validez avec votre code secret</li>
            </ol>
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Numéro Mobile Money
            </label>
            <div className="flex gap-2">
              <div className="flex-1 bg-gray-50 dark:bg-gray-700 p-4 rounded-xl flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-lg dark:text-white">{phoneNumber}</span>
              </div>
              <button
                onClick={() => handleCopy(phoneNumber.replace(/\s/g, ''))}
                className="px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-colors"
              >
                {copied ? <Check className="w-5 h-5 text-green-600" /> : <Copy className="w-5 h-5 dark:text-white" />}
              </button>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-xl space-y-2">
            <div className="flex items-center gap-2">
              <Building2 className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Opérateurs acceptés :</span>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium">Orange Money</span>
              <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full font-medium">Airtel Money</span>
              <span className="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-xs rounded-full font-medium">MVola</span>
            </div>
          </div>
        </div>

        {/* Confirm Button */}
        <button
          onClick={handleConfirm}
          className="w-full mt-6 bg-green-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <CreditCard className="w-5 h-5" />
          Confirmer le paiement via WhatsApp
        </button>

        <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
          Après confirmation, envoyez-nous la capture d'écran du paiement sur WhatsApp
        </p>
      </div>
    </div>
  );
};

export default MobileMoneyModal;