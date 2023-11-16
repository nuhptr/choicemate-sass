import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function LandingPage() {
   return (
      <div>
         <h1>Landing Page (Unprotected)</h1>
         <div>
            <Link href="/sign-in">
               <Button>Login</Button>
            </Link>
         </div>
      </div>
   )
}
