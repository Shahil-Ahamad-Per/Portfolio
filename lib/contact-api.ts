const WEB3FORMS_URL = "https://api.web3forms.com/submit"

interface ContactFormData {
  name: string
  email: string
  message: string
}

interface ApiResponse {
  success: boolean
  message?: string
}

export async function submitToWeb3Forms(data: ContactFormData): Promise<ApiResponse> {
  const formData = new FormData()
  formData.append("name", data.name)
  formData.append("email", data.email)
  formData.append("message", data.message)
  formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "")
  formData.append("subject", "New message from your Portfolio Contact Form!")
  formData.append("from_name", "Portfolio Website")

  const response = await fetch(WEB3FORMS_URL, {
    method: "POST",
    body: formData,
  })

  return response.json()
}
