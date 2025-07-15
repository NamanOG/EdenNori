"use server"

interface PaymentResult {
  success: boolean
  message: string
}

export async function processPayment(
  prevState: PaymentResult | null, 
  formData: FormData
): Promise<PaymentResult> {
  await new Promise((resolve) => setTimeout(resolve, 2000)) // Simulate network delay

  const cardNumber = formData.get("cardNumber") as string
  const expiryDate = formData.get("expiryDate") as string
  const cvv = formData.get("cvv") as string
  const cardHolderName = formData.get("cardHolderName") as string

  // Basic validation and simulated success/failure logic
  if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
    return { success: false, message: "Please fill in all payment details." }
  }

  if (cardNumber.startsWith("4") && cardNumber.length === 16 && expiryDate.length === 5 && cvv.length === 3) {
    // Simulate a successful payment for valid-looking card numbers starting with '4'
    return { success: true, message: "Payment successful! Your order has been placed." }
  } else {
    // Simulate a failed payment for other cases
    return { success: false, message: "Payment failed. Please check your card details and try again." }
  }
}
