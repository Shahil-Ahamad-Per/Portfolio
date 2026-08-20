"use client";
import { useState, useEffect, useCallback } from "react";
import { checkRateLimit, incrementSubmissionCount } from "@/lib/rate-limit";
import { submitToWeb3Forms } from "@/lib/contact-api";

export interface RateLimiter {
  check: () => { remaining: number; isLimited: boolean };
  increment: () => { count: number; isLimited: boolean };
}

export interface ApiClient {
  submit: (data: {
    name: string;
    email: string;
    message: string;
  }) => Promise<{ success: boolean; message?: string }>;
}

const defaultRateLimiter: RateLimiter = {
  check: checkRateLimit,
  increment: incrementSubmissionCount,
};

const defaultApiClient: ApiClient = {
  submit: submitToWeb3Forms,
};

interface UseContactFormOptions {
  rateLimiter?: RateLimiter;
  apiClient?: ApiClient;
}

export function useContactForm(options: UseContactFormOptions = {}) {
  const { rateLimiter = defaultRateLimiter, apiClient = defaultApiClient } =
    options;

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [messageText, setMessageText] = useState("");

  useEffect(() => {
    const { isLimited } = rateLimiter.check();
    setIsRateLimited(isLimited);
  }, [rateLimiter]);

  const handleSubmit = useCallback(
    async (
      e: React.FormEvent<HTMLFormElement>,
      formRef: React.RefObject<HTMLFormElement | null>,
    ) => {
      e.preventDefault();

      if (isRateLimited) return;

      setIsLoading(true);
      setError(null);

      const form = e.currentTarget;
      const formData = new FormData(form);

      try {
        const data = await apiClient.submit({
          name: formData.get("name") as string,
          email: formData.get("email") as string,
          message: formData.get("message") as string,
        });

        if (data.success) {
          const { isLimited } = rateLimiter.increment();
          setIsRateLimited(isLimited);
          setIsSuccess(true);
          formRef.current?.reset();
          setMessageText("");

          setTimeout(() => setIsSuccess(false), 5000);
        } else {
          setError(data.message || "Failed to send message.");
        }
      } catch {
        setError("Failed to send message. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    },
    [isRateLimited, rateLimiter, apiClient],
  );

  return {
    isLoading,
    isSuccess,
    error,
    isRateLimited,
    messageText,
    setMessageText,
    handleSubmit,
  };
}
