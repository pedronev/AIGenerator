import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <Link href='/sign-in'>
            <Button>
                Login
            </Button>
            </Link>
            <Link href='/sign-up'>
            <Button>
                Register
            </Button>
            </Link>
        </div>
    )
}

export default LandingPage;