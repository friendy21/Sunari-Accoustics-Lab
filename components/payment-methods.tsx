import Image from "next/image"

export function PaymentMethods() {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
        <Image src="/placeholder.svg?height=20&width=30&query=visa+logo" alt="Visa" width={30} height={20} />
      </div>
      <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=20&width=30&query=mastercard+logo"
          alt="Mastercard"
          width={30}
          height={20}
        />
      </div>
      <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=20&width=30&query=amex+logo"
          alt="American Express"
          width={30}
          height={20}
        />
      </div>
      <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
        <Image src="/placeholder.svg?height=20&width=30&query=discover+logo" alt="Discover" width={30} height={20} />
      </div>
      <div className="bg-white rounded p-1 h-8 w-16 flex items-center justify-center">
        <Image src="/placeholder.svg?height=20&width=50&query=paypal+logo" alt="PayPal" width={50} height={20} />
      </div>
      <div className="bg-white rounded p-1 h-8 w-16 flex items-center justify-center">
        <Image src="/placeholder.svg?height=20&width=50&query=apple+pay+logo" alt="Apple Pay" width={50} height={20} />
      </div>
    </div>
  )
}
