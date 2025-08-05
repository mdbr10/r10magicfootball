import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const subscriptionSchema = z.object({
  name: z.string({ required_error: 'Nome é obrigatório' }).min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string({ required_error: 'Email é obrigatório' }).email('Email inválido'),
  whatsapp: z.string({ required_error: 'WhatsApp é obrigatório' })
    .min(10, 'WhatsApp deve ter pelo menos 10 dígitos')
    .max(11, 'WhatsApp deve ter no máximo 11 dígitos')
    .regex(/^[0-9]+$/, 'WhatsApp deve conter apenas números')
});

type SubscriptionFormData = z.infer<typeof subscriptionSchema>;

export function useSubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SubscriptionFormData>({
    resolver: zodResolver(subscriptionSchema)
  });

  const onSubmit = async (
    data: SubscriptionFormData, 
    redirectUrl: string = "https://pay.hotmart.com/W97388758Q?checkoutMode=10&bid=1740185124920"
  ) => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append('formData', JSON.stringify({
      "first_name": data.name,
      "phone": `+55${data.whatsapp}`,
      "email": data.email,
      "formId":"gioRnUkGLHjN658v3KPE",
      "location_id":"fQZGeWWTTWBTHjRYbUUC",
      "Timezone":"America/Sao_Paulo (GMT-03:00)",
    }));
    formData.append('formId', 'gioRnUkGLHjN658v3KPE')
    try {
      await fetch('https://backend.leadconnectorhq.com/forms/submit', {
        method: 'POST',
        body: formData
      });
      window.location.href = redirectUrl;
    } catch (error) {
      console.error("error")
      console.error(error)
      setIsLoading(false);
    }
  };

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    isLoading,
    openModal,
    closeModal,
    form,
    onSubmit
  };
}