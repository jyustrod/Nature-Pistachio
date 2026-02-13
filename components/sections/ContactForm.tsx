'use client';

import { useState } from 'react';
import { ContactFormData } from '@/types';
import { getTranslation } from '@/lib/translations';

interface ContactFormProps {
  lang: 'es' | 'en';
}

export function ContactForm({ lang }: ContactFormProps) {
  const t = (key: string) => getTranslation(lang, key);
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus('success');
      setFormData({
        fullName: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        message: '',
      });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const inputStyles = "w-full px-4 py-3.5 bg-muted border border-border rounded-xl font-body text-foreground placeholder:text-muted-foreground/60 focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all";
  const labelStyles = "block text-sm font-body font-bold text-foreground mb-2 tracking-wide";

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
        <div>
          <label htmlFor="fullName" className={labelStyles}>
            {t('contact.form.fullName')} *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="company" className={labelStyles}>
            {t('contact.form.company')} *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="country" className={labelStyles}>
            {t('contact.form.country')} *
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className={inputStyles}
          />
        </div>
        <div>
          <label htmlFor="email" className={labelStyles}>
            {t('contact.form.email')} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputStyles}
          />
        </div>
        <div className="md:col-span-2">
          <label htmlFor="phone" className={labelStyles}>
            {t('contact.form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputStyles}
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className={labelStyles}>
          {t('contact.form.message')} *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${inputStyles} resize-none`}
        />
      </div>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-primary/10 text-primary rounded-xl font-body text-sm border border-primary/20">
          {t('contact.form.success')}
        </div>
      )}
      {status === 'error' && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl font-body text-sm border border-red-200">
          {t('contact.form.error')}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-primary text-primary-foreground font-body font-bold text-sm tracking-wider uppercase rounded-full hover:bg-primary-600 transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando...' : t('contact.form.send')}
      </button>
    </form>
  );
}
