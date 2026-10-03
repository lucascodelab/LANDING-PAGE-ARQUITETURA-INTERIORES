"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import type { ContactFormData, ContactFormErrors } from "@/types";
import SectionHeading from "./SectionHeading";
import { viewportOnce } from "@/lib/motion";

const initialData: ContactFormData = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: "",
};

function validate(data: ContactFormData): ContactFormErrors {
  const errors: ContactFormErrors = {};
  if (data.name.trim().length < 2)
    errors.name = "Informe seu nome completo.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim()))
    errors.email = "Informe um e-mail válido.";
  const digits = data.phone.replace(/\D/g, "");
  if (digits.length < 10 || digits.length > 13)
    errors.phone = "Informe um telefone válido com DDD.";
  if (!data.projectType) errors.projectType = "Selecione o tipo de projeto.";
  if (data.message.trim().length < 10)
    errors.message = "Conte um pouco mais sobre o projeto (mín. 10 caracteres).";
  return errors;
}

const inputCls =
  "w-full border border-graphite/20 bg-white px-4 py-3.5 text-[15px] text-ink placeholder:text-stone/80 transition-colors focus:border-ink focus:outline-none aria-[invalid=true]:border-red-700";

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const set = (field: keyof ContactFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setData((d) => ({ ...d, [field]: e.target.value }));
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(data);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Foca o primeiro campo com erro
      const first = Object.keys(found)[0];
      document.getElementById(`contato-${first}`)?.focus();
      return;
    }
    setStatus("sending");
    // Simulação de envio — nenhum backend envolvido
    window.setTimeout(() => setStatus("sent"), 1200);
  };

  const reset = () => {
    setData(initialData);
    setErrors({});
    setStatus("idle");
  };

  const fieldError = (key: keyof ContactFormErrors) =>
    errors[key] ? (
      <p id={`contato-${key}-erro`} role="alert" className="mt-2 text-sm text-red-800">
        {errors[key]}
      </p>
    ) : null;

  return (
    <section id="contato" aria-labelledby="contato-title" className="bg-bone py-24 sm:py-32">
      <div className="container-editorial grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contato"
            title="Vamos conversar."
            description="Envie os detalhes iniciais. Retornamos com os próximos passos e uma estimativa de conversa — sem compromisso."
          />
          <span id="contato-title" className="sr-only">
            Formulário de contato
          </span>
          <address className="mt-10 space-y-4 border-t border-graphite/10 pt-8 text-[15px] not-italic leading-relaxed text-graphite/85">
            <p>
              <span className="eyebrow block">E-mail</span>
              <a href="mailto:contato@exemplo.com" className="mt-1 inline-block underline-offset-4 hover:underline">
                contato@exemplo.com
              </a>
            </p>
            <p>
              <span className="eyebrow block">Telefone</span>
              <a href="tel:+5511000000000" className="mt-1 inline-block hover:underline underline-offset-4">
                +55 (11) 0000-0000
              </a>
            </p>
            <p>
              <span className="eyebrow block">Atendimento</span>
              <span className="mt-1 block">São Paulo · projetos em todo o Brasil*</span>
            </p>
          </address>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7"
        >
          <div className="border border-graphite/10 bg-white p-6 sm:p-10">
            <AnimatePresence mode="wait">
              {status === "sent" ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="py-10 text-center"
                  role="status"
                >
                  <CheckCircle2 className="mx-auto h-12 w-12 text-ink" aria-hidden="true" />
                  <h3 className="mt-5 font-serif text-3xl font-light">
                    Projeto recebido.
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-graphite/80">
                    Obrigado, {data.name.split(" ")[0] || "por compartilhar"}.
                    Esta é uma demonstração — nenhum dado foi enviado. Em um
                    projeto real, retornaríamos em até 2 dias úteis.
                  </p>
                  <button
                    type="button"
                    onClick={reset}
                    className="mt-7 border border-ink px-6 py-3 font-sans text-[12px] uppercase tracking-[0.18em] transition-colors hover:bg-ink hover:text-bone"
                  >
                    Enviar outro projeto
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={onSubmit}
                  noValidate
                  aria-describedby="form-ajuda"
                >
                  <p id="form-ajuda" className="sr-only">
                    Todos os campos marcados com asterisco são obrigatórios.
                  </p>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contato-name" className="eyebrow mb-2 block">
                        Nome *
                      </label>
                      <input
                        id="contato-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        placeholder="Seu nome"
                        value={data.name}
                        onChange={set("name")}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? "contato-name-erro" : undefined}
                        className={inputCls}
                      />
                      {fieldError("name")}
                    </div>
                    <div>
                      <label htmlFor="contato-email" className="eyebrow mb-2 block">
                        E-mail *
                      </label>
                      <input
                        id="contato-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="voce@email.com"
                        value={data.email}
                        onChange={set("email")}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? "contato-email-erro" : undefined}
                        className={inputCls}
                      />
                      {fieldError("email")}
                    </div>
                    <div>
                      <label htmlFor="contato-phone" className="eyebrow mb-2 block">
                        Telefone *
                      </label>
                      <input
                        id="contato-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(11) 90000-0000"
                        value={data.phone}
                        onChange={set("phone")}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? "contato-phone-erro" : undefined}
                        className={inputCls}
                      />
                      {fieldError("phone")}
                    </div>
                    <div>
                      <label htmlFor="contato-projectType" className="eyebrow mb-2 block">
                        Tipo de projeto *
                      </label>
                      <select
                        id="contato-projectType"
                        name="projectType"
                        value={data.projectType}
                        onChange={set("projectType")}
                        aria-invalid={Boolean(errors.projectType)}
                        aria-describedby={errors.projectType ? "contato-projectType-erro" : undefined}
                        className={inputCls}
                      >
                        <option value="">Selecione…</option>
                        <option value="Arquitetura">Arquitetura</option>
                        <option value="Interiores">Interiores</option>
                        <option value="Reforma">Reforma</option>
                        <option value="Consultoria">Consultoria</option>
                      </select>
                      {fieldError("projectType")}
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="contato-message" className="eyebrow mb-2 block">
                        Mensagem *
                      </label>
                      <textarea
                        id="contato-message"
                        name="message"
                        rows={5}
                        placeholder="Conte sobre o espaço, metragem, prazo e referências…"
                        value={data.message}
                        onChange={set("message")}
                        aria-invalid={Boolean(errors.message)}
                        aria-describedby={errors.message ? "contato-message-erro" : undefined}
                        className={`${inputCls} resize-y`}
                      />
                      {fieldError("message")}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 bg-ink px-8 py-4 font-sans text-[12px] font-medium uppercase tracking-[0.18em] text-bone transition-opacity hover:opacity-90 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Enviar projeto
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-xs leading-relaxed text-stone">
                    Demonstração conceitual: os dados não saem do seu navegador.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
