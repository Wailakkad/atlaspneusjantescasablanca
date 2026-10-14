import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { buildServiceAppointmentMessage, buildWhatsAppUrl } from '../../lib/whatsapp';
import { X, Calendar, Clock, MessageSquare, Car, User, CheckCircle2 } from 'lucide-react';
import { BUSINESS_CONFIG } from '../../config/business';

export const AppointmentModal: React.FC = () => {
  const {
    lang,
    t,
    selectedServiceForAppointment,
    setSelectedServiceForAppointment,
    selectedVehicle,
  } = useApp();

  const [vehicleName, setVehicleName] = useState(selectedVehicle ? selectedVehicle.name : '');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Matinée (09:00 - 12:00)');
  const [customerName, setCustomerName] = useState('');

  if (!selectedServiceForAppointment) return null;

  const handleClose = () => {
    setSelectedServiceForAppointment(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dateStr = `${preferredDate} (${preferredTime})`;
    const vehicleFull = `${vehicleName}${customerName ? ` - Contact: ${customerName}` : ''}`;
    const msg = buildServiceAppointmentMessage(
      selectedServiceForAppointment,
      vehicleFull,
      dateStr,
      lang
    );
    const url = buildWhatsAppUrl(msg);
    window.open(url, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-xs transition-opacity"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-lg bg-[#181D25] border border-[#262D38] rounded-2xl shadow-2xl p-6 sm:p-8 z-10 space-y-5">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#D62828]">
              Rendez-vous Atelier Casablanca
            </span>
            <h3 className="text-lg font-bold text-white mt-1">
              {selectedServiceForAppointment.title[lang]}
            </h3>
            <p className="text-xs text-[#AAB1BA] mt-0.5">
              {selectedServiceForAppointment.priceDisplay[lang]} · {selectedServiceForAppointment.estimatedDuration}
            </p>
          </div>

          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg text-[#AAB1BA] hover:text-white hover:bg-[#20252C] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#AAB1BA] font-medium mb-1.5">
              Modèle de votre véhicule
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={vehicleName}
                onChange={(e) => setVehicleName(e.target.value)}
                placeholder="Ex: Golf 7, Dacia Duster, BMW Série 3..."
                className="w-full pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2.5 bg-[#111318] border border-[#2D3542] rounded-xl text-white placeholder-[#AAB1BA]/50 focus:outline-none focus:border-[#D62828]"
              />
              <Car className="w-4 h-4 text-[#AAB1BA] absolute left-3 rtl:left-auto rtl:right-3 top-3 pointer-events-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[#AAB1BA] font-medium mb-1.5">
                Date souhaitée
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3 py-2.5 bg-[#111318] border border-[#2D3542] rounded-xl text-white focus:outline-none focus:border-[#D62828]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[#AAB1BA] font-medium mb-1.5">
                Créneau horaire
              </label>
              <select
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#111318] border border-[#2D3542] rounded-xl text-white focus:outline-none focus:border-[#D62828]"
              >
                <option value="Matinée (09:00 - 12:00)">Matinée (09:00 - 12:00)</option>
                <option value="Midi (12:00 - 14:30)">Midi (12:00 - 14:30)</option>
                <option value="Après-midi (14:30 - 17:30)">Après-midi (14:30 - 17:30)</option>
                <option value="Fin de journée (17:30 - 19:30)">Fin de journée (17:30 - 19:30)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[#AAB1BA] font-medium mb-1.5">
              Votre Nom / Prénom (optionnel)
            </label>
            <div className="relative">
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ex: Youssef..."
                className="w-full pl-9 rtl:pl-3 rtl:pr-9 pr-3 py-2.5 bg-[#111318] border border-[#2D3542] rounded-xl text-white placeholder-[#AAB1BA]/50 focus:outline-none focus:border-[#D62828]"
              />
              <User className="w-4 h-4 text-[#AAB1BA] absolute left-3 rtl:left-auto rtl:right-3 top-3 pointer-events-none" />
            </div>
          </div>

          <div className="p-3 rounded-xl bg-[#111318] border border-[#20252C] flex items-center gap-2 text-[11px] text-[#AAB1BA]">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Confirmation instantanée et sans engagement par notre technicien WhatsApp.</span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-[#25D366] hover:bg-[#20BA5A] text-slate-950 font-bold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Valider ma demande de rendez-vous sur WhatsApp</span>
          </button>
        </form>

      </div>
    </div>
  );
};
